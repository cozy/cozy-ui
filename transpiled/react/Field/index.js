import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["hideLabel", "showLabel", "fullwidth", "secondaryComponent", "inputRef"],
    _excluded2 = ["className", "variant"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import cx from 'classnames';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
var styles = {
  "o-field": "styles__o-field___3n5HM",
  "o-field--inline": "styles__o-field--inline___7JWZ8",
  "o-field-input": "styles__o-field-input___vCqdV",
  "o-side": "styles__o-side___tXbXL",
  "o-field-input-action": "styles__o-field-input-action___2k7a8",
  "o-side-fullwidth": "styles__o-side-fullwidth___7WcCI"
};
import ContactPicker from "cozy-ui/transpiled/react/ContactPicker";
import Input from "cozy-ui/transpiled/react/Input";
import Label from "cozy-ui/transpiled/react/Label";
var labelStyles = {
  "c-label": "styles__c-label___o4ozG",
  "is-error": "styles__is-error___2Dwem",
  "c-label--block": "styles__c-label--block___2ZV_7"
};
import SelectBox from "cozy-ui/transpiled/react/SelectBox";
import Textarea from "cozy-ui/transpiled/react/Textarea";
/**
 * PropTypes to pass to Input but not to other components, like SelectBox
 * for example
 */

var inputSpecificPropTypes = {
  autoCapitalize: PropTypes.string,
  autoComplete: PropTypes.string,
  onKeyUp: PropTypes.func
};

var InputPassword = function InputPassword(_ref) {
  var hideLabel = _ref.hideLabel,
      showLabel = _ref.showLabel,
      fullwidth = _ref.fullwidth,
      secondaryComponent = _ref.secondaryComponent,
      inputRef = _ref.inputRef,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var toggleVisibility = function toggleVisibility() {
    setVisible(function (visible) {
      return !visible;
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles['o-field-input']
  }, !secondaryComponent && /*#__PURE__*/React.createElement("div", {
    className: cx(labelStyles['c-label'], styles['o-field-input-action'], _defineProperty({}, styles['o-side-fullwidth'], fullwidth)),
    onClick: toggleVisibility
  }, visible ? hideLabel : showLabel), secondaryComponent && /*#__PURE__*/React.createElement("div", {
    className: cx(styles['o-field-input-action'], _defineProperty({}, styles['o-side-fullwidth'], fullwidth)),
    onClick: toggleVisibility
  }, secondaryComponent({
    visible: visible
  })), /*#__PURE__*/React.createElement(Input, _extends({}, restProps, {
    ref: inputRef,
    fullwidth: fullwidth,
    type: visible ? 'text' : 'password'
  })));
};

InputPassword.propTypes = _objectSpread(_objectSpread({}, Input.propTypes), {}, {
  hideLabel: PropTypes.string,
  showLabel: PropTypes.string
});
InputPassword.defaultProps = _objectSpread({}, Input.defaultProps);

var FieldContainer = function FieldContainer(props) {
  var className = props.className,
      variant = props.variant,
      rest = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles['o-field'], _defineProperty({}, styles['o-field--inline'], variant === 'inline'), className)
  }, rest));
};

