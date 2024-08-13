import React from 'react';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import EmailIcon from "cozy-ui/transpiled/react/Icons/Email";
import ActionMenuItemWrapper from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuItemWrapper";
import withActionsLocales from "cozy-ui/transpiled/react/deprecated/ActionMenu/Actions/locales/withActionsLocales";
export var emailTo = function emailTo() {
  return {
    name: 'emailTo',
    action: function action(docs) {
      var _docs$, _docs$$email, _docs$$email$;

      var emailAddress = docs === null || docs === void 0 ? void 0 : (_docs$ = docs[0]) === null || _docs$ === void 0 ? void 0 : (_docs$$email = _docs$.email) === null || _docs$$email === void 0 ? void 0 : (_docs$$email$ = _docs$$email[0]) === null || _docs$$email$ === void 0 ? void 0 : _docs$$email$.address;
      !!emailAddress && window.open("mailto:".concat(emailAddress), '_self');
    },
    Component: withActionsLocales(function (_ref) {
      var className = _ref.className,
          onClick = _ref.onClick;

      var _useI18n = useI18n(),
          t = _useI18n.t;

      return /*#__PURE__*/React.createElement(ActionMenuItemWrapper, {
        className: className,
        icon: EmailIcon,
        onClick: onClick
      }, t('emailTo'));
    })
  };
};