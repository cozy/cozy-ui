import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "label", "error", "mixed", "disabled", "size", "disableEffect"],
    _excluded2 = ["className", "label", "labelPlacement", "onChange", "children"];
import MUICheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
import CheckSquareIcon from "cozy-ui/transpiled/react/Icons/CheckSquare";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDepecratedCheckbox = createDepreciationLogger();

var DefaultCheckbox = function DefaultCheckbox(_ref) {
  var _cx;

  var className = _ref.className,
      label = _ref.label,
      error = _ref.error,
      mixed = _ref.mixed,
      disabled = _ref.disabled,
      size = _ref.size,
      disableEffect = _ref.disableEffect,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MUICheckbox, _extends({
    className: cx(className, (_cx = {}, _defineProperty(_cx, 'u-p-0', disableEffect), _defineProperty(_cx, "small", size === 'small'), _cx)),
    inputProps: {
      'aria-label': label,
      'aria-checked': mixed ? 'mixed' : '',
      'aria-disabled': disabled
    },
    color: error ? 'secondary' : 'primary',
    indeterminate: mixed,
    disabled: disabled,
    size: size,
    disableRipple: disableEffect,
    checkedIcon: /*#__PURE__*/React.createElement("div", {
      className: "u-flex u-flex-items-center u-flex-justify-center",
      style: {
        width: size === 'small' ? 20 : 24,
        height: size === 'small' ? 20 : 24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: CheckSquareIcon,
      size: size === 'small' ? 16 : 18
    }))
  }, props));
};

var Checkbox = function Checkbox(_ref2) {
  var className = _ref2.className,
      label = _ref2.label,
      labelPlacement = _ref2.labelPlacement,
      onChange = _ref2.onChange,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded2);

  if (children) {
    logDepecratedCheckbox('<Checkbox> used with children is deprecated, please use <Checkbox label={something} /> instead of <Checkbox>something</Checkbox>');
  }

  if (label || children) {
    return /*#__PURE__*/React.createElement(FormControlLabel, {
      className: cx({
        'FormControlLabel-error': props.error
      }, className),
      label: label || children,
      labelPlacement: labelPlacement,
      control: /*#__PURE__*/React.createElement(DefaultCheckbox, _extends({}, props, {
        label: label
      })),
      onChange: onChange
    });
  }

  return /*#__PURE__*/React.createElement(DefaultCheckbox, _extends({
    className: className,
    onChange: onChange,
    label: label
  }, props));
};

Checkbox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  mixed: PropTypes.bool,
  disableEffect: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  labelPlacement: PropTypes.oneOf(['top', 'end', 'bottom', 'start']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Checkbox.defaultProps = {
  className: '',
  value: '',
  error: false,
  mixed: false,
  disableEffect: false,
  size: 'medium',
  labelPlacement: 'end',
  label: ''
};
export default Checkbox;