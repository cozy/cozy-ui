import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["disabled", "className"];
import MuiTableRow from '@material-ui/core/TableRow';
import cx from 'classnames';
import React, { forwardRef } from 'react';
var TableRow = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MuiTableRow, _extends({}, props, {
    className: cx(className, {
      disabled: disabled
    }),
    disabled: disabled,
    ref: ref
  }));
});
TableRow.displayName = 'TableRow';
export default TableRow;