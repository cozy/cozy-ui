/**
 * Original: <Button><Icon />Label</Button>
 * New : <Button icon={<Icon />} label="Label" />
 */

module.exports = function(file, api) {
  var j = api.jscodeshift // alias the jscodeshift API
  var root = j(file.source) // parse JS code into an AST
  const { jsx, nodes } = require('./utils')(j)

  const hasIcon = children => {
    return children[0] && jsx.elementOfClass(children[0], 'Icon')
  }

  const not = fn => x => !fn(x)

  const maybeSimpleIcon = x => {
    if (!x.openingElement) {
      return x
    }
    const attrs = x.openingElement.attributes
    if (
      !attrs ||
      attrs.length > 1 ||
      !attrs[0] ||
      jsx.getAttributeName(attrs[0]) !== 'icon'
    ) {
      return j.jsxExpressionContainer(x)
    } else {
      return j.literal(jsx.getAttributeValue(attrs[0]))
    }
  }

  const popLeft = arr => {
    arr.splice(0, 1)
  }

  // the main update method replaces merge with ObjectExpression
  const update = path => {
    const button = path.value
    const children = button.children.filter(not(nodes.isEmptyText))
    if (hasIcon(children)) {
      const icon = children[0]
      jsx.addAttribute(button, 'icon', maybeSimpleIcon(icon))
      popLeft(children)
    }
    if (children.length === 1) {
      const label = children[0]
      jsx.addAttribute(button, 'label', label)
      popLeft(children)
      button.openingElement.selfClosing = true
      delete button.closingElement
      button.children = children
    } else {
      console.warn('Not a simple button, cannot automatically migrate')
      console.log(j(path).toSource())
    }
  }

  // find and update all buttons
  root
    .find(j.JSXElement, { openingElement: { name: { name: 'Button' } } })
    .forEach(update)

  // print
  return root.toSource()
}
