import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["ignoreCozySettings"];
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import log from 'cozy-logger';
import { isRsg } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/helpers";
import CozyThemeWithQuery from "cozy-ui/transpiled/react/providers/CozyTheme/CozyThemeWithQuery";
import DumbCozyTheme from "cozy-ui/transpiled/react/providers/CozyTheme/DumbCozyTheme";
export var CozyThemeContext = /*#__PURE__*/createContext();
/**
 * @returns {{ type: 'light'|'dark', variant: 'normal'|'inverted', isLight: boolean }}
 */

export var useCozyTheme = function useCozyTheme() {
  var context = useContext(CozyThemeContext);

  if (!context) {
    log('error', '`CozyThemeContext` is missing. `useCozyTheme()` must be used within a `<CozyTheme>`. `light normal` is returned as fallback value.');
    return {
      type: 'light',
      variant: 'normal',
      isLight: true
    };
  }

  return context;
};

var CozyTheme = function CozyTheme(_ref) {
  var ignoreCozySettings = _ref.ignoreCozySettings,
      props = _objectWithoutProperties(_ref, _excluded);

  var Comp = ignoreCozySettings || process.env.NODE_ENV === 'test' || isRsg ? DumbCozyTheme : CozyThemeWithQuery;
  return /*#__PURE__*/React.createElement(Comp, props);
};

CozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted']),

  /** Causes this element's children to appear as if they were direct children of the element's parent, ignoring the element itself. */
  ignoreItself: PropTypes.bool,

  /** Bypasses the request that retrieves the app's settings in order to define the theme type */
  ignoreCozySettings: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};
CozyTheme.defaultProps = {
  variant: 'normal',
  ignoreCozySettings: false,
  ignoreItself: true
};
export default CozyTheme;