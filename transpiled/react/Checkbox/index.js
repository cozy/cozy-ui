import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "error", "mixed", "disabled"],
    _excluded2 = ["className", "label", "onChange", "children"];
import MUICheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDepecratedCheckbox = createDepreciationLogger();

var DefaultCheckbox = function DefaultCheckbox(_ref) {
  var label = _ref.label,
      error = _ref.error,
      mixed = _ref.mixed,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MUICheckbox, _extends({
    inputProps: {
      'aria-label': label,
      'aria-checked': mixed ? 'mixed' : '',
      'aria-disabled': disabled
    },
    color: error ? 'secondary' : 'primary',
    indeterminate: mixed,
    disabled: disabled
  }, props));
};

var Checkbox = function Checkbox(_ref2) {
  var className = _ref2.className,
      label = _ref2.label,
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
  label: PropTypes.string
};
Checkbox.defaultProps = {
  className: '',
  value: '',
  error: false,
  mixed: false,
  label: ''
};
export default Checkbox;