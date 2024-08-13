import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from "cozy-ui/transpiled/react/Button";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
var styles = {
  "SelectionBar": "styles__SelectionBar___3UOqy",
  "SelectionBar-count": "styles__SelectionBar-count___1e2yD",
  "SelectionBar-action": "styles__SelectionBar-action___3B1aR",
  "SelectionBar-action--withLabel": "styles__SelectionBar-action--withLabel___3TJq3",
  "spin": "styles__spin___1MUwn",
  "shake": "styles__shake___qrFb_"
};

var SelectionBarAction = function SelectionBarAction(_ref) {
  var selectedCount = _ref.selectedCount,
      selected = _ref.selected,
      action = _ref.action;

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  if (isDesktop) {
    return /*#__PURE__*/React.createElement(Button, {
      "data-testid": "selectionBar-action-".concat(action.name),
      className: cx(styles['SelectionBar-action'], styles['SelectionBar-action--withLabel']),
      variant: "text",
      disabled: action.disabled === undefined ? selectedCount < 1 // to avoid breaking change
      : action.disabled(selected),
      onClick: function onClick() {
        return action.action(selected);
      },
      startIcon: /*#__PURE__*/React.createElement(Icon, {
        icon: action.icon || action.name.toLowerCase()
      })
    }, t('SelectionBar.' + action.name));
  }

  return /*#__PURE__*/React.createElement(IconButton, {
    "data-testid": "selectionBar-action-".concat(action.name),
    className: styles['SelectionBar-action'],
    label: t('SelectionBar.' + action.name),
    disabled: action.disabled === undefined ? selectedCount < 1 // to avoid breaking change
    : action.disabled(selected),
    size: "medium",
    onClick: function onClick() {
      return action.action(selected);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: action.icon || action.name.toLowerCase()
  }));
};

SelectionBarAction.propTypes = {
  /**
   * Number of item selected
   */
  selectedCount: PropTypes.number.isRequired,

  /**
   * List of ids of the selected items
   */
  selected: PropTypes.array.isRequired,

  /**
   * List of object with the property of action and a name
   */
  action: PropTypes.object.isRequired
};
export default SelectionBarAction;