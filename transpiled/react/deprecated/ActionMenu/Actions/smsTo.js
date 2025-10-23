import React from 'react';
import withActionsLocales from "cozy-ui/transpiled/react/deprecated/ActionMenu/Actions/locales/withActionsLocales";
import CommentIcon from "cozy-ui/transpiled/react/Icons/Comment";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import ActionMenuItemWrapper from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuItemWrapper";
export var smsTo = function smsTo() {
  return {
    name: 'smsTo',
    action: function action(docs) {
      var _docs$, _docs$$phone, _docs$$phone$;

      var phoneNumber = docs === null || docs === void 0 ? void 0 : (_docs$ = docs[0]) === null || _docs$ === void 0 ? void 0 : (_docs$$phone = _docs$.phone) === null || _docs$$phone === void 0 ? void 0 : (_docs$$phone$ = _docs$$phone[0]) === null || _docs$$phone$ === void 0 ? void 0 : _docs$$phone$.number;
      !!phoneNumber && window.open("sms:".concat(phoneNumber), '_self');
    },
    Component: withActionsLocales(function (_ref) {
      var className = _ref.className,
          onClick = _ref.onClick;

      var _useI18n = useI18n(),
          t = _useI18n.t;

      return /*#__PURE__*/React.createElement(ActionMenuItemWrapper, {
        className: className,
        icon: CommentIcon,
        onClick: onClick
      }, t('smsTo'));
    })
  };
};