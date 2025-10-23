import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["items", "components", "context"];
import React, { forwardRef } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
var VirtualizedGridList = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      components = _ref.components,
      context = _ref.context,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(VirtuosoGrid, _extends({
    ref: ref,
    components: components,
    context: context,
    style: {
      height: '100%'
    },
    totalCount: items.length
  }, props));
});
VirtualizedGridList.displayName = 'VirtualizedGridList';
export default VirtualizedGridList;