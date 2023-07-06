import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";
import Checkbox from "cozy-ui/transpiled/react/Checkbox";
import ActionsMenu from "cozy-ui/transpiled/react/ActionsMenu";
import ActionsMenuMobileHeader from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuMobileHeader";
import withListItemLocales from "cozy-ui/transpiled/react/ListItem/hoc/withListItemLocales";
import ExpandedAttributes from "cozy-ui/transpiled/react/ListItem/ExpandedAttributes";
import RenameInput from "cozy-ui/transpiled/react/ListItem/ListItemBase/Renaming/RenameInput";

var ListItemBase = function ListItemBase(_ref) {
  var doc = _ref.doc,
      primary = _ref.primary,
      secondary = _ref.secondary,
      icon = _ref.icon,
      actions = _ref.actions,
      actionMenuComp = _ref.actionMenuComp,
      _ref$expandedAttribut = _ref.expandedAttributesProps,
      isExpandedAttributesActive = _ref$expandedAttribut.isExpandedAttributesActive,
      expandedAttributes = _ref$expandedAttribut.expandedAttributes,
      _ref$selectProps = _ref.selectProps,
      isSelectActive = _ref$selectProps.isSelectActive,
      isSelected = _ref$selectProps.isSelected,
      isChecked = _ref$selectProps.isChecked,
      onClick = _ref.onClick;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showActionMenu = _useState2[0],
      setShowActionMenu = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isRenaming = _useState4[0],
      setIsRenaming = _useState4[1];

  var anchorRef = useRef();

  var toggleMenu = function toggleMenu() {
    return setShowActionMenu(function (v) {
      return !v;
    });
  };

  var showActionMenuHeader = actionMenuComp === null || actionMenuComp === void 0 ? void 0 : actionMenuComp.Header;
  var isButton = !isRenaming && !!onClick;
  var handleClick = !isRenaming && !isSelected && onClick ? onClick : undefined;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, {
    button: isButton,
    disabled: isSelected,
    onClick: handleClick
  }, isSelectActive && /*#__PURE__*/React.createElement(Checkbox, {
    className: "u-p-0",
    value: doc._id,
    checked: isChecked,
    disabled: isSelected
  }), /*#__PURE__*/React.createElement(ListItemIcon, null, icon), isRenaming ? /*#__PURE__*/React.createElement(RenameInput, {
    file: doc,
    onClose: function onClose() {
      return setIsRenaming(false);
    }
  }) : /*#__PURE__*/React.createElement(ListItemText, {
    primary: primary,
    secondary: secondary
  }), actions && !isSelectActive && /*#__PURE__*/React.createElement(ListItemSecondaryAction, null, /*#__PURE__*/React.createElement(IconButton, {
    ref: anchorRef,
    onClick: toggleMenu
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: DotsIcon
  })))), isExpandedAttributesActive && /*#__PURE__*/React.createElement(ExpandedAttributes, {
    doc: doc,
    expandedAttributes: expandedAttributes
  }), showActionMenu && /*#__PURE__*/React.createElement(ActionsMenu, {
    open: true,
    ref: anchorRef,
    doc: doc,
    actions: actions,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    componentsProps: {
      actionsItems: {
        actionOptions: {
          setIsRenaming: setIsRenaming
        }
      }
    },
    onClose: function onClose() {
      return setShowActionMenu(false);
    }
  }, showActionMenuHeader && /*#__PURE__*/React.createElement(ActionsMenuMobileHeader, null, actionMenuComp.Header)));
};

ListItemBase.propTypes = {
  doc: PropTypes.object,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  icon: PropTypes.node,
  actions: PropTypes.array,
  actionMenuComp: PropTypes.shape({
    Header: PropTypes.node
  }),
  selectProps: PropTypes.shape({
    isSelectActive: PropTypes.bool,
    isSelected: PropTypes.bool,
    isChecked: PropTypes.bool
  }),
  expandedAttributesProps: PropTypes.shape({
    isExpandedAttributesActive: PropTypes.bool,
    expandedAttributes: PropTypes.array
  }),
  onClick: PropTypes.func
};
export default withListItemLocales(ListItemBase);