import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["options"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/locales";
import MenuItem from "cozy-ui/transpiled/react/MenuItem";
import TextField from "cozy-ui/transpiled/react/TextField";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { FieldInputWrapperPropTypes } from "cozy-ui/transpiled/react/Contacts/AddModal/types";

var TextFieldSelect = function TextFieldSelect(_ref) {
  var options = _ref.options,
      props = _objectWithoutProperties(_ref, _excluded);

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _options = _toConsumableArray(options.map(function (option) {
    return _objectSpread(_objectSpread({}, option), {}, {
      label: option.translated ? option.label : t(option.label)
    });
  }));

  return /*#__PURE__*/React.createElement(TextField, props, _options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: "".concat(props.name, "-").concat(index),
      value: option.value,
      onClick: option.onClick
    }, option.label);
  }));
};

TextFieldSelect.prototype = FieldInputWrapperPropTypes;
export default TextFieldSelect;