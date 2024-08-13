import React from 'react';
import { generateWebLink, useClient } from 'cozy-client';
import Link from "cozy-ui/transpiled/react/Link";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import PenIcon from "cozy-ui/transpiled/react/Icons/Pen";
import ActionMenuItemWrapper from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuItemWrapper";
import withActionsLocales from "cozy-ui/transpiled/react/deprecated/ActionMenu/Actions/locales/withActionsLocales";
export var modify = function modify() {
  return {
    name: 'modify',
    Component: withActionsLocales(function (_ref) {
      var className = _ref.className,
          docs = _ref.docs,
          onClick = _ref.onClick;

      var _useI18n = useI18n(),
          t = _useI18n.t;

      var client = useClient();
      var contactId = docs[0]._id;
      var webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: "/".concat(contactId, "/edit")
      });
      return /*#__PURE__*/React.createElement(ActionMenuItemWrapper, {
        className: className,
        icon: PenIcon,
        onClick: onClick
      }, /*#__PURE__*/React.createElement(Link, {
        className: "u-p-0",
        href: webLink,
        target: "_blank"
      }, t('modify')));
    })
  };
};