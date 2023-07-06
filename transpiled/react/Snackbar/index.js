import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children"];
import React, { forwardRef } from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
var Snackbar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  return /*#__PURE__*/React.createElement(MuiSnackbar, _extends({
    ref: ref,
    anchorOrigin: {
      vertical: !isDesktop ? 'bottom' : 'top',
      horizontal: 'center'
    }
  }, props), children);
});
Snackbar.displayName = 'Snackbar';
Snackbar.defaultProps = {
  autoHideDuration: 2000
};
export default Snackbar;