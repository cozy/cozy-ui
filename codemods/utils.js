/* eslint new-cap: 0 */

module.exports = function(j) {
  const strip = s => s.replace(/^[\s\n]+/g, '').replace(/[\s\n]+$/g, '')

  const isJsxElementOfClass = (element, klass) => {
    return element.openingElement && element.openingElement.name.name === klass
  }

  const addJsxAttribute = (element, name, value) => {
    element.openingElement.attributes.push(
      new j.jsxAttribute(new j.jsxIdentifier(name), maybeWrap(value))
    )
  }

  const getAttributeName = x => x && x.name && x.name.name
  const getAttributeValue = x => x && x.value && x.value.value

  const maybeWrap = x => {
    if (x.type === 'Literal') {
      return new j.literal(strip(x.value))
    }
    if (x.type === 'JSXExpressionContainer') {
      return x
    }
    return new j.jsxExpressionContainer(x)
  }

  const emptyTextNode = x => {
    return x.type === 'Literal' && strip(x.value).length === 0
  }

  const removeDefaultExportHOC = (root, ComponentName, hocName) => {
    const defaultExports = root.find(j.ExportDefaultDeclaration)
    if (!defaultExports.length) {
      return
    }
    const defaultExport = defaultExports.get(0)
    const decl = defaultExport.node.declaration
    if (decl.type !== 'CallExpression') {
      return
    } else if (
      decl.callee &&
      decl.callee.callee &&
      decl.callee.callee.name == hocName &&
      decl.arguments[0].name == ComponentName
    ) {
      defaultExport.node.declaration = decl.arguments[0]
    } else if (
      decl.callee &&
      decl.callee.callee &&
      decl.callee.callee.name == 'compose' &&
      decl.arguments[0].name == ComponentName
    ) {
      decl.callee.arguments = decl.callee.arguments.filter(
        node => !node.callee || node.callee.name !== hocName
      )
    }
  }

  const removeHOC = (arrowFunctionBodyPath, hocName) => {
    let curPath = arrowFunctionBodyPath
    while (curPath) {
      const curNode = curPath.node
      if (
        curNode.type === 'CallExpression' &&
        curNode.callee.callee &&
        curNode.callee.callee.name === hocName
      ) {
        const component = curPath.parentPath.node.arguments[0]
        curPath.parentPath.replace(curPath.parentPath.node.arguments[0])
        break
      }
      curPath = curPath.parentPath
    }
  }

  const addImport = (root, importOptions) => {
    root.find(j.Program).forEach(({ node }) => {
      node.body.splice(
        0,
        0,
        `import { ${importOptions.identifiers.join(', ')} } from "${
          importOptions.path
        }"`
      )
    })
  }

  return {
    nodes: {
      isEmptyText: emptyTextNode
    },
    jsx: {
      elementOfClass: isJsxElementOfClass,
      addAttribute: addJsxAttribute,
      maybeWrap: maybeWrap,
      getAttributeValue,
      getAttributeName
    },
    hoc: {
      removeDefaultExportHOC,
      removeHOC
    },
    imports: {
      add: addImport
    }
  }
}
