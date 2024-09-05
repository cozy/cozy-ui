import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "disabled", "placeholder", "children", "error", "size", "fullwidth"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-textarea": "styles__c-textarea___D7EEH",
  "is-error": "styles__is-error___1kGLj",
  "c-textarea--tiny": "styles__c-textarea--tiny___3fmPW",
  "c-textarea--medium": "styles__c-textarea--medium___T8f3b",
  "c-textarea--fullwidth": "styles__c-textarea--fullwidth___Ih_mg"
};
var Textarea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _cx;

  var className = props.className,
      disabled = props.disabled,
      placeholder = props.placeholder,
      children = props.children,
      error = props.error,
      size = props.size,
      fullwidth = props.fullwidth,
      restProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("textarea", _extends({
    ref: ref,
    "aria-disabled": disabled,
    disabled: disabled,
    placeholder: placeholder,
    className: cx(styles['c-textarea'], (_cx = {}, _defineProperty(_cx, styles["is-error"], error), _defineProperty(_cx, styles["c-textarea--".concat(size)], size), _defineProperty(_cx, styles["c-textarea--fullwidth"], fullwidth), _cx), className)
  }, restProps), children);
});
Textarea.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'medium']),
  fullwidth: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func
};
Textarea.defaultProps = {
  placeholder: '',
  error: false,
  fullwidth: false
};
export default Textarea;