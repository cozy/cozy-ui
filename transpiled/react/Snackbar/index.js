import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children"];
import MuiSnackbar from '@material-ui/core/Snackbar';
import React, { forwardRef } from 'react';
var Snackbar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MuiSnackbar, _extends({
    ref: ref,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    }
  }, props), children);
});
Snackbar.displayName = 'Snackbar';
Snackbar.defaultProps = {
  autoHideDuration: 2000
};
export default Snackbar;