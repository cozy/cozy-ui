import React from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
import RightIcon from "cozy-ui/transpiled/react/Icons/Right";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import Divider from "cozy-ui/transpiled/react/Divider";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Radio from "cozy-ui/transpiled/react/Radios";
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";

var ItemRow = function ItemRow(_ref) {
  var item = _ref.item,
      _onClick = _ref.onClick,
      isSelected = _ref.isSelected,
      radioPosition = _ref.radioPosition;

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, {
    gutters: isDesktop ? 'double' : 'default',
    button: true,
    onClick: function onClick() {
      return _onClick(item);
    }
  }, radioPosition === 'left' && /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Radio, {
    readOnly: true,
    name: item.title,
    value: item.title,
    checked: !!isSelected
  })), item.icon && /*#__PURE__*/React.createElement(ListItemIcon, null, item.icon), /*#__PURE__*/React.createElement(ListItemText, {
    primary: item.title,
    secondary: item.description
  }), item.children && item.children.length > 0 && /*#__PURE__*/React.createElement(Icon, {
    icon: RightIcon
  }), radioPosition === 'right' && !(item.children && item.children.length > 0) && /*#__PURE__*/React.createElement(Radio, {
    readOnly: true,
    edge: "end",
    name: item.title,
    value: item.title,
    checked: !!isSelected
  })), /*#__PURE__*/React.createElement(Divider, null));
};

export default ItemRow;