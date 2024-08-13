import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { default as MUIDialog } from '@material-ui/core/Dialog';
import { useCozyTheme } from "cozy-ui/transpiled/react/providers/CozyTheme";
import { useDialogEffects } from "cozy-ui/transpiled/react/Dialog/DialogEffects";

var Dialog = function Dialog(props) {
  var _useCozyTheme = useCozyTheme(),
      type = _useCozyTheme.type,
      variant = _useCozyTheme.variant;

  useDialogEffects(props.open, props.fullScreen);
  return /*#__PURE__*/React.createElement(MUIDialog, _extends({
    className: "CozyTheme--".concat(type, "-").concat(variant)
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