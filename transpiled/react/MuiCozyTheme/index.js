import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from "cozy-ui/transpiled/react/styles";
import { getTheme } from "cozy-ui/transpiled/react/MuiCozyTheme/theme";

var MuiCozyTheme = function MuiCozyTheme(_ref) {
  var variant = _ref.variant,
      children = _ref.children;
  var theme = getTheme(variant);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, children);
};

MuiCozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted'])
};
MuiCozyTheme.defaultProps = {
  variant: 'normal'
};
export default MuiCozyTheme;