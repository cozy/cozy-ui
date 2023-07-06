import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { default as MUIDialog } from '@material-ui/core/Dialog';
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
import { useCozyTheme } from "cozy-ui/transpiled/react/CozyTheme";
import { useDialogEffects } from "cozy-ui/transpiled/react/Dialog/DialogEffects";

var Dialog = function Dialog(props) {
  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile,
      isTablet = _useBreakpoints.isTablet; // Here is a crude fix until we upgrade to material-ui to version > 3.9.4.
  // This is to block the scroll on the html node element otherwise mui only puts
  // overflow: hidden on the body and html is still scrollable for screen widths < 1024px.
  // Improvement seems to have been done in mui ModalManager, we should be able
  // to remove this RemoveScroll after update to mui 4.9.11
  // https://github.com/mui-org/material-ui/pull/17972
  // See also this related issue https://github.com/cozy/cozy-ui/pull/1597 on UI's side
  // to have more information about RemoveScroll


  var shouldBlockScroll = isMobile || isTablet;
  var Wrapper = (props.open || props.opened) && shouldBlockScroll ? RemoveScroll : React.Fragment;
  var cozyTheme = useCozyTheme();
  useDialogEffects(props.open, props.fullScreen);
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(MUIDialog, _extends({
    className: "CozyTheme--".concat(cozyTheme)
  }, props)));
};

export default Dialog;
export { default as DialogActions } from './DialogActions';
export { default as DialogContent } from './DialogContent';
export { default as DialogContentText } from './DialogContentText';
export { default as DialogTitle } from './DialogTitle';