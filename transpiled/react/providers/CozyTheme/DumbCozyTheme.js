import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import flag from 'cozy-flags';
import useMediaQuery from "cozy-ui/transpiled/react/hooks/useMediaQuery";
import MuiCozyTheme from "cozy-ui/transpiled/react/MuiCozyTheme";
import { CozyThemeContext } from "cozy-ui/transpiled/react/providers/CozyTheme/index";

var DumbCozyTheme = function DumbCozyTheme(_ref) {
  var _cx;

  var variant = _ref.variant,
      className = _ref.className,
      ignoreItself = _ref.ignoreItself,
      settingsThemeType = _ref.settingsThemeType,
      children = _ref.children;
  var uiThemeType = localStorage.getItem('ui-theme-type'); // use only for cozy-ui documentation and argos screenshots

  var uiThemeVariant = localStorage.getItem('ui-theme-variant'); // use only for cozy-ui documentation and argos screenshots

  var isOnlyLight = !!flag('ui.darkmode.enabled'); // should be remove when dark mode is validated on all apps

  var deviceThemeType = useMediaQuery('(prefers-color-scheme: dark)') ? isOnlyLight ? 'dark' : 'light' : 'light';
  var filteredSettingsThemeType = ['light', 'dark'].includes(settingsThemeType) ? settingsThemeType : undefined;
  var selfThemeType = uiThemeType || filteredSettingsThemeType || deviceThemeType;
  var selfThemeVariant = uiThemeVariant || variant;
  return /*#__PURE__*/React.createElement(CozyThemeContext.Provider, {
    value: {
      type: selfThemeType,
      variant: selfThemeVariant,
      isLight: selfThemeType === 'light'
    }
  }, /*#__PURE__*/React.createElement(MuiCozyTheme, {
    type: selfThemeType,
    variant: selfThemeVariant
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(className, (_cx = {}, _defineProperty(_cx, "CozyTheme--".concat(selfThemeType, "-").concat(selfThemeVariant), Boolean(selfThemeVariant)), _defineProperty(_cx, 'u-dc', ignoreItself), _cx))
  }, children)));
};

DumbCozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted']),

  /** Causes this element's children to appear as if they were direct children of the element's parent, ignoring the element itself. */
  ignoreItself: PropTypes.bool,
  className: PropTypes.string,

  /** Theme type from io.cozy.settings.instance */
  settingsThemeType: PropTypes.oneOf(['light', 'dark', 'auto']),
  children: PropTypes.node
};
export default DumbCozyTheme;