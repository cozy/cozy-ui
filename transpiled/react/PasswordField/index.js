import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import TextField from "cozy-ui/transpiled/react/TextField";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import InputAdornment from "cozy-ui/transpiled/react/InputAdornment";
import EyeIcon from "cozy-ui/transpiled/react/Icons/Eye";
import EyeClosedIcon from "cozy-ui/transpiled/react/Icons/EyeClosed";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
var en = {
  "password-field": {
    show: "Show password",
    hide: "Hide password"
  }
};
var fr = {
  "password-field": {
    show: "Afficher le mot de passe",
    hide: "Masquer le mot de passe"
  }
};
export var locales = {
  en: en,
  fr: fr
};
/**
 * Password field with the option of hiding or displaying it
 */

var PasswordField = function PasswordField(props) {
  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  return /*#__PURE__*/React.createElement(TextField, _extends({
    variant: "outlined",
    type: hidden ? 'password' : 'text'
  }, props, {
    InputProps: _objectSpread({
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(IconButton, {
        label: hidden ? t('password-field.show') : t('password-field.hide'),
        disabled: props.disabled,
        onClick: function onClick() {
          return setHidden(!hidden);
        },
        edge: "end"
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: hidden ? EyeIcon : EyeClosedIcon
      })))
    }, props.InputProps)
  }));
};

export default withOnlyLocales(locales)(PasswordField);