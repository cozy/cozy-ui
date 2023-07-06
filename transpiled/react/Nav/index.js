import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "secondary"],
    _excluded2 = ["to", "children"];
import React, { forwardRef } from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
var styles = {
  "c-nav": "styles__c-nav___33dZy",
  "c-nav-item": "styles__c-nav-item___3XOLK",
  "c-nav-icon": "styles__c-nav-icon___hrJUe",
  "is-active": "styles__is-active___2D0jN",
  "c-nav-text": "styles__c-nav-text___1J3yU",
  "c-nav-link": "styles__c-nav-link___3mK6W",
  "c-nav-item-secondary": "styles__c-nav-item-secondary___k14rf"
};
import cx from 'classnames';
export var NavItem = function NavItem(_ref) {
  var children = _ref.children,
      secondary = _ref.secondary,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("li", _extends({
    className: cx(styles['c-nav-item'], secondary ? styles['c-nav-item-secondary'] : null)
  }, restProps), children);
};
export var NavText = function NavText(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement("span", {
    className: styles['c-nav-text']
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
  var icon = _ref5.icon;
  return /*#__PURE__*/React.createElement("span", {
    className: cx(styles['c-nav-icon'])
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    "aria-hidden": "true",
    focusable: "false"
  }));
};

var Nav = function Nav(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React.createElement("nav", {
    role: "navigation"
  }, /*#__PURE__*/React.createElement("ul", {
    className: styles['c-nav']
  }, children));
};

export default Nav;
Nav.NavItem = NavItem;