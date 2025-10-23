import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"];
import { default as MUIDialog } from '@material-ui/core/Dialog';
import cx from 'classnames';
import React from 'react';
import { useDialogEffects } from "cozy-ui/transpiled/react/Dialog/DialogEffects";
import { useCozyTheme } from "cozy-ui/transpiled/react/providers/CozyTheme";

var Dialog = function Dialog(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useCozyTheme = useCozyTheme(),
      type = _useCozyTheme.type,
      variant = _useCozyTheme.variant;

  useDialogEffects(props.open, props.fullScreen);
  return /*#__PURE__*/React.createElement(MUIDialog, _extends({
    className: cx("TwakeTheme--".concat(type, "-").concat(variant), className)
  }, props));
};

Dialog.defaultProps = {
  disableEnforceFocus: true
};
export default Dialog;
export { default as DialogActions } from './DialogActions';
export { default as DialogContent } from './DialogContent';
export { default as DialogContentText } from './DialogContentText';
export { default as DialogTitle } from './DialogTitle';