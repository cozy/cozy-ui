import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "monoColumn", "withTopBar"],
    _excluded2 = ["className", "children"],
    _excluded3 = ["className", "children"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { createContext, forwardRef, useContext, useMemo } from 'react';
var styles = {
  "o-layout": "styles__o-layout___3TSz9",
  "o-layout-2panes": "styles__o-layout-2panes___1CDQw",
  "o-layout-main": "styles__o-layout-main___3mPxz",
  "o-layout-main-topbar": "styles__o-layout-main-topbar___3FSE_",
  "o-layout-main-2panes": "styles__o-layout-main-2panes___3ickD",
  "o-layout-content": "styles__o-layout-content___3D5gN",
  "o-layout-content-2panes": "styles__o-layout-content-2panes___2Hotr"
};
import { useBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints";
export var LayoutContext = /*#__PURE__*/createContext();
export var useLayout = function useLayout() {
  var context = useContext(LayoutContext);

  if (!context) {
    throw new Error('useLayout must be used within a LayoutContext');
  }

  return context;
};
var LayoutProvider = /*#__PURE__*/React.memo(function (_ref) {
  var monoColumn = _ref.monoColumn,
      withTopBar = _ref.withTopBar,
      children = _ref.children;
  var value = useMemo(function () {
    return {
      monoColumn: monoColumn,
      withTopBar: withTopBar
    };
  }, [monoColumn, withTopBar]);
  return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    value: value
  }, children);
});
LayoutProvider.displayName = 'LayoutProvider';
export var Layout = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
      className = _ref2.className,
      monoColumn = _ref2.monoColumn,
      withTopBar = _ref2.withTopBar,
      props = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/React.createElement(LayoutProvider, {
    monoColumn: monoColumn,
    withTopBar: withTopBar
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: cx(className, styles['o-layout'], _defineProperty({}, styles['o-layout-main-2panes'], !monoColumn))
  }, props), children));
});
Layout.displayName = 'Layout';
export var Main = /*#__PURE__*/forwardRef(function (_ref3, ref) {
  var _cx2;

  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded2);

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  var _useLayout = useLayout(),
      monoColumn = _useLayout.monoColumn,
      withTopBar = _useLayout.withTopBar;

  return /*#__PURE__*/React.createElement("main", _extends({
    ref: ref,
    className: cx(className, styles['o-layout-main'], (_cx2 = {}, _defineProperty(_cx2, styles['o-layout-main-2panes'], !monoColumn), _defineProperty(_cx2, styles["o-layout-main-topbar"], withTopBar && !isDesktop), _cx2))
  }, props), children);
});
Main.displayName = 'Main';
export var Content = /*#__PURE__*/forwardRef(function (_ref4, ref) {
  var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, _excluded3);

  var _useLayout2 = useLayout(),
      monoColumn = _useLayout2.monoColumn;

  var variant = monoColumn ? 'monocolumn' : '2panes';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "main",
    ref: ref,
    className: cx(className, styles['o-layout-content'], styles["o-layout-content-".concat(variant)])
  }, props), children);
});
Content.displayName = 'Content';
Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  /** Used to add/remove top spacing when using with or without a topbar */
  withTopBar: PropTypes.bool,

  /** Should be true if no sidebar in the app */
  monoColumn: PropTypes.bool
};
Layout.defaultProps = {
  withTopBar: true,
  monoColumn: false
};