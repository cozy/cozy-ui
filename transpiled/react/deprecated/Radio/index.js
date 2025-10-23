import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "value", "name", "label", "error", "disabled", "style", "gutter", "onChange", "checked"];
import { useRadioGroup } from '@material-ui/core/RadioGroup';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-input-radio": "styles__c-input-radio___1f4CB",
  "is-error": "styles__is-error___5jyha",
  "c-input-radio--noGutter": "styles__c-input-radio--noGutter___2gFTH"
};
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logRadioDepecrated = createDepreciationLogger();
/**
 * @deprecated Please use [Radios](#/Radios)
 */

var Radio = function Radio(props) {
  var _cx;

  var className = props.className,
      value = props.value,
      nameProp = props.name,
      label = props.label,
      error = props.error,
      disabled = props.disabled,
      style = props.style,
      gutter = props.gutter,
      onChangeProp = props.onChange,
      checkedProp = props.checked,
      restProps = _objectWithoutProperties(props, _excluded);

  logRadioDepecrated('The Radio component is deprecated, please use `<Radios />` instead. You can replace `<Radio value="" label="" />` by `<FormControlLabel value="" label="" control={<Radios />} />`. See documentation for more details.');
  var radioGroup = useRadioGroup();
  var checked = checkedProp;
  var name = nameProp;

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value;
    }

    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  var onChange = onChangeProp || radioGroup && radioGroup.onChange || function () {};

  return /*#__PURE__*/React.createElement("label", {
    className: cx(styles['c-input-radio'], (_cx = {}, _defineProperty(_cx, styles['c-input-radio--noGutter'], gutter === false), _defineProperty(_cx, styles['is-error'], error), _cx), className),
    "aria-disabled": disabled,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    value: value,
    name: name,
    disabled: disabled,
    onChange: onChange,
    checked: checked
  }, restProps)), /*#__PURE__*/React.createElement("span", null, label));
};

Radio.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string
};
Radio.defaultProps = {
  error: false,
  gutter: true
};
export default Radio;