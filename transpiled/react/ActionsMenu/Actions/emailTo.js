import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import EmailIcon from "cozy-ui/transpiled/react/Icons/Email";
import withActionsLocales from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Icon from "cozy-ui/transpiled/react/Icon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
export var emailTo = function emailTo() {
  return {
    name: 'emailTo',
    action: function action(doc) {
      var _doc$email, _doc$email$;

      var emailAddress = doc === null || doc === void 0 ? void 0 : (_doc$email = doc.email) === null || _doc$email === void 0 ? void 0 : (_doc$email$ = _doc$email[0]) === null || _doc$email$ === void 0 ? void 0 : _doc$email$.address;
      !!emailAddress && window.open("mailto:".concat(emailAddress), '_self');
    },
    Component: withActionsLocales( /*#__PURE__*/forwardRef(function (props, ref) {
      var _useI18n = useI18n(),
          t = _useI18n.t;

      return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
        ref: ref
      }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
        icon: EmailIcon
      })), /*#__PURE__*/React.createElement(ListItemText, {
        primary: t('emailTo')
      }));
    }))
  };
};