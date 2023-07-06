import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import cx from 'classnames';
import useCozyDialog from "cozy-ui/transpiled/react/CozyDialogs/useCozyDialog";
import Dialog, { DialogTitle, DialogActions, DialogContent } from "cozy-ui/transpiled/react/Dialog";
import Divider from "cozy-ui/transpiled/react/Divider";
import dialogPropTypes from "cozy-ui/transpiled/react/CozyDialogs/dialogPropTypes";
import DialogBackButton from "cozy-ui/transpiled/react/CozyDialogs/DialogBackButton";
import DialogCloseButton from "cozy-ui/transpiled/react/CozyDialogs/DialogCloseButton";

var FixedDialog = function FixedDialog(props) {
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
      dialogActionsProps = _useCozyDialog.dialogActionsProps,
      dialogContentProps = _useCozyDialog.dialogContentProps;

  var onBackOrClose = onBack || onClose;
  return /*#__PURE__*/React.createElement(Dialog, dialogProps, !fullScreen && onClose && /*#__PURE__*/React.createElement(DialogCloseButton, {
    "data-testid": "modal-close-button-".concat(id),
    onClick: onClose
  }), !fullScreen && onBack && /*#__PURE__*/React.createElement(DialogBackButton, {
    "data-testid": "modal-back-button-".concat(id),
    onClick: onBack
  }), fullScreen && onBackOrClose && /*#__PURE__*/React.createElement(DialogBackButton, {
    "data-testid": "modal-backclose-button-".concat(id),
    onClick: onBackOrClose
  }), title && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DialogTitle, dialogTitleProps, title), /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement(DialogContent, dialogContentProps, /*#__PURE__*/React.createElement("div", {
    className: "dialogContentInner"
  }, content)), /*#__PURE__*/React.createElement(Divider, null), actions && /*#__PURE__*/React.createElement(DialogActions, _extends({}, dialogActionsProps, {
    disableSpacing: true,
    className: cx({
      columnLayout: actionsLayout == 'column'
    })
  }), actions));
};

FixedDialog.propTypes = dialogPropTypes;
export default FixedDialog;