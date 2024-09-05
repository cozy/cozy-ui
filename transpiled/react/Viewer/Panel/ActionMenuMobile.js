import PropTypes from 'prop-types';
import React from 'react';
import AppLinker from "cozy-ui/transpiled/react/AppLinker";
import BottomSheet, { BottomSheetItem } from "cozy-ui/transpiled/react/BottomSheet";
import Icon from "cozy-ui/transpiled/react/Icon";
import Copy from "cozy-ui/transpiled/react/Icons/Copy";
import Edit from "cozy-ui/transpiled/react/Icons/Rename";
import List from "cozy-ui/transpiled/react/List";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var ActionMenuMobile = function ActionMenuMobile(_ref) {
  var onClose = _ref.onClose,
      isEditable = _ref.isEditable,
      actions = _ref.actions,
      appLink = _ref.appLink,
      appSlug = _ref.appSlug;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var handleCopy = actions.handleCopy,
      handleEdit = actions.handleEdit;
  return /*#__PURE__*/React.createElement(BottomSheet, {
    backdrop: true,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(BottomSheetItem, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(List, null, isEditable && /*#__PURE__*/React.createElement(AppLinker, {
    app: {
      slug: appSlug
    },
    href: appLink
  }, function (_ref2) {
    var _onClick = _ref2.onClick,
        href = _ref2.href;
    return /*#__PURE__*/React.createElement(ListItem, {
      button: true,
      component: "a",
      href: href,
      onClick: function onClick() {
        return handleEdit(_onClick);
      }
    }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
      icon: Edit
    })), /*#__PURE__*/React.createElement(ListItemText, {
      primary: t("Viewer.panel.qualification.actions.edit")
    }));
  }), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    onClick: handleCopy
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
    icon: Copy
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: t("Viewer.panel.qualification.actions.copyClipboard")
  })))));
};

ActionMenuMobile.propTypes = {
  onClose: PropTypes.func,
  isEditable: PropTypes.bool,
  actions: PropTypes.shape({
    handleCopy: PropTypes.func,
    handleEdit: PropTypes.func
  }),
  appLink: PropTypes.string
};
export default ActionMenuMobile;