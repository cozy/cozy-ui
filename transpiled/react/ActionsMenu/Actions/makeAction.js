import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";

var makeComponent = function makeComponent(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      name = _ref.name;
  var Component = /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
      ref: ref
    }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
      icon: icon
    })), /*#__PURE__*/React.createElement(ListItemText, {
      primary: label
    }));
  });
  Component.displayName = name;
  return Component;
};

export var makeAction = function makeAction(_ref2) {
  var name = _ref2.name,
      label = _ref2.label,
      icon = _ref2.icon,
      disabled = _ref2.disabled,
      displayCondition = _ref2.displayCondition,
      action = _ref2.action;
  return {
    name: name,
    icon: icon,
    label: label,
    disabled: disabled,
    displayCondition: displayCondition,
    action: action,
    Component: makeComponent({
      label: label,
      icon: icon,
      name: name
    })
  };
};