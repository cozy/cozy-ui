import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "children", "secondary"],
    _excluded2 = ["to", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import cx from 'classnames';
import React, { Children, isValidElement, useState, forwardRef } from 'react';
import withNavLocales from "cozy-ui/transpiled/react/Nav/locales/withNavLocales";
var styles = {
  "c-nav": "styles__c-nav___33dZy",
  "c-nav-item": "styles__c-nav-item___3XOLK",
  "c-nav-icon": "styles__c-nav-icon___hrJUe",
  "c-nav-text": "styles__c-nav-text___1J3yU",
  "is-active": "styles__is-active___2D0jN",
  "c-nav-link": "styles__c-nav-link___3mK6W",
  "c-nav-item-secondary": "styles__c-nav-item-secondary___k14rf",
  "c-nav-limiter": "styles__c-nav-limiter___3oxQU"
};
import DropdownText from "cozy-ui/transpiled/react/DropdownText";
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";
import TopIcon from "cozy-ui/transpiled/react/Icons/Top";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
export var NavItem = function NavItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      secondary = _ref.secondary,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("li", _extends({
    className: cx(styles['c-nav-item'], className, secondary ? styles['c-nav-item-secondary'] : null)
  }, restProps), children);
};
export var NavText = function NavText(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement("span", {
    className: cx(styles['c-nav-text'], className)
  }, children);
};
export var NavLink = {
  className: styles['c-nav-link'],
  activeClassName: styles['is-active']
}; // Generates a styled NavLink for react-routeur v5 and older

export var genNavLink = function genNavLink(RRNavLink) {
  return function (_ref3) {
    var to = _ref3.to,
        children = _ref3.children,
        rest = _objectWithoutProperties(_ref3, _excluded2);

    return /*#__PURE__*/React.createElement(RRNavLink, _extends({
      to: to,
      className: NavLink.className,
      activeClassName: NavLink.activeClassName
    }, rest), children);
  };
}; // Generates a styled NavLink for react-routeur v6

export var genNavLinkForV6 = function genNavLinkForV6(RRNavLink) {
  return /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(RRNavLink, _extends({
      ref: ref,
      className: function className(_ref4) {
        var isActive = _ref4.isActive;
        return styles['c-nav-link'] + (isActive ? " ".concat(styles['is-active']) : '');
      }
    }, props));
  });
};
export var NavIcon = function NavIcon(_ref5) {
  var className = _ref5.className,
      icon = _ref5.icon;
  return /*#__PURE__*/React.createElement("span", {
    className: cx(styles['c-nav-icon'], className)
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    "aria-hidden": "true",
    focusable: "false"
  }));
};

var Nav = function Nav(_ref6) {
  var className = _ref6.className,
      children = _ref6.children;
  return /*#__PURE__*/React.createElement("nav", {
    role: "navigation"
  }, /*#__PURE__*/React.createElement("ul", {
    className: cx(styles['c-nav'], className)
  }, children));
};
/**
 * Component that limits the number of displayed children in a list
 * and provides a dropdown button to toggle between displaying all children or a limited number of children.
 * Provided children should be of type `<ListItem />` or similar.
 */


var _NavDesktopLimiter = function _NavDesktopLimiter(_ref7) {
  var children = _ref7.children,
      _ref7$max = _ref7.max,
      max = _ref7$max === void 0 ? 5 : _ref7$max;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      viewingAll = _useState2[0],
      setViewingAll = _useState2[1];

  var childrenArray = Children.toArray(children).filter(isValidElement);
  var amountHidden = Math.max(0, childrenArray.length - max);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var displayedChildren = viewingAll ? childrenArray : childrenArray.slice(0, max);

  var onToggle = function onToggle() {
    return setViewingAll(function (current) {
      return !current;
    });
  };

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  if (isMobile) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, displayedChildren, amountHidden > 0 && /*#__PURE__*/React.createElement(NavItem, {
    secondary: true
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cx(styles['c-nav-link'], styles['c-nav-limiter']),
    onClick: onToggle
  }, /*#__PURE__*/React.createElement(NavIcon, {
    icon: viewingAll ? TopIcon : BottomIcon
  }), /*#__PURE__*/React.createElement(NavText, null, viewingAll ? t('navLimiter.showLess') : "".concat(t('navLimiter.showMore'), " (").concat(amountHidden, ")")))));
};

export var NavDesktopLimiter = withNavLocales(_NavDesktopLimiter);
export var NavDesktopDropdown = function NavDesktopDropdown(_ref8) {
  var label = _ref8.label,
      children = _ref8.children,
      _ref8$defaultOpen = _ref8.defaultOpen,
      defaultOpen = _ref8$defaultOpen === void 0 ? true : _ref8$defaultOpen,
      _ref8$limit = _ref8.limit,
      limit = _ref8$limit === void 0 ? 5 : _ref8$limit;

  var _useBreakpoints2 = useBreakpoints(),
      isDesktop = _useBreakpoints2.isDesktop;

  var _useState3 = useState(defaultOpen),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var isActivated = Children.toArray(children).filter(isValidElement).length > limit;

  var innerIconProps = _objectSpread({
    rotate: open ? 0 : -90
  }, !isActivated && {
    className: 'u-dn'
  });

  if (!isDesktop) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, {
    size: "small",
    className: isActivated ? 'u-c-pointer' : ''
  }, /*#__PURE__*/React.createElement(DropdownText, {
    variant: "subtitle2",
    color: "textSecondary",
    innerIconProps: innerIconProps,
    onClick: function onClick() {
      if (!isActivated) {
        return;
      }

      setOpen(!open);
    }
  }, label)), open && /*#__PURE__*/React.createElement(React.Fragment, null, children));
};
export default Nav;
Nav.NavItem = NavItem;