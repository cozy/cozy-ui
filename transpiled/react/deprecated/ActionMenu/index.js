import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useActionMenuEffects } from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuEffects";
import { ActionMenuHeader } from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuHeader";
import { ActionMenuItem } from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuItem";
import ActionMenuItemWrapper from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuItemWrapper";
import { ActionMenuRadio } from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuRadio";
import ActionMenuWithClose from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuWithClose";
import ActionMenuWrapper from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuWrapper";
import ActionsItems from "cozy-ui/transpiled/react/deprecated/ActionMenu/Actions/ActionsItems";
var styles = {
  "c-actionmenu": "styles__c-actionmenu___IUGX7",
  "c-actionmenu--inline": "styles__c-actionmenu--inline___1RWrO",
  "c-actionmenu-header": "styles__c-actionmenu-header___2p_ke",
  "c-actionmenu-item": "styles__c-actionmenu-item___WzUJQ",
  "c-actionmenu-radio": "styles__c-actionmenu-radio___38gls"
};
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
var logDepecratedMenu = createDepreciationLogger();
var logDepecratedPlacement = createDepreciationLogger();
var logDepecratedOverflow = createDepreciationLogger();
var logDepecratedContainer = createDepreciationLogger();
/**
 * @deprecated This component is depreacated, please use [ActionsMenu](#/ActionsMenu) instead.
 */

var ActionMenu = function ActionMenu(_ref) {
  var className = _ref.className,
      anchorElRef = _ref.anchorElRef,
      autoclose = _ref.autoclose,
      popperOptions = _ref.popperOptions,
      children = _ref.children,
      onClose = _ref.onClose,
      placement = _ref.placement,
      preventOverflow = _ref.preventOverflow,
      containerElRef = _ref.containerElRef;
  if (placement) logDepecratedPlacement('<ActionMenu placement /> is deprecated, use <ActionMenu popperOptions={{ placement }} /> instead');
  if (preventOverflow) logDepecratedOverflow('<ActionMenu preventOverflow /> is deprecated, use <ActionMenu popperOptions={{ modifiers }} /> instead');
  if (containerElRef) logDepecratedContainer('<ActionMenu containerElRef /> is not needed anymore, it can be removed.');
  logDepecratedMenu('The ActionMenu component has been deprecated and should be replaced by ActionsMenu. More infos: https://docs.cozy.io/cozy-ui/react/#!/ActionsMenu');

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var containerRef = /*#__PURE__*/React.createRef();
  useActionMenuEffects();
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: containerRef,
    onClick: autoclose ? onClose : null
  }, /*#__PURE__*/React.createElement(ActionMenuWrapper, {
    anchorElRef: anchorElRef || containerRef,
    popperOptions: popperOptions,
    onClose: onClose,
    placement: placement,
    preventOverflow: preventOverflow
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(styles['c-actionmenu'], _defineProperty({}, styles['c-actionmenu--inline'], !isMobile))
  }, React.Children.map(children, function (child) {
    return child && child.type === ActionMenuHeader && !isMobile ? null : child;
  }))));
};

ActionMenu.propTypes = {
  /** Extra class */
  className: PropTypes.string,

  /** The reference element for the menu placement and overflow prevention. */
  anchorElRef: PropTypes.object,

  /** Whether the menu should automatically close itself when an item is clicked */
  autoclose: PropTypes.bool,

  /** Options passed to popper.js to control menu behaviour on desktop */
  popperOptions: PropTypes.shape({
    placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'])
  }),

  /** Elements of the menu */
  children: PropTypes.node,

  /** What to do on close */
  onClose: PropTypes.func,

  /** Deprecated */
  placement: PropTypes.string,

  /** Deprecated */
  preventOverflow: PropTypes.bool,

  /** Deprecated */
  containerElRef: PropTypes.object
};
ActionMenu.defaultProps = {
  popperOptions: {
    placement: 'bottom-start'
  },
  autoclose: false
};
export default ActionMenu;
export { ActionMenuHeader, ActionMenuItem, ActionMenuRadio, ActionMenuItemWrapper, ActionMenuWithClose, ActionMenuWrapper, ActionsItems };