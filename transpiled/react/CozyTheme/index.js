import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { createContext, useContext } from 'react';
import cx from 'classnames';
import MuiCozyTheme from "cozy-ui/transpiled/react/MuiCozyTheme";
export var CozyThemeContext = /*#__PURE__*/createContext();

var CozyTheme = function CozyTheme(_ref) {
  var variant = _ref.variant,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React.createElement(CozyThemeContext.Provider, {
    value: variant
  }, /*#__PURE__*/React.createElement(MuiCozyTheme, {
    variant: variant
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(className, _defineProperty({}, "CozyTheme--".concat(variant), Boolean(variant)))
  }, children)));
};

export var useCozyTheme = function useCozyTheme() {
  return useContext(CozyThemeContext);
};
export default CozyTheme;