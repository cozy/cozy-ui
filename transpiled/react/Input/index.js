import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["autoComplete", "disabled", "type", "id", "className", "value", "placeholder", "error", "size", "fullwidth"];
import React, { forwardRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
var styles = {
  "c-input-text": "styles__c-input-text___3TAv1",
  "is-error": "styles__is-error___3lsCJ",
  "c-input-text--tiny": "styles__c-input-text--tiny___MzMoD",
  "c-input-text--medium": "styles__c-input-text--medium___28jPV",
  "c-input-text--large": "styles__c-input-text--large___28EaR",
  "c-input-text--fullwidth": "styles__c-input-text--fullwidth___33o_f"
};
var Input = /*#__PURE__*/forwardRef(function (props, ref) {
  var _cx;

  var autoComplete = props.autoComplete,
      disabled = props.disabled,
      type = props.type,
      id = props.id,
      className = props.className,
      value = props.value,
      placeholder = props.placeholder,
      error = props.error,
      size = props.size,
      fullwidth = props.fullwidth,
      restProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("input", _extends({
    "aria-disabled": disabled,
    autoComplete: autoComplete,
    type: type,
    id: id,
    ref: ref,
    className: cx(styles['c-input-text'], (_cx = {}, _defineProperty(_cx, styles["is-error"], error), _defineProperty(_cx, styles["c-input-text--".concat(size)], size), _defineProperty(_cx, styles["c-input-text--fullwidth"], fullwidth), _cx), className),
    disabled: disabled,
    placeholder: placeholder,
    value: value,
    spellCheck: false
  }, restProps));
});
Input.displayName = 'Input';
Input.propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['date', 'email', 'number', 'password', 'text', 'url', 'tel']),
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'medium', 'large']),
  fullwidth: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func
};
Input.defaultProps = {
  type: 'text',
  error: false,
  fullwidth: false,
  size: 'large'
};
export default Input;