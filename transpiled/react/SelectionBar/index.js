import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { useWebviewIntent } from 'cozy-intent';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import CrossIcon from "cozy-ui/transpiled/react/Icons/Cross";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
var styles = {
  "SelectionBar": "styles__SelectionBar___3UOqy",
  "SelectionBar-count": "styles__SelectionBar-count___1e2yD",
  "SelectionBar-action": "styles__SelectionBar-action___3B1aR",
  "SelectionBar-action--withLabel": "styles__SelectionBar-action--withLabel___3TJq3",
  "spin": "styles__spin___1MUwn",
  "shake": "styles__shake___qrFb_"
};
import SelectionBarAction from "cozy-ui/transpiled/react/SelectionBar/SelectionBarAction";
import SelectionBarMore from "cozy-ui/transpiled/react/SelectionBar/SelectionBarMore";
import useMaxActions from "cozy-ui/transpiled/react/SelectionBar/useMaxActions";
/*

If you want use SelectionBar component, you must have `actions` parameter, like :

actions = {
  trash: {
    action: selections => dispatch(trashFiles(selections))),
    icon: 'trash'
  },
  rename: {
    action: selections => dispatch(startRenamingAsync(selected[0])),
    displayCondition: selections => selections.length === 1
  }
}

*/

/**
 * @deprecated This component is depreacated, please use [ActionsBar](#/ActionsBar) instead.
 */

var SelectionBar = function SelectionBar(_ref) {
  var actions = _ref.actions,
      selected = _ref.selected,
      hideSelectionBar = _ref.hideSelectionBar,
      _ref$maxAction = _ref.maxAction,
      maxAction = _ref$maxAction === void 0 ? {
    isHuge: 6,
    isLarge: 5,
    isMedium: 8,
    isSmall: 8,
    isTiny: 3
  } : _ref$maxAction;
  console.warn('<SelectionBar /> is deprecated, please use <ActionsBar /> instead');

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var webviewIntent = useWebviewIntent();
  var theme = useTheme();
  var breakpoints = useBreakpoints();
  var selectedCount = selected.length;
  var actionList = Object.keys(actions).filter(function (actionName) {
    var action = actions[actionName];
    return action.displayCondition === undefined || action.displayCondition(selected);
  }).map(function (actionName) {
    return _objectSpread({
      name: actionName
    }, actions[actionName]);
  });
  var maxActionDisplayed = useMaxActions(maxAction); // This component is always rendered but hidden with CSS if there is no selection
  // That is why we do not use useSetFlagship API here because that hook can not accept changing values

  useEffect(function () {
    if (!webviewIntent || !theme) return;
    selectedCount === 0 && webviewIntent && webviewIntent.call('setFlagshipUI', {
      bottomBackground: theme.palette.background.default,
      bottomTheme: 'dark'
    });
    selectedCount > 0 && webviewIntent && webviewIntent.call('setFlagshipUI', {
      bottomBackground: theme.palette.grey[700],
      bottomTheme: 'light'
    });
    return function () {
      return webviewIntent && theme && webviewIntent.call('setFlagshipUI', {
        bottomBackground: theme.palette.background.default,
        bottomTheme: 'dark'
      }, 'cozy-ui/SelectionBar');
    }; // TODO: validate the deps are correct
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCount, webviewIntent]);
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "selectionBar",
    className: styles['SelectionBar'],
    role: "toolbar"
  }, /*#__PURE__*/React.createElement("span", {
    "data-testid": "selectionBar-count",
    className: styles['SelectionBar-count']
  }, selectedCount, !breakpoints.isMobile && /*#__PURE__*/React.createElement("span", null, ' ', t('SelectionBar.selected_count', {
    smart_count: selectedCount
  }))), /*#__PURE__*/React.createElement("div", null, actionList.slice(0, maxActionDisplayed).map(function (action, idx) {
    return /*#__PURE__*/React.createElement(SelectionBarAction, {
      key: idx,
      selectedCount: selectedCount,
      selected: selected,
      action: action
    });
  }), actionList.length > maxActionDisplayed && /*#__PURE__*/React.createElement(SelectionBarMore, {
    actions: actionList.slice(maxActionDisplayed),
    selectedCount: selectedCount,
    selected: selected
  })), /*#__PURE__*/React.createElement(IconButton, {
    "data-testid": "selectionBar-action-close",
    className: styles['SelectionBar-action'],
    label: t('SelectionBar.close'),
    size: "medium",
    onClick: hideSelectionBar
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CrossIcon
  })));
};

SelectionBar.propTypes = {
  /**
   * An object with actions
   */
  actions: PropTypes.object.isRequired,

  /**
   * List of ids of the selected items
   */
  selected: PropTypes.array.isRequired,

  /**
   * function to close SelectionBar.
   */
  hideSelectionBar: PropTypes.func.isRequired,

  /**
   * A number corresponding to the display of the maximum number of items.
   * The other actions will be displayed in an additional menu.
   * With an object, they can be detailed according to the breakpoints
   */
  maxAction: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};
export default SelectionBar;