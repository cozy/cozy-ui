import React from 'react';
import cx from 'classnames';
import List from "cozy-ui/transpiled/react/List";
import Stack from "cozy-ui/transpiled/react/Stack";
import Card from "cozy-ui/transpiled/react/Card";
import Typography from "cozy-ui/transpiled/react/Typography";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import ListSubheader from "cozy-ui/transpiled/react/ListSubheader";
var styles = {
  "DesktopSectionWrapper": "styles__DesktopSectionWrapper___1rIWP"
};

var NavigationList = function NavigationList(_ref) {
  var children = _ref.children,
      style = _ref.style,
      className = _ref.className;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  return isMobile ? /*#__PURE__*/React.createElement(List, {
    className: className,
    style: style
  }, children) : /*#__PURE__*/React.createElement(Stack, {
    spacing: "s",
    className: cx(styles.DesktopSectionWrapper, className),
    style: style
  }, children);
};

export default NavigationList;

var DesktopSection = function DesktopSection(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(Card, {
    className: "u-p-0 u-ov-hidden u-mb-1-half"
  }, children);
};

export var NavigationListSection = function NavigationListSection(_ref3) {
  var children = _ref3.children;

  var _useBreakpoints2 = useBreakpoints(),
      isMobile = _useBreakpoints2.isMobile;

  return isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : /*#__PURE__*/React.createElement(DesktopSection, null, children);
};
export var NavigationListHeader = function NavigationListHeader(_ref4) {
  var children = _ref4.children;

  var _useBreakpoints3 = useBreakpoints(),
      isMobile = _useBreakpoints3.isMobile;

  return isMobile ? /*#__PURE__*/React.createElement(ListSubheader, null, children) : /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "textSecondary",
    className: "u-mb-1"
  }, children);
};