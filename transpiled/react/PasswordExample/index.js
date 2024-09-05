import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["token", "className", "color"],
    _excluded2 = ["password", "color"];
import cx from 'classnames';
import React from 'react';
var styles = {
  "Token--number": "styles__Token--number___2EzoN",
  "Token--special": "styles__Token--special___3_rSu"
};
import InlineCard from "cozy-ui/transpiled/react/deprecated/InlineCard";
var alphaRegexp = /^[a-z]$/i;
var numberRegexp = /^[0-9]$/;

var isAlphaCharacter = function isAlphaCharacter(char) {
  return alphaRegexp.test(char);
};

var isNumberCharacter = function isNumberCharacter(char) {
  return numberRegexp.test(char);
};

var tokenTypes = {
  alpha: 'alpha',
  number: 'number',
  special: 'special'
};

var getTokenType = function getTokenType(char) {
  if (isAlphaCharacter(char)) {
    return tokenTypes.alpha;
  }

  if (isNumberCharacter(char)) {
    return tokenTypes.number;
  }

  return tokenTypes.special;
};

var tokenize = function tokenize(passphrase) {
  var tokens = passphrase.split('').map(function (char) {
    return {
      char: char,
      type: getTokenType(char)
    };
  });
  return tokens;
};

var Token = function Token(props) {
  var _cx;

  var token = props.token,
      className = props.className,
      color = props.color,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx((_cx = {}, _defineProperty(_cx, styles['Token--number'], color !== false && token.type === tokenTypes.number), _defineProperty(_cx, styles['Token--special'], color !== false && token.type === tokenTypes.special), _cx), className)
  }, rest), token.char);
};

var PasswordExample = function PasswordExample(props) {
  var password = props.password,
      color = props.color,
      rest = _objectWithoutProperties(props, _excluded2);

  var tokens = tokenize(password);
  return /*#__PURE__*/React.createElement(InlineCard, rest, tokens.map(function (token, index) {
    return /*#__PURE__*/React.createElement(Token, {
      key: "".concat(token.char, "-").concat(token.type, "-").concat(index),
      token: token,
      color: color
    });
  }));
};

PasswordExample.defaultProps = {
  color: true
};
export default PasswordExample;