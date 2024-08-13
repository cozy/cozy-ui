import { Fragment, Children } from 'react';
/**
 * Get the name of the node
 * @param {React.ElementType || string} node
 * @returns
 */

export var getComponentName = function getComponentName(node) {
  var _node$type, _node$type2;

  if (!node) return null; // type is defined only if we use a node, but a string could be passed to
  // and so, there is no type

  return ((_node$type = node.type) === null || _node$type === void 0 ? void 0 : _node$type.displayName) || ((_node$type2 = node.type) === null || _node$type2 === void 0 ? void 0 : _node$type2.name) || 'Node';
};
export var getChildren = function getChildren(props) {
  var children = Children.toArray(props.children);
  return Children.count(children) > 0 ? children : null;
};
export var getChildrenCount = function getChildrenCount(props) {
  var children = getChildren(props);
  return Children.count(children) || null;
};
export var getLastChild = function getLastChild(props) {
  var children = getChildren(props);
  if (!children) return null;
  var lastChild = children[children.length - 1];
  return lastChild.type === Fragment ? getChildren(lastChild.props)[0] : lastChild;
};