import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["size", "className", "children", "color"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MuiIconButton from '@material-ui/core/IconButton';
var muiSupportedColors = ['default', 'inherit', 'primary', 'secondary'];
var IconButton = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      className = _ref.className,
      children = _ref.children,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, _excluded);

  var selfColor = muiSupportedColors.includes(color) ? color : 'default';
  return /*#__PURE__*/React.createElement(MuiIconButton, _extends({
    ref: ref,
    className: cx(className, size, {
      'cozyStyles-error': color === 'error'
    }),
    color: selfColor
  }, props), children);
});
IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
export default IconButton;