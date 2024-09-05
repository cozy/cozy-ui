import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
var styles = {
  "ActionMenuDesktop-ActionMenu": "styles__ActionMenuDesktop-ActionMenu___1iicy",
  "ActionMenuDesktop-ActionMenu-link-disabled": "styles__ActionMenuDesktop-ActionMenu-link-disabled___3QHjm"
};
import AppLinker from "cozy-ui/transpiled/react/AppLinker";
import Icon from "cozy-ui/transpiled/react/Icon";
import Copy from "cozy-ui/transpiled/react/Icons/Copy";
import Edit from "cozy-ui/transpiled/react/Icons/Rename";
import Typography from "cozy-ui/transpiled/react/Typography";
import ActionMenu, { ActionMenuItem } from "cozy-ui/transpiled/react/deprecated/ActionMenu";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
var ActionMenuDesktop = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var onClose = _ref.onClose,
      isEditable = _ref.isEditable,
      actions = _ref.actions,
      appLink = _ref.appLink,
      appSlug = _ref.appSlug;
  var handleCopy = actions.handleCopy,
      handleEdit = actions.handleEdit;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement(ActionMenu, {
    className: styles['ActionMenuDesktop-ActionMenu'],
    onClose: onClose,
    anchorElRef: ref
  }, isEditable && /*#__PURE__*/React.createElement(AppLinker, {
    app: {
      slug: appSlug
    },
    href: appLink
  }, function (_ref2) {
    var _onClick = _ref2.onClick,
        href = _ref2.href;
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      onClick: function onClick() {
        return handleEdit(_onClick);
      }
    }, /*#__PURE__*/React.createElement(ActionMenuItem, {
      left: /*#__PURE__*/React.createElement(Icon, {
        icon: Edit,
        color: "var(--iconTextColor)"
      })
    }, /*#__PURE__*/React.createElement(Typography, null, t("Viewer.panel.qualification.actions.edit"))));
  }), /*#__PURE__*/React.createElement(ActionMenuItem, {
    onClick: handleCopy,
    left: /*#__PURE__*/React.createElement(Icon, {
      icon: Copy,
      color: "var(--iconTextColor)"
    })
  }, /*#__PURE__*/React.createElement(Typography, null, t("Viewer.panel.qualification.actions.copy"))));
});
ActionMenuDesktop.displayName = 'ActionMenuDesktop';
ActionMenuDesktop.propTypes = {
  onClose: PropTypes.func,
  isEditable: PropTypes.bool,
  actions: PropTypes.shape({
    handleCopy: PropTypes.func,
    handleEdit: PropTypes.func
  }),
  appLink: PropTypes.string,
  appSlug: PropTypes.string
};
export default ActionMenuDesktop;