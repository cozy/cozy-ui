import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["variant", "className", "color", "label", "busy", "disabled", "endIcon"],
    _excluded2 = ["variant", "className"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MuiButton from '@material-ui/core/Button';
import Icon from "cozy-ui/transpiled/react/Icon";
import SpinnerIcon from "cozy-ui/transpiled/react/Icons/Spinner";
var CUSTOM_COLORS = ['success', 'error', 'warning', 'info'];
var DefaultButton = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var variant = _ref.variant,
      className = _ref.className,
      color = _ref.color,
      label = _ref.label,
      busy = _ref.busy,
      disabled = _ref.disabled,
      endIcon = _ref.endIcon,
      props = _objectWithoutProperties(_ref, _excluded);

  var customColor = CUSTOM_COLORS.includes(color) ? color : 'primary';

  var _color = variant === 'text' && !CUSTOM_COLORS.includes(color) ? color : 'primary';

  return /*#__PURE__*/React.createElement(MuiButton, _extends({}, props, {
    variant: variant,
    ref: ref,
    className: cx(_defineProperty({}, "customColor-".concat(customColor), customColor), className),
    color: _color,
    disabled: disabled || busy,
    endIcon: busy ? /*#__PURE__*/React.createElement(Icon, {
      icon: SpinnerIcon,
      spin: true,
      "aria-hidden": true,
      focusable: "false"
    }) : endIcon,
    disableElevation: true
  }), label);
});
DefaultButton.displayName = 'DefaultButton';
DefaultButton.defaultProps = {
  variant: 'contained',
  color: 'primary'
};
var Buttons = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var variant = _ref2.variant,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      props = _objectWithoutProperties(_ref2, _excluded2);

  switch (variant) {
    case 'ghost':
      return /*#__PURE__*/React.createElement(DefaultButton, _extends({
        className: "ghost ".concat(className),
        variant: "outlined"
      }, props, {
        ref: ref
      }));

    case 'secondary':
      return /*#__PURE__*/React.createElement(DefaultButton, _extends({
        variant: "outlined",
        className: className
      }, props, {
        ref: ref
      }));

    case 'text':
      return /*#__PURE__*/React.createElement(DefaultButton, _extends({
        variant: "text",
        className: className
      }, props, {
        ref: ref
      }));

    case 'primary':
      return /*#__PURE__*/React.createElement(DefaultButton, _extends({
        className: className
      }, props, {
        ref: ref
      }));

    default:
      return /*#__PURE__*/React.createElement(DefaultButton, _extends({
        className: className
      }, props, {
        ref: ref
      }));
  }
});
Buttons.displayName = 'Buttons';
Buttons.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'text']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'success', 'error', 'warning', 'info'])
};
Buttons.defaultProps = {
  variant: 'primary'
};
export default Buttons;