import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import TelephoneIcon from "cozy-ui/transpiled/react/Icons/Telephone";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
export var call = function call() {
  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = TelephoneIcon;
  var label = t('call');
  return {
    name: 'call',
    icon: icon,
    label: label,
    action: function action(docs) {
      var _docs$, _docs$$phone, _docs$$phone$;

      var phoneNumber = docs === null || docs === void 0 ? void 0 : (_docs$ = docs[0]) === null || _docs$ === void 0 ? void 0 : (_docs$$phone = _docs$.phone) === null || _docs$$phone === void 0 ? void 0 : (_docs$$phone$ = _docs$$phone[0]) === null || _docs$$phone$ === void 0 ? void 0 : _docs$$phone$.number;
      !!phoneNumber && window.open("tel:".concat(phoneNumber), '_self');
    },
    Component: /*#__PURE__*/forwardRef(function (props, ref) {
      return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
        ref: ref
      }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
        icon: icon
      })), /*#__PURE__*/React.createElement(ListItemText, {
        primary: label
      }));
    })
  };
};