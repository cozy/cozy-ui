import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import CommentIcon from "cozy-ui/transpiled/react/Icons/Comment";
import withActionsLocales from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Icon from "cozy-ui/transpiled/react/Icon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
export var smsTo = function smsTo() {
  return {
    name: 'smsTo',
    action: function action(doc) {
      var _doc$phone, _doc$phone$;

      var phoneNumber = doc === null || doc === void 0 ? void 0 : (_doc$phone = doc.phone) === null || _doc$phone === void 0 ? void 0 : (_doc$phone$ = _doc$phone[0]) === null || _doc$phone$ === void 0 ? void 0 : _doc$phone$.number;
      !!phoneNumber && window.open("sms:".concat(phoneNumber), '_self');
    },
    Component: withActionsLocales( /*#__PURE__*/forwardRef(function (props, ref) {
      var _useI18n = useI18n(),
          t = _useI18n.t;

      return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
        ref: ref
      }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
        icon: CommentIcon
      })), /*#__PURE__*/React.createElement(ListItemText, {
        primary: t('smsTo')
      }));
    }))
  };
};