var Field = function Field(props) {
  var autoCapitalize = props.autoCapitalize,
      autoComplete = props.autoComplete,
      className = props.className,
      disabled = props.disabled,
      fieldProps = props.fieldProps,
      labelProps = props.labelProps,
      fullwidth = props.fullwidth,
      label = props.label,
      id = props.id,
      inputRef = props.inputRef,
      name = props.name,
      type = props.type,
      value = props.value,
      placeholder = props.placeholder,
      error = props.error,
      onChange = props.onChange,
      onKeyUp = props.onKeyUp,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      readOnly = props.readOnly,
      secondaryLabels = props.secondaryLabels,
      secondaryComponent = props.secondaryComponent,
      side = props.side,
      size = props.size,
      variant = props.variant;

  var controlledProps = _objectSpread(_objectSpread({}, value !== undefined ? {
    value: value
  } : {}), onChange ? {
    onChange: onChange
  } : {});

  var inputType = function inputType(type) {
    switch (type) {
      case 'select':
        return /*#__PURE__*/React.createElement(SelectBox, _extends({}, omit.apply(void 0, [props].concat(_toConsumableArray(Object.keys(inputSpecificPropTypes)))), {
          // If value prop is falsy, the SelectBox never displays any selected
          // option. Only passing `undefined` make the SelectBox work
          // properly.
          value: props.value || undefined
        }));

      case 'textarea':
        return /*#__PURE__*/React.createElement(Textarea, _extends({
          autoCapitalize: autoCapitalize,
          disabled: disabled,
          id: id,
          name: name,
          placeholder: placeholder,
          error: error,
          onKeyUp: onKeyUp,
          onFocus: onFocus,
          onBlur: onBlur,
          readOnly: readOnly
        }, controlledProps));

      case 'password':
        return /*#__PURE__*/React.createElement(InputPassword, _extends({
          autoCapitalize: autoCapitalize,
          autoComplete: autoComplete,
          disabled: disabled,
          fullwidth: fullwidth,
          id: id,
          inputRef: inputRef,
          name: name,
          type: type,
          placeholder: placeholder,
          error: error
        }, controlledProps, {
          onKeyUp: onKeyUp,
          onFocus: onFocus,
          onBlur: onBlur,
          readOnly: readOnly,
          size: size
        }, fieldProps, secondaryLabels, {
          secondaryComponent: secondaryComponent
        }));

      case 'contact':
        return /*#__PURE__*/React.createElement(ContactPicker, {
          placeholder: placeholder,
          onChange: onChange,
          selectedContact: value
        });

      case 'date':
      case 'email':
      case 'url':
      case 'text':
      case 'number':
        return /*#__PURE__*/React.createElement(Input, _extends({
          autoCapitalize: autoCapitalize,
          autoComplete: autoComplete,
          disabled: disabled,
          fullwidth: fullwidth,
          id: id,
          ref: inputRef,
          name: name,
          type: type,
          placeholder: placeholder,
          error: error
        }, controlledProps, {
          onKeyUp: onKeyUp,
          onFocus: onFocus,
          onBlur: onBlur,
          readOnly: readOnly,
          size: size
        }, fieldProps));

      default:
        throw new Error("".concat(type, " is not a valid type. Type must be ").concat(allowedTypes.join(', ')));
    }
  };

  return /*#__PURE__*/React.createElement(FieldContainer, {
    className: className,
    variant: variant
  }, /*#__PURE__*/React.createElement(Label, _extends({
    htmlFor: id
  }, labelProps), label), side && /*#__PURE__*/React.createElement("div", {
    className: cx(styles['o-side'], labelStyles['c-label'], _defineProperty({}, styles['o-side-fullwidth'], fullwidth))
  }, side), inputType(type));
};

var allowedTypes = ['date', 'email', 'password', 'select', 'textarea', 'text', 'url', 'number', 'contact'];
Field.propTypes = _objectSpread(_objectSpread({}, inputSpecificPropTypes), {}, {
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  fieldProps: PropTypes.object,
  fullwidth: PropTypes.bool,
  label: PropTypes.node.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(allowedTypes),
  // value should be an object for type=select and string for others
  value: function value(props, propName, componentName) {
    // not a required props
    if (typeof props[propName] === 'undefined') return;

    if (props.type === 'select' && typeof props[propName] !== 'object') {
      return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Expected an object for a Field value with type=select.');
    } else if (props.type !== 'select' && typeof props[propName] !== 'string') {
      return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Expected value to be a string.');
    }
  },
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  side: PropTypes.node,
  size: PropTypes.oneOf(['tiny', 'medium', 'large']),
  secondaryLabels: PropTypes.object,
  secondaryComponent: PropTypes.func
});
Field.defaultProps = {
  fieldProps: {},
  labelProps: {},
  fullwidth: false,
  label: '',
  id: '',
  type: 'text',
  value: undefined,
  placeholder: '',
  error: false,
  size: 'large',
  secondaryLabels: {}
};
export default Field;
export { FieldContainer };