export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  
  const transformAttribute = (path, type) => {
    const oldAttr = path.node.attributes.find(attr => attr.name.name == `${type}Text`)
    if (oldAttr) {
      oldAttr.name.name = type
      const oldAttrClassNameIdx = path.node.attributes.findIndex(attr => attr.name.name == `${type}TextClassName`)
      const oldAttrClassName = path.node.attributes[oldAttrClassNameIdx]
	  if (oldAttrClassName) {
        oldAttr.value = j.jsxExpressionContainer(j.jsxElement(
       	j.jsxOpeningElement(j.jsxIdentifier('span'), [
          j.jsxAttribute(j.jsxIdentifier('className'), oldAttrClassName.value)
        ]),
        j.jsxClosingElement(j.jsxIdentifier('span')),
        [oldAttr.value]
        ))
        path.node.attributes.splice(oldAttrClassNameIdx, 1)
      }
    }
  }

  root.find(j.JSXOpeningElement, { name: { name: 'ListItemText' } } ).forEach((path) => {
	transformAttribute(path, 'primary');
	transformAttribute(path, 'secondary');
    
  });

  return root.toSource();
}
