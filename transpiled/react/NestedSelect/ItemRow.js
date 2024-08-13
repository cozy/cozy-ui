import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from "cozy-ui/transpiled/react/Icon";
import RightIcon from "cozy-ui/transpiled/react/Icons/Right";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import Divider from "cozy-ui/transpiled/react/Divider";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Radio from "cozy-ui/transpiled/react/Radios";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import Typography from "cozy-ui/transpiled/react/Typography";
var infoStyle = {
  color: 'var(--secondaryTextColor)'
};

var ItemRow = function ItemRow(_ref) {
  var item = _ref.item,
      _onClick = _ref.onClick,
      isSelected = _ref.isSelected,
      radioPosition = _ref.radioPosition,
      isLast = _ref.isLast,
      ellipsis = _ref.ellipsis,
      noDivider = _ref.noDivider;

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, _extends({
    gutters: isDesktop ? 'double' : 'default'
  }, ellipsis === false && {
    ellipsis: false
  }, {
    button: true,
    onClick: function onClick() {
      return _onClick(item);
    }
  }), radioPosition === 'left' && /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Radio, {
    readOnly: true,
    name: item.title,
    value: item.title,
    checked: !!isSelected
  })), item.icon && /*#__PURE__*/React.createElement(ListItemIcon, null, item.icon), /*#__PURE__*/React.createElement(ListItemText, {
    primary: item.title,
    secondary: item.description
  }), item.children && item.children.length > 0 && /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
    icon: RightIcon,
    color: "var(--secondaryTextColor)"
  })), radioPosition === 'right' && !(item.children && item.children.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "u-flex u-flex-items-center"
  }, !!item.info && /*#__PURE__*/React.createElement(Typography, {
    style: infoStyle,
    variant: "body2"
  }, item.info), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Radio, {
    readOnly: true,
    edge: "end",
    name: item.title,
    value: item.title,
    checked: !!isSelected
  }))), radioPosition === 'right' && !!item.action && /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    flexItem: true
  }), item.action ? item.action.Component(_objectSpread({
    item: item
  }, item.action.props)) : null), noDivider ? null : !isLast && /*#__PURE__*/React.createElement(Divider, null));
};

ItemRow.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  radioPosition: PropTypes.oneOf(['left', 'right']),
  isLast: PropTypes.bool,
  ellipsis: PropTypes.bool,
  noDivider: PropTypes.bool
};
export default ItemRow;