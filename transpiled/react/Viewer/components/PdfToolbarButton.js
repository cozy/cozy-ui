import React from 'react';
import PropTypes from 'prop-types';
import Button from "cozy-ui/transpiled/react/deprecated/Button";

var PdfToolbarButton = function PdfToolbarButton(_ref) {
  var icon = _ref.icon,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      label = _ref.label;
  return /*#__PURE__*/React.createElement(Button, {
    iconOnly: true,
    subtle: true,
    theme: "secondary",
    className: "u-p-half u-m-half",
    icon: icon,
    onClick: onClick,
    disabled: disabled,
    label: label
  });
};

PdfToolbarButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};
export default PdfToolbarButton;