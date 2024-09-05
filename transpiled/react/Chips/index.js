import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "variant", "color", "className"];
import MuiChip from '@material-ui/core/Chip';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
var Chips = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var label = _ref.label,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MuiChip, _extends({
    ref: ref,
    className: cx(className, _defineProperty({
      noLabel: !label,
      ghost: variant === 'ghost'
    }, "customColor-".concat(color), color)),
    label: label,
    variant: variant === 'active' ? 'default' : 'outlined',
    color: variant === 'active' ? 'primary' : 'default'
  }, props));
});
Chips.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOf(['default', 'active', 'ghost']),
  color: PropTypes.oneOf(['primary', 'success', 'error', 'warning', 'info']),
  className: PropTypes.string
};
export default Chips;