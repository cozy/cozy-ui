import React from 'react';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import TelephoneIcon from "cozy-ui/transpiled/react/Icons/Telephone";
import ActionMenuItemWrapper from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuItemWrapper";
import withActionsLocales from "cozy-ui/transpiled/react/deprecated/ActionMenu/Actions/locales/withActionsLocales";
export var call = function call() {
  return {
    name: 'call',
    action: function action(docs) {
      var _docs$, _docs$$phone, _docs$$phone$;

      var phoneNumber = docs === null || docs === void 0 ? void 0 : (_docs$ = docs[0]) === null || _docs$ === void 0 ? void 0 : (_docs$$phone = _docs$.phone) === null || _docs$$phone === void 0 ? void 0 : (_docs$$phone$ = _docs$$phone[0]) === null || _docs$$phone$ === void 0 ? void 0 : _docs$$phone$.number;
      !!phoneNumber && window.open("tel:".concat(phoneNumber), '_self');
    },
    Component: withActionsLocales(function (_ref) {
      var className = _ref.className,
          onClick = _ref.onClick;

      var _useI18n = useI18n(),
          t = _useI18n.t;

      return /*#__PURE__*/React.createElement(ActionMenuItemWrapper, {
        className: className,
        icon: TelephoneIcon,
        onClick: onClick
      }, t('call'));
    })
  };
};