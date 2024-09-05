import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["hidden", "className"],
    _excluded2 = ["password", "className"],
    _excluded3 = ["className", "showStrength", "error"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getStrength } from "cozy-ui/transpiled/react/Labs/PasswordInput/helpers";
var styles = {
  "PasswordInput": "styles__PasswordInput___3Oa3V",
  "PasswordInput--withStrength": "styles__PasswordInput--withStrength___1Msxm",
  "PasswordInput__strength": "styles__PasswordInput__strength___1hpSg",
  "PasswordInput__strength--weak": "styles__PasswordInput__strength--weak___dzrGl",
  "PasswordInput__strength--moderate": "styles__PasswordInput__strength--moderate___1ME_z",
  "PasswordInput__strength--strong": "styles__PasswordInput__strength--strong___3yuP0",
  "PasswordInput__visibilityButton": "styles__PasswordInput__visibilityButton___2B6RJ"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import EyeIcon from "cozy-ui/transpiled/react/Icons/Eye";
import EyeClosedIcon from "cozy-ui/transpiled/react/Icons/EyeClosed";
import Input from "cozy-ui/transpiled/react/Input";
import InputGroup from "cozy-ui/transpiled/react/InputGroup";

var HideShowButton = function HideShowButton(props) {
  var hidden = props.hidden,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cx(styles['PasswordInput__visibilityButton'], className)
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    icon: hidden ? EyeIcon : EyeClosedIcon,
    size: 16,
    color: "var(--coolGrey)"
  }));
};

var Strength = function Strength(props) {
  var password = props.password,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded2);

  var strength = getStrength(password);
  return /*#__PURE__*/React.createElement("progress", _extends({
    step: "1",
    min: "0",
    max: "100",
    value: strength.percentage,
    className: cx(styles['PasswordInput__strength'], styles["PasswordInput__strength--".concat(strength.label)], className)
  }, rest));
};

var PasswordInput = function PasswordInput(props) {
  var className = props.className,
      showStrength = props.showStrength,
      error = props.error,
      rest = _objectWithoutProperties(props, _excluded3);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles.PasswordInput, className)
  }, /*#__PURE__*/React.createElement(InputGroup, {
    append: /*#__PURE__*/React.createElement(HideShowButton, {
      hidden: hidden,
      onClick: function onClick() {
        return setHidden(!hidden);
      }
    }),
    className: cx(showStrength && styles['PasswordInput--withStrength']),
    error: error
  }, /*#__PURE__*/React.createElement(Input, _extends({}, rest, {
    type: hidden ? 'password' : 'text'
  }))), showStrength ? /*#__PURE__*/React.createElement(Strength, {
    password: props.value
  }) : null);
};

PasswordInput.propTypes = {
  showStrength: PropTypes.bool,
  error: PropTypes.bool
};
PasswordInput.defaultProps = {
  showStrength: false,
  error: false
};
export default PasswordInput;