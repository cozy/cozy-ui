import PropTypes from 'prop-types';
import React from 'react';
import { getTheme } from "cozy-ui/transpiled/react/MuiCozyTheme/theme";
import { ThemeProvider } from "cozy-ui/transpiled/react/styles";
console.log(' ');
console.log('🟢 BUILDED FROM GA - should be right');
console.log(' ');

var MuiCozyTheme = function MuiCozyTheme(_ref) {
  var type = _ref.type,
      variant = _ref.variant,
      children = _ref.children;
  var theme = getTheme(type, variant);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, children);
};

MuiCozyTheme.propTypes = {
  type: PropTypes.oneOf(['light', 'dark']),
  variant: PropTypes.oneOf(['normal', 'inverted'])
};
MuiCozyTheme.defaultProps = {
  type: 'light',
  variant: 'normal'
};
export default MuiCozyTheme;