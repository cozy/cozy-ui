import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { downloadFile } from 'cozy-client/dist/models/file';
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import DownloadIcon from "cozy-ui/transpiled/react/Icons/Download";
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
  Component.displayName = 'download';
  return Component;
};

export var download = function download(_ref) {
  var encryptedUrl = _ref.encryptedUrl;

  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = DownloadIcon;
  var label = t('download');
  return {
    name: 'download',
    icon: icon,
    label: label,
    Component: makeComponent(label, icon),
    action: function action(docs, _ref2) {
      var client = _ref2.client,
          webviewIntent = _ref2.webviewIntent,
          driveId = _ref2.driveId;
      return downloadFile({
        client: client,
        file: docs[0],
        url: encryptedUrl,
        webviewIntent: webviewIntent,
        driveId: driveId
      });
    }
  };
};