import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["color", "variant", "textAlign", "children", "className"];
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Typography from "cozy-ui/transpiled/react/Typography";
var styles = {
  "divider": "styles__divider___SuA5q",
  "center": "styles__center___3K8dw"
};
/**
 * @description This component is composing `<Typography />` and has access to the same props
 */

var TextDivider = function TextDivider(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'textPrimary' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'body2' : _ref$variant,
      textAlign = _ref.textAlign,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Typography, _extends({
    color: color,
    variant: variant,
    className: cx(styles['divider'], styles[textAlign], className)
  }, props), children);
};

TextDivider.propTypes = {
  textAlign: PropTypes.oneOf(['center'])
};
export default TextDivider;