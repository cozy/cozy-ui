import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { generateWebLink } from 'cozy-client';
import OpenappIcon from "cozy-ui/transpiled/react/Icons/Openapp";
import withActionsLocales from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Icon from "cozy-ui/transpiled/react/Icon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
export var viewInContacts = function viewInContacts() {
  return {
    name: 'viewInContacts',
    action: function action(doc, _ref) {
      var client = _ref.client;
      var contactId = doc._id;
      var webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: "/".concat(contactId)
      });
      window.open(webLink, '_blank');
    },
    Component: withActionsLocales( /*#__PURE__*/forwardRef(function (props, ref) {
      var _useI18n = useI18n(),
          t = _useI18n.t;

      return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({
        ref: ref
      }, props), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
        icon: OpenappIcon
      })), /*#__PURE__*/React.createElement(ListItemText, {
        primary: t('viewInContacts')
      }));
    }))
  };
};