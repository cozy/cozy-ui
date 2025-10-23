import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { Fragment, Children, isValidElement, cloneElement } from 'react';
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
/**
 * Clone a React child and add props on it
 * @param {React.ReactElement} children
 * @param {Function} propsCallback - get child props as arg, return new props as object
 * @returns
 */

export var AddPropsToChildren = function AddPropsToChildren(children, propsCallback) {
  return Children.map(children, function (child) {
    return /*#__PURE__*/isValidElement(child) ? /*#__PURE__*/cloneElement(child, _objectSpread({}, propsCallback(child.props))) : null;
  });
};