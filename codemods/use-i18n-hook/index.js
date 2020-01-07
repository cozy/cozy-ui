import makeUtils from '../utils'

const prepend = (arr, item) => {
  arr.splice(0, 0, item)
}

const isI18nProp = prop => {
  return prop.key && (prop.key.name === 't' || prop.key.name === 'f')
}

const findI18nProps = objPattern => {
  if (!objPattern) {
    return
  }
  if (objPattern.type !== 'ObjectPattern') {
    return
  }
  return objPattern.properties
    ? objPattern.properties.filter(isI18nProp).map(prop => prop.key.name)
    : []
}

const findNearest = (path, condition) => {
  while (path && !condition(path) && path.parentPath) {
    path = path.parentPath
  }
  return path
}

const findPropObjectPattern = (j, functionBodyPath) => {
  const functionBody = functionBodyPath.node
  const propsArg = functionBody.params[0]
  const propObjPattern =
    propsArg && propsArg.type === 'ObjectPattern' ? propsArg : null
  if (propObjPattern) {
    return { objPattern: propObjPattern, from: 'params' }
  }

  const bodyPropsDeclarators = j(functionBodyPath).find(j.VariableDeclarator, {
    init: {
      name: 'props'
    }
  })
  const bodyPropsDeclarator =
    bodyPropsDeclarators.length > 0 ? bodyPropsDeclarators.get(0) : 0

  if (
    bodyPropsDeclarator &&
    bodyPropsDeclarator.node.id.type === 'ObjectPattern'
  ) {
    return {
      objPattern: bodyPropsDeclarator.node.id,
      from: 'body',
      declarator: bodyPropsDeclarator
    }
  }
}

export default function transformer(file, api) {
  const j = api.jscodeshift
  const utils = makeUtils(j)
  const root = j(file.source)

  const replaceI18nPropsByHook = arrowFunctionBodyPath => {
    const arrowFunctionBody = arrowFunctionBodyPath.node
    const objPattern = findPropObjectPattern(j, arrowFunctionBodyPath)
    if (!objPattern) {
      return
    }

    const {
      objPattern: propObjPattern,
      from: objPatternOrigin,
      declarator: objPatternDeclarator
    } = objPattern

    const i18nProps = findI18nProps(propObjPattern)

    if (!i18nProps || !i18nProps.length) {
      return
    }

    if (!arrowFunctionBody.body.body || !arrowFunctionBody.body.body.splice) {
      arrowFunctionBody.body = j.blockStatement([
        j.returnStatement(arrowFunctionBody.body)
      ])
    }

    const updatedProperties = propObjPattern.properties.filter(
      prop => !isI18nProp(prop)
    )

    if (
      updatedProperties.length === 0 &&
      arrowFunctionBody.params.length === 1 &&
      objPatternOrigin === 'params'
    ) {
      arrowFunctionBody.params = []
    } else if (objPatternOrigin === 'params') {
      arrowFunctionBody.params[0].properties = updatedProperties
    } else if (updatedProperties.length > 0 && objPatternOrigin === 'body') {
      objPatternDeclarator.node.id.properties = updatedProperties
    } else if (updatedProperties === 0 && objPatternOrigin === 'body') {
      objPatternDeclarator.prune()
    }

    prepend(arrowFunctionBody.body.body, `const { ${i18nProps} } = useI18n()`)
    utils.hoc.removeHOC(arrowFunctionBodyPath, 'translate')

    const declarator = findNearest(
      arrowFunctionBodyPath,
      x => x.node.type === 'VariableDeclarator'
    )
    const ComponentName = declarator.node.id.name
    j(declarator)
      .closestScope()
      .find(j.Identifier, {
        name: ComponentName
      })
      .forEach(path => {
        utils.hoc.removeHOC(path, 'translate')
      })

    utils.hoc.removeDefaultExportHOC(root, ComponentName, 'translate')
    return true
  }

  const components = root.find(j.ArrowFunctionExpression)

  let needToAddUseI18nImport = false
  components.forEach(path => {
    if (replaceI18nPropsByHook(path)) {
      needToAddUseI18nImport = true
    }
  })

  if (needToAddUseI18nImport) {
    utils.imports.add(
      root,
      {
        useI18n: true
      },
      x => {
        return (
          x.source.value == 'cozy-ui/transpiled/react' ||
          x.source.value == 'cozy-ui/react'
        )
      },
      'cozy-ui/transpiled/react'
    )
    utils.simplifyCompose(root)
    utils.imports.removeUnused(root)
    return root.toSource()
  }

  return null
}
