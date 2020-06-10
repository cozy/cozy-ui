import { hocReplacer } from '@cozy/codemods'

const isBreakpointProp = prop => {
  return prop.key && prop.key.name === 'breakpoints'
}

const findBreakpointsProp = objPattern => {
  if (!objPattern) {
    return
  }
  if (objPattern.type !== 'ObjectPattern') {
    return
  }

  return objPattern.properties
    ? objPattern.properties.filter(isBreakpointProp).map(prop => prop)
    : []
}

export default function transformer(file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  const replaceBreakpointsHOC = hocReplacer({
    propsFilter: isBreakpointProp,
    propsFinder: findBreakpointsProp,
    hookUsage: foundProps => {
      return `const ${foundProps
        .map(p => j(p.value).toSource())
        .join(', ')} = useBreakpoints()`
    },
    hocName: 'withBreakpoints',
    j,
    importOptions: {
      filter: x => {
        return (
          x.source.value == 'cozy-ui/transpiled/react' ||
          x.source.value == 'cozy-ui/react'
        )
      },
      specifiers: {
        useBreakpoints: true
      },
      package: 'cozy-ui/transpiled/react'
    }
  })

  return replaceBreakpointsHOC(root).toSource()
}
