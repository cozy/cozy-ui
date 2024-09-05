import React from 'react';
import { generateWebLink, useClient } from 'cozy-client';
import withActionsLocales from "cozy-ui/transpiled/react/deprecated/ActionMenu/Actions/locales/withActionsLocales";
import OpenappIcon from "cozy-ui/transpiled/react/Icons/Openapp";
import Link from "cozy-ui/transpiled/react/Link";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import ActionMenuItemWrapper from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuItemWrapper";
export var viewInContacts = function viewInContacts() {
  return {
    name: 'viewInContacts',
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
        hash: "/".concat(contactId)
      });
      return /*#__PURE__*/React.createElement(ActionMenuItemWrapper, {
        className: className,
        icon: OpenappIcon,
        onClick: onClick
      }, /*#__PURE__*/React.createElement(Link, {
        className: "u-p-0",
        href: webLink,
        target: "_blank"
      }, t('viewInContacts')));
    })
  };
};