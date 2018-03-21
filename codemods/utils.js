/* eslint new-cap: 0 */

module.exports = function (j) {
  const strip = s => s.replace(/^[\s\n]+/g, "").replace(/[\s\n]+$/g, "");

  const isJsxElementOfClass = (element, klass) => {
    return element.openingElement && element.openingElement.name.name === klass;
  };

  const addJsxAttribute = (element, name, value) => {
    element.openingElement.attributes.push(
      new j.jsxAttribute(
        new j.jsxIdentifier(name),
        maybeWrap(value)));
  };

  const getAttributeName = x => x && x.name && x.name.name;
  const getAttributeValue = x => x && x.value && x.value.value

  const maybeWrap = x => {
    if (x.type === "Literal") {
      return new j.literal(strip(x.value));
    }
    if (x.type === 'JSXExpressionContainer') {
      return x
    }
    return new j.jsxExpressionContainer(x);
  };

  const emptyTextNode = x => {
    return x.type === "Literal" && strip(x.value).length === 0;
  };

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
    }
  };
}
