import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import cx from 'classnames';
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import ArrowUpIcon from "cozy-ui/transpiled/react/Icons/ArrowUp";
import BottomSheet, { BottomSheetHeader, BottomSheetItem } from "cozy-ui/transpiled/react/BottomSheet";
import Typography from "cozy-ui/transpiled/react/Typography";
import Divider from "cozy-ui/transpiled/react/Divider";
import NestedSelect from "cozy-ui/transpiled/react/NestedSelect/NestedSelect";

var HeaderComponent = function HeaderComponent(_ref) {
  var title = _ref.title,
      showBack = _ref.showBack,
      onClickBack = _ref.onClickBack;
  if (!title) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BottomSheetHeader, {
    className: cx('u-h-3', {
      'u-pl-half u-pr-3': showBack
    })
  }, showBack && /*#__PURE__*/React.createElement(IconButton, {
    onClick: onClickBack
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowUpIcon,
    rotate: -90
  })), /*#__PURE__*/React.createElement(Typography, {
    className: "u-w-100",
    variant: "h6",
    align: "center"
  }, title)), /*#__PURE__*/React.createElement(Divider, null));
};

var SelfBottomSheet = function SelfBottomSheet(props) {
  var _props$componentsProp;

  return /*#__PURE__*/React.createElement(BottomSheet, _extends({}, props === null || props === void 0 ? void 0 : (_props$componentsProp = props.componentsProps) === null || _props$componentsProp === void 0 ? void 0 : _props$componentsProp.bottomsheet, {
    backdrop: true,
    onClose: props.onClose
  }), /*#__PURE__*/React.createElement(BottomSheetItem, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(NestedSelect, _extends({
    HeaderComponent: HeaderComponent
  }, props))));
};

export default SelfBottomSheet;