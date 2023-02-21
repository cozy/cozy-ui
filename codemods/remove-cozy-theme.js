// Press ctrl+space for code completion

const imports = require('@cozy/codemods/src/imports')

const strip = txt => txt.replace(/\n/g, '').replace(/\s/g, '')
const nonEmpty = node => {
  if (
    (node.type === 'Literal' || node.type == 'JSXText') &&
    strip(node.value) === ''
  ) {
    return false
  }
  return true
}

module.exports = function transformer(file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'MuiCozyTheme' } }
    })
    .forEach(path => {
      const nonEmptyChildren = path.node.children.filter(nonEmpty)
      if (nonEmptyChildren.length == 1) {
        path.replace(nonEmptyChildren[0])
      } else {
        path.replace(
          j.jsxFragment(
            j.jsxOpeningFragment(),
            j.jsxClosingFragment(),
            nonEmptyChildren
          )
        )
      }
    })

  imports.removeUnused(root)

  return root.toSource()
}
