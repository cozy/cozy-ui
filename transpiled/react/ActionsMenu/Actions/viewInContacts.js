import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { generateWebLink } from 'cozy-client';
import OpenappIcon from "cozy-ui/transpiled/react/Icons/Openapp";
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Icon from "cozy-ui/transpiled/react/Icon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
export var viewInContacts = function viewInContacts() {
  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = OpenappIcon;
  var label = t('viewInContacts');
  return {
    name: 'viewInContacts',
    icon: icon,
    label: label,
    action: function action(docs, _ref) {
      var client = _ref.client;
      var contactId = docs[0]._id;
      var webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: "/".concat(contactId)
      });
      window.open(webLink, '_blank');
    },
    Component: /*#__PURE__*/forwardRef(function (props, ref) {
      return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({
        ref: ref
      }, props), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
        icon: icon
      })), /*#__PURE__*/React.createElement(ListItemText, {
        primary: label
      }));
    })
  };
};