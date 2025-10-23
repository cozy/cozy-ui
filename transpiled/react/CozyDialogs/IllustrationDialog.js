import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import cx from 'classnames/dedupe';
import React from 'react';
import DialogBackButton from "cozy-ui/transpiled/react/CozyDialogs/DialogBackButton";
import DialogCloseButton from "cozy-ui/transpiled/react/CozyDialogs/DialogCloseButton";
import dialogPropTypes from "cozy-ui/transpiled/react/CozyDialogs/dialogPropTypes";
import useCozyDialog from "cozy-ui/transpiled/react/CozyDialogs/useCozyDialog";
import Dialog, { DialogTitle, DialogActions, DialogContent } from "cozy-ui/transpiled/react/Dialog";

var IllustrationDialog = function IllustrationDialog(props) {
  var onClose = props.onClose,
      onBack = props.onBack,
      title = props.title,
      content = props.content,
      actions = props.actions,
      actionsLayout = props.actionsLayout;

  var _useCozyDialog = useCozyDialog(_objectSpread(_objectSpread({}, props), {}, {
    isFluidTitle: true,
    disableTitleAutoPadding: true
  })),
      dialogProps = _useCozyDialog.dialogProps,
      dialogTitleProps = _useCozyDialog.dialogTitleProps,
      id = _useCozyDialog.id,
      fullScreen = _useCozyDialog.fullScreen,
      dialogActionsProps = _useCozyDialog.dialogActionsProps,
      dialogContentProps = _useCozyDialog.dialogContentProps;

  var onBackOrClose = onBack || onClose;
  return /*#__PURE__*/React.createElement(Dialog, dialogProps, !fullScreen && onClose && /*#__PURE__*/React.createElement(DialogCloseButton, {
    "data-testid": "modal-close-button-".concat(id),
    onClick: onClose
  }), !fullScreen && onBack && /*#__PURE__*/React.createElement(DialogBackButton, {
    onClick: onBack,
    "data-testid": "modal-back-button-".concat(id)
  }), fullScreen && onBackOrClose && /*#__PURE__*/React.createElement(DialogBackButton, {
    "data-testid": "modal-backclose-button-".concat(id),
    onClick: onBackOrClose
  }), /*#__PURE__*/React.createElement(DialogContent, dialogContentProps, /*#__PURE__*/React.createElement("div", {
    className: "dialogContentInner withFluidActions u-pt-1-half"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "dialogTitleFluidContainer"
  }, /*#__PURE__*/React.createElement(DialogTitle, _extends({}, dialogTitleProps, {
    className: cx("u-flex u-flex-justify-center", dialogTitleProps.className)
  }), title)), /*#__PURE__*/React.createElement("div", {
    className: cx('dialogContentWrapper', {
      withActions: Boolean(actions)
    })
  }, content), actions && /*#__PURE__*/React.createElement(DialogActions, _extends({}, dialogActionsProps, {
    disableSpacing: true,
    className: cx('dialogActionsFluid', {
      columnLayout: actionsLayout == 'column'
    }, dialogActionsProps.className)
  }), actions))));
};

IllustrationDialog.propTypes = dialogPropTypes;
export default IllustrationDialog;