const makeUtils = require('@cozy/codemods/src/utils')

const mappings = {
  MainTitle: {
    componentName: 'Typography',
    props: {
      variant: 'h3',
      component: 'h1'
    }
  },
  Title: {
    componentName: 'Typography',
    props: {
      variant: 'h4'
    }
  },
  SubTitle: {
    componentName: 'Typography',
    props: {
      variant: 'h5'
    }
  },
  Bold: {
    componentName: 'Typography',
    props: {
      variant: 'h6'
    }
  },
  Caption: {
    componentName: 'Typography',
    props: {
      variant: 'caption',
      color: 'textSecondary'
    }
  },
  Text: {
    componentName: 'Typography',
    props: {
      variant: 'body1'
    }
  }
}

const ensureImport = (j, root, options) => {
  const existingImport = root.find(
    options.defaultImport ? j.ImportDefaultSpecifier : j.ImportSpecifier,
    { local: { name: options.localName } }
  )
  if (existingImport.length > 0) {
    return
  } else {
    const paths = root.find(j.ImportDeclaration)
    paths
      .at(-1)
      .insertAfter(
        j.importDeclaration(
          [
            (options.defaultImport
              ? j.importDefaultSpecifier
              : j.importSpecifier)(j.identifier(options.localName))
          ],
          j.literal(options.source)
        )
      )
  }
}

export default function transformer(file, api) {
  const j = api.jscodeshift
  const utils = makeUtils(j)
  const root = j(file.source)
  let hasFound = false

  Object.entries(mappings).forEach(([oldComponent, newSpec]) => {
    // Replace JSX opening elements
    root
      .find(j.JSXOpeningElement, { name: { name: oldComponent } })
      .forEach(path => {
        hasFound = true
        path.node.name = j.jsxIdentifier(newSpec.componentName)

        for (let [propName, propValue] of Object.entries(newSpec.props)) {
          path.node.attributes.push(
            j.jsxAttribute(j.jsxIdentifier(propName), j.literal(propValue))
          )
        }
      })

    // Replace JSX closing elements
    root
      .find(j.JSXClosingElement, { name: { name: oldComponent } })
      .forEach(path => {
        path.node.name = j.jsxIdentifier(newSpec.componentName)
      })
  })

  utils.imports.removeUnused(root)

  // Ensures Typography is imported
  if (hasFound) {
    console.log('ensure import')
    utils.imports.add(
      root,
      {
        default: 'Typography'
      },
      'cozy-ui/transpiled/react/Typography'
    )
  }

  return root.toSource()
}
