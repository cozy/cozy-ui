import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import Typography from "cozy-ui/transpiled/react/Typography";

var QualificationListItemText = function QualificationListItemText(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement(ListItemText, {
    disableTypography: true,
    primary: /*#__PURE__*/React.createElement(Typography, {
      variant: "caption"
    }, primary),
    secondary: /*#__PURE__*/React.createElement(Typography, {
      component: "div",
      variant: "body1",
      style: disabled ? {
        color: 'var(--disabledTextColor)'
      } : undefined
    }, secondary)
  });
};

QualificationListItemText.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};
export default QualificationListItemText;