import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useRef } from 'react';
import ActionsMenu from "cozy-ui/transpiled/react/ActionsMenu";
import { locales } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var ActionsMenuButton = function ActionsMenuButton(_ref) {
  var docs = _ref.docs,
      actions = _ref.actions;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showActions = _useState2[0],
      setShowActions = _useState2[1];

  var actionsRef = useRef();
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(IconButton, {
    ref: actionsRef,
    "arial-label": t('menu'),
    onClick: function onClick() {
      return setShowActions(true);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: DotsIcon
  }))), showActions && /*#__PURE__*/React.createElement(ActionsMenu, {
    open: true,
    ref: actionsRef,
    docs: docs,
    actions: actions,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    onClose: function onClose() {
      return setShowActions(false);
    }
  }));
};

export default ActionsMenuButton;