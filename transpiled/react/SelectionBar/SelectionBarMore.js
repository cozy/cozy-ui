import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
var styles = {
  "SelectionBar": "styles__SelectionBar___3UOqy",
  "SelectionBar-count": "styles__SelectionBar-count___1e2yD",
  "SelectionBar-action": "styles__SelectionBar-action___3B1aR",
  "SelectionBar-action--withLabel": "styles__SelectionBar-action--withLabel___3TJq3",
  "spin": "styles__spin___1MUwn",
  "shake": "styles__shake___qrFb_"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";
import { ActionMenuWithClose, ActionMenuItem } from "cozy-ui/transpiled/react/deprecated/ActionMenu";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var SelectionBarMore = function SelectionBarMore(_ref) {
  var actions = _ref.actions,
      selectedCount = _ref.selectedCount,
      selected = _ref.selected;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuDisplayed = _useState2[0],
      setMenuDisplayed = _useState2[1];

  var anchorRef = useRef(null);

  var toggleMenu = function toggleMenu() {
    return setMenuDisplayed(!isMenuDisplayed);
  };

  var hideMenu = function hideMenu() {
    return setMenuDisplayed(false);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
    className: styles['SelectionBar-action'],
    label: t('SelectionBar.more'),
    size: "medium",
    onClick: toggleMenu,
    ref: anchorRef,
    "aria-haspopup": "true",
    "aria-controls": "selection-bar--more"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: DotsIcon
  })), isMenuDisplayed && /*#__PURE__*/React.createElement(ActionMenuWithClose, {
    id: "selection-bar--more",
    ref: anchorRef,
    onClose: hideMenu
  }, actions.map(function (action, index) {
    return /*#__PURE__*/React.createElement(ActionMenuItem, {
      key: index,
      left: /*#__PURE__*/React.createElement(Icon, {
        icon: action.icon || action.name.toLowerCase()
      }),
      disabled: action.disabled === undefined ? selectedCount < 1 // to avoid breaking change
      : action.disabled(selected),
      onClick: function onClick() {
        return action.action(selected);
      }
    }, t('SelectionBar.' + action.name));
  })));
};

SelectionBarMore.propTypes = {
  /**
   * List of object with the property of action and a name
   */
  actions: PropTypes.array.isRequired,

  /**
   * Number of item selected
   */
  selectedCount: PropTypes.number.isRequired,

  /**
   * List of ids of the selected items
   */
  selected: PropTypes.array.isRequired
};
export default SelectionBarMore;