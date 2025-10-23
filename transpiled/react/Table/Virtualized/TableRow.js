import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["item", "context", "className"];
import cx from 'classnames';
import React from 'react';
import TableRowClassic from "cozy-ui/transpiled/react/TableRow";

var TableRow = function TableRow(_ref) {
  var item = _ref.item,
      context = _ref.context,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _item = item || context.data[props['data-item-index']];

  var isSelected = context.isSelectedItem(_item);
  return /*#__PURE__*/React.createElement(TableRowClassic, _extends({}, props, {
    className: cx(className, 'virtualized'),
    selected: isSelected,
    hover: true
  }));
};

export default TableRow;