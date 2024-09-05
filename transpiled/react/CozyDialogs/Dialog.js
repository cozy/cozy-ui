import _extends from "@babel/runtime/helpers/extends";
import cx from 'classnames';
import React from 'react';
import DialogBackButton from "cozy-ui/transpiled/react/CozyDialogs/DialogBackButton";
import DialogCloseButton from "cozy-ui/transpiled/react/CozyDialogs/DialogCloseButton";
import dialogPropTypes from "cozy-ui/transpiled/react/CozyDialogs/dialogPropTypes";
import useCozyDialog from "cozy-ui/transpiled/react/CozyDialogs/useCozyDialog";
import MUIDialog, { DialogTitle, DialogActions, DialogContent } from "cozy-ui/transpiled/react/Dialog";
import Divider from "cozy-ui/transpiled/react/Divider";

var Dialog = function Dialog(props) {
  var onClose = props.onClose,
      onBack = props.onBack,
      title = props.title,
      content = props.content,
      actions = props.actions,
      actionsLayout = props.actionsLayout;

  var _useCozyDialog = useCozyDialog(props),
      dialogProps = _useCozyDialog.dialogProps,
      dialogTitleProps = _useCozyDialog.dialogTitleProps,
      fullScreen = _useCozyDialog.fullScreen,
      id = _useCozyDialog.id,
      dividerProps = _useCozyDialog.dividerProps,
      dialogActionsProps = _useCozyDialog.dialogActionsProps,
      dialogContentProps = _useCozyDialog.dialogContentProps;

  var onBackOrClose = onBack || onClose;
  return /*#__PURE__*/React.createElement(MUIDialog, dialogProps, !fullScreen && onClose && /*#__PURE__*/React.createElement(DialogCloseButton, {
    onClick: onClose,
    "data-testid": "modal-close-button-".concat(id)
  }), !fullScreen && onBack && /*#__PURE__*/React.createElement(DialogBackButton, {
    onClick: onBack,
    "data-testid": "modal-back-button-".concat(id)
  }), fullScreen && onBackOrClose && /*#__PURE__*/React.createElement(DialogBackButton, {
    "data-testid": "modal-backclose-button-".concat(id),
    onClick: onBackOrClose
  }), title && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DialogTitle, dialogTitleProps, title), /*#__PURE__*/React.createElement(Divider, dividerProps)), /*#__PURE__*/React.createElement(DialogContent, dialogContentProps, /*#__PURE__*/React.createElement("div", {
    className: "dialogContentInner withFluidActions"
  }, /*#__PURE__*/React.createElement("div", {
    className: cx('dialogContentWrapper', {
      withActions: Boolean(actions)
    })
  }, content), actions && /*#__PURE__*/React.createElement(DialogActions, _extends({}, dialogActionsProps, {
    disableSpacing: true,
    className: cx('dialogActionsFluid', {
      columnLayout: actionsLayout == 'column'
    })
  }), actions))));
};

Dialog.propTypes = dialogPropTypes;
export default Dialog;