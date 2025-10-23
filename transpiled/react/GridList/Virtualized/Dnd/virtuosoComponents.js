import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["context"],
    _excluded2 = ["context"];

/* eslint-disable no-unused-vars */
// for unused context
import React, { forwardRef } from 'react';
import GridItem from "cozy-ui/transpiled/react/GridList/Virtualized/Dnd/GridItem";
import DnDConfigWrapper from "cozy-ui/transpiled/react/utils/Dnd/DnDConfigWrapper";
/**
 Be aware that context is spread to every components but should not be spread to root components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/

var virtuosoComponents = {
  Scroller: /*#__PURE__*/forwardRef(function (_ref, ref) {
    var context = _ref.context,
        scrollerProps = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(DnDConfigWrapper, {
      ref: ref
    }, /*#__PURE__*/React.createElement("div", _extends({}, scrollerProps, {
      ref: ref
    })));
  }),
  Item: function Item(_ref2) {
    var _context$items, _context$componentPro;

    var context = _ref2.context,
        props = _objectWithoutProperties(_ref2, _excluded2);

    var item = (_context$items = context.items) === null || _context$items === void 0 ? void 0 : _context$items[props['data-index']];
    var itemRenderer = context.itemRenderer;

    var _props = ((_context$componentPro = context.componentProps) === null || _context$componentPro === void 0 ? void 0 : _context$componentPro.Item) || {};

    return /*#__PURE__*/React.createElement(GridItem, _extends({
      item: item,
      context: context,
      renderItem: itemRenderer
    }, _props));
  }
};
export default virtuosoComponents;