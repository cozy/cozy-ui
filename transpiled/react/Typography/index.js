import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["color", "variant", "children"];
import React, { forwardRef } from 'react';
import MuiTypography from '@material-ui/core/Typography';
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