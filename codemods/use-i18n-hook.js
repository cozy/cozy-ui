import makeUtils from './utils'

const prepend = (arr, item) => {
  arr.splice(0, 0, item)
}

const isI18nProp = prop => {
  return prop.key && (prop.key.name === 't' || prop.key.name === 'f')
}

const findI18nProps = params => {
  const props = params[0]
  if (!props) {
    return
  }
  if (props.type !== 'ObjectPattern') {
    return
  }
  return props.properties
    ? props.properties.filter(isI18nProp).map(prop => prop.key.name)
    : []
}

const findNearest = (path, condition) => {
  while (path && !condition(path) && path.parentPath) {
    path = path.parentPath
  }
  return path
}

export default function transformer(file, api) {
  const j = api.jscodeshift
  const utils = makeUtils(j)
  const root = j(file.source)

  const replaceI18nPropsByHook = arrowFunctionBodyPath => {
    const arrowFunctionBody = arrowFunctionBodyPath.node
    const i18nProps = findI18nProps(arrowFunctionBody.params)
    if (!i18nProps || !i18nProps.length) {
      return
    }

    // TODO why some body do not have splice ?
    if (!arrowFunctionBody.body.body || !arrowFunctionBody.body.body.splice) {
      return false
    }

    const updatedProperties = arrowFunctionBody.params[0].properties.filter(
      prop => !isI18nProp(prop)
    )

    if (
      updatedProperties.length === 0 &&
      arrowFunctionBody.params.length === 1
    ) {
      arrowFunctionBody.params = []
    } else {
      arrowFunctionBody.params[0].properties = updatedProperties
    }

    prepend(arrowFunctionBody.body.body, `const { ${i18nProps} } = useI18n()`)
    utils.hoc.removeHOC(arrowFunctionBodyPath, 'translate')

    const declarator = findNearest(
      arrowFunctionBodyPath,
      x => x.node.type === 'VariableDeclarator'
    )
    const ComponentName = declarator.node.id.name
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
      }
    )
  }

  return root.toSource()
}
