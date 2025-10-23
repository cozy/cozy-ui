import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import TextInfoIcon from "cozy-ui/transpiled/react/Icons/TextInfo";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";

var makeComponent = function makeComponent(label, icon) {
  var Component = /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
      ref: ref
    }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
      icon: icon
    })), /*#__PURE__*/React.createElement(ListItemText, {
      primary: label
    }));
  });
  Component.displayName = 'editAttribute';
  return Component;
};

export var editAttribute = function editAttribute() {
  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = TextInfoIcon;
  var label = t('editAttribute');
  return {
    name: 'editAttribute',
    icon: icon,
    label: label,
    Component: makeComponent(label, icon),
    action: function action(docs, _ref) {
      var editAttributeCallback = _ref.editAttributeCallback;
      editAttributeCallback(docs);
    }
  };
};