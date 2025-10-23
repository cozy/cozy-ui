import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["items", "dragProps", "context", "itemRenderer", "children", "componentProps", "components"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useMemo } from 'react';
import virtuosoComponents from "cozy-ui/transpiled/react/GridList/Virtualized/Dnd/virtuosoComponents";
import VirtualizedGridList from "cozy-ui/transpiled/react/GridList/Virtualized";
import CustomDragLayer from "cozy-ui/transpiled/react/utils/Dnd/CustomDrag/CustomDragLayer";

var VirtualizedGridListDnd = function VirtualizedGridListDnd(_ref) {
  var items = _ref.items,
      dragProps = _ref.dragProps,
      context = _ref.context,
      itemRenderer = _ref.itemRenderer,
      children = _ref.children,
      componentProps = _ref.componentProps,
      components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      itemsInDropProcess = _useState2[0],
      setItemsInDropProcess = _useState2[1];

  var _components = useMemo(function () {
    return _objectSpread(_objectSpread({}, virtuosoComponents), components);
  }, [components]);

  var _context = useMemo(function () {
    return _objectSpread(_objectSpread({}, context), {}, {
      dragProps: dragProps,
      itemRenderer: itemRenderer,
      itemsInDropProcess: itemsInDropProcess,
      componentProps: componentProps,
      setItemsInDropProcess: setItemsInDropProcess,
      items: items
    });
  }, [context, dragProps, itemRenderer, itemsInDropProcess, componentProps, items]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CustomDragLayer, {
    dragId: dragProps.dragId
  }), /*#__PURE__*/React.createElement(VirtualizedGridList, _extends({
    items: items,
    components: _components,
    context: _context
  }, props), children));
};

export default VirtualizedGridListDnd;