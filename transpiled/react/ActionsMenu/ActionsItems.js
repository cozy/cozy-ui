import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["docs", "actions", "actionOptions", "component", "onClick"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useClient } from 'cozy-client';
import { useWebviewIntent } from 'cozy-intent';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { getActionName, getOnlyNeededActions } from "cozy-ui/transpiled/react/ActionsMenu/Actions/helpers";
var ActionsItems = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var docs = _ref.docs,
      actions = _ref.actions,
      actionOptions = _ref.actionOptions,
      component = _ref.component,
      overridedClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  var client = useClient();
  var webviewIntent = useWebviewIntent();

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var cleanedActions = useMemo(function () {
    return getOnlyNeededActions(actions, docs);
  }, [actions, docs]);
  return cleanedActions.map(function (actionObject, idx) {
    var actionName = getActionName(actionObject);
    var actionDefinition = Object.values(actionObject)[0];
    var ActionComponent = actionDefinition.Component,
        action = actionDefinition.action,
        disabled = actionDefinition.disabled;

    var handleClick = function handleClick(clickProps) {
      action === null || action === void 0 ? void 0 : action(docs, _objectSpread(_objectSpread({
        client: client,
        t: t,
        webviewIntent: webviewIntent
      }, actionOptions), clickProps));
      overridedClick === null || overridedClick === void 0 ? void 0 : overridedClick();
    };

    var Component = component !== null && component !== void 0 ? component : ActionComponent;
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      ref: ref,
      key: actionName + idx,
      action: actionDefinition,
      docs: docs,
      autoFocus: idx === 0,
      disabled: disabled === null || disabled === void 0 ? void 0 : disabled(docs),
      onClick: handleClick
    }));
  });
});
ActionsItems.propTypes = {
  docs: PropTypes.array,

  /** The returned component that manages the display */
  component: PropTypes.object,
  actions: PropTypes.array,

  /** Props spread to action method of Actions component */
  actionOptions: PropTypes.object,

  /** The overrideClick function from ActionsMenuWrapper */
  onClick: PropTypes.func
};
export var actionsItemsComponentPropTypes = {
  docs: PropTypes.array,
  action: PropTypes.object,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
export default ActionsItems;