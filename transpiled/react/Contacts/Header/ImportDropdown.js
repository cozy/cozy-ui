import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useRef } from 'react';
import { useClient, generateWebLink } from 'cozy-client';
import { CONTACTS_DOCTYPE } from 'cozy-client/dist/models/contact';
import { locales } from "cozy-ui/transpiled/react/Contacts/Header/locales";
import AppIcon from "cozy-ui/transpiled/react/AppIcon";
import AppLinker from "cozy-ui/transpiled/react/AppLinker";
import Button from "cozy-ui/transpiled/react/Buttons";
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";
import TeamIcon from "cozy-ui/transpiled/react/Icons/Team";
import Link from "cozy-ui/transpiled/react/Link";
import ActionMenu, { ActionMenuItem } from "cozy-ui/transpiled/react/deprecated/ActionMenu";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var ImportDropdown = function ImportDropdown(_ref) {
  var onContactImport = _ref.onContactImport;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var client = useClient();
  var anchorRef = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  var storeURL = generateWebLink({
    cozyUrl: client.getStackClient().uri,
    hash: "discover/?type=konnector&doctype=".concat(CONTACTS_DOCTYPE),
    pathname: '/',
    slug: 'store',
    subDomainType: client.getInstanceOptions().subdomain
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    ref: anchorRef,
    variant: "secondary",
    label: t('Contacts.Header.import.title'),
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: BottomIcon
    }),
    fullWidth: true,
    onClick: function onClick() {
      return setShowMenu(function (v) {
        return !v;
      });
    }
  }), showMenu && /*#__PURE__*/React.createElement(ActionMenu, {
    anchorElRef: anchorRef,
    popperOptions: {
      placement: 'bottom-end'
    },
    onClose: function onClose() {
      return setShowMenu(false);
    }
  }, /*#__PURE__*/React.createElement(ActionMenuItem, {
    left: /*#__PURE__*/React.createElement(Icon, {
      icon: TeamIcon
    }),
    onClick: onContactImport
  }, t('Contacts.Header.import.vcard')), /*#__PURE__*/React.createElement(AppLinker, {
    app: {
      slug: 'store'
    },
    href: storeURL
  }, function (_ref2) {
    var onClick = _ref2.onClick,
        href = _ref2.href;
    return /*#__PURE__*/React.createElement(ActionMenuItem, {
      left: /*#__PURE__*/React.createElement(AppIcon, {
        app: "store",
        className: "u-h-1 u-w-1"
      }),
      onClick: onClick
    }, /*#__PURE__*/React.createElement(Link, {
      className: "u-p-0",
      href: href,
      style: {
        color: 'var(--primaryTextColor)'
      }
    }, t('Contacts.Header.import.store')));
  })));
};

export default ImportDropdown;