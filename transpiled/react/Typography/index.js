import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["color", "variant", "children"];
import MuiTypography from '@material-ui/core/Typography';
import React, { forwardRef } from 'react';
/**
 * @typedef TypographyPropTypes
 * @property {string} [color] - The color of the text.
 * @property {string} [variant] - The variant of the text.
 * @property {React.ReactNode} children - The content of the component.
 */

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, TypographyPropTypes & import('@material-ui/core/Typography').TypographyProps>
 */

var Typography = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var color = _ref.color,
      variant = _ref.variant,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var madeColor = color || (variant === 'caption' ? 'textSecondary' : 'textPrimary');
  return /*#__PURE__*/React.createElement(MuiTypography, _extends({
    ref: ref,
    variant: variant,
    color: madeColor
  }, props), children);
});
export default Typography;