import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { generateWebLink } from 'cozy-client';
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import FolderOpenIcon from "cozy-ui/transpiled/react/Icons/FolderOpen";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";

var makeComponent = function makeComponent(label, icon) {
  var Component = /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
      ref: ref
    }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
      icon: icon
    })), /*#__PURE__*/React.createElement(ListItemText, {
      primary: label
    }));
  });
  Component.displayName = 'viewInDrive';
  return Component;
};

export var viewInDrive = function viewInDrive() {
  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = FolderOpenIcon;
  var label = t('viewInDrive');
  return {
    name: 'viewInDrive',
    icon: icon,
    label: label,
    Component: makeComponent(label, icon),
    action: function action(docs, _ref) {
      var client = _ref.client;
      var dirId = docs[0].dir_id;
      var driveId = docs[0].driveId;
      var webLink = generateWebLink({
        slug: 'drive',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: driveId ? "shareddrive/".concat(driveId, "/").concat(dirId) : "folder/".concat(dirId)
      });
      window.open(webLink, '_blank');
    }
  };
};