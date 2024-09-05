import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import EmailIcon from "cozy-ui/transpiled/react/Icons/Email";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
export var emailTo = function emailTo() {
  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = EmailIcon;
  var label = t('emailTo');
  return {
    name: 'emailTo',
    icon: icon,
    label: label,
    action: function action(docs) {
      var _docs$, _docs$$email, _docs$$email$;

      var emailAddress = docs === null || docs === void 0 ? void 0 : (_docs$ = docs[0]) === null || _docs$ === void 0 ? void 0 : (_docs$$email = _docs$.email) === null || _docs$$email === void 0 ? void 0 : (_docs$$email$ = _docs$$email[0]) === null || _docs$$email$ === void 0 ? void 0 : _docs$$email$.address;
      !!emailAddress && window.open("mailto:".concat(emailAddress), '_self');
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