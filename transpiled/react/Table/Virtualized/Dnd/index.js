import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["dragProps", "context", "components"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useMemo } from 'react';
import virtuosoComponentsDnd from "cozy-ui/transpiled/react/Table/Virtualized/Dnd/virtuosoComponents";
import CustomDragLayer from "cozy-ui/transpiled/react/utils/Dnd/CustomDrag/CustomDragLayer";
import VirtualizedTable from "cozy-ui/transpiled/react/Table/Virtualized/index";
import virtuosoComponents from "cozy-ui/transpiled/react/Table/Virtualized/virtuosoComponents";

var _components = _objectSpread(_objectSpread({}, virtuosoComponents), virtuosoComponentsDnd);

var VirtuosoTableDnd = function VirtuosoTableDnd(_ref) {
  var dragProps = _ref.dragProps,
      context = _ref.context,
      components = _ref.components,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      itemsInDropProcess = _useState2[0],
      setItemsInDropProcess = _useState2[1]; // array of Ids, for dragndrop feature


  var _context = useMemo(function () {
    return _objectSpread(_objectSpread({}, context), {}, {
      dragProps: dragProps,
      itemsInDropProcess: itemsInDropProcess,
      setItemsInDropProcess: setItemsInDropProcess
    });
  }, [context, dragProps, itemsInDropProcess]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CustomDragLayer, {
    dragId: dragProps.dragId
  }), /*#__PURE__*/React.createElement(VirtualizedTable, _extends({
    components: components || _components,
    context: _context
  }, props)));
};

export default VirtuosoTableDnd;