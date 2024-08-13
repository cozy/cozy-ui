import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { useCozyDialog, DialogCloseButton } from "cozy-ui/transpiled/react/CozyDialogs";
import Dialog, { DialogTitle, DialogContent } from "cozy-ui/transpiled/react/Dialog";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import LeftIcon from "cozy-ui/transpiled/react/Icons/Left";
import { Media, Bd, Img } from "cozy-ui/transpiled/react/deprecated/Media";
import NestedSelect from "cozy-ui/transpiled/react/NestedSelect/NestedSelect";
var styles = {
  "Modal__back": "styles__Modal__back___qxUn_",
  "search-container--without-title": "styles__search-container--without-title___3P2fe"
};
import List from "cozy-ui/transpiled/react/List";

var NestedSelectDialogHeader = function NestedSelectDialogHeader(_ref) {
  var onClickBack = _ref.onClickBack,
      showBack = _ref.showBack,
      title = _ref.title;

  var _useCozyDialog = useCozyDialog({
    open: true,
    onClose: true
  }),
      dialogTitleProps = _useCozyDialog.dialogTitleProps;

  if (!title) return null;
  return /*#__PURE__*/React.createElement(DialogTitle, dialogTitleProps, /*#__PURE__*/React.createElement(Media, null, showBack && /*#__PURE__*/React.createElement(Img, {
    className: styles.Modal__back
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "medium",
    onClick: onClickBack
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: LeftIcon
  }))), /*#__PURE__*/React.createElement(Bd, {
    className: "u-ellipsis"
  }, title)));
};

var NestedSelectDialogContent = function NestedSelectDialogContent(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(DialogContent, {
    className: "u-p-0"
  }, /*#__PURE__*/React.createElement(List, null, children));
};

var NestedSelectModal = function NestedSelectModal(props) {
  var _useCozyDialog2 = useCozyDialog({
    open: true
  }),
      dialogProps = _useCozyDialog2.dialogProps;

  return /*#__PURE__*/React.createElement(Dialog, _extends({}, dialogProps, {
    onClose: props.onClose
  }), /*#__PURE__*/React.createElement(DialogCloseButton, {
    onClick: props.onClose,
    "data-testid": "modal-close-button-nested-select"
  }), /*#__PURE__*/React.createElement(NestedSelect, _extends({
    HeaderComponent: NestedSelectDialogHeader,
    ContentComponent: NestedSelectDialogContent
  }, props)));
};

export default NestedSelectModal;