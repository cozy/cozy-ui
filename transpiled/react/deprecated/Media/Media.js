import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "align"],
    _excluded2 = ["children", "className", "style"],
    _excluded3 = ["children", "className", "style"];
import React from 'react';
import PropTypes from 'prop-types';
var styles = {
  "media": "styles__media___1rIBu",
  "media--top": "styles__media--top___1t0j5",
  "media--bottom": "styles__media--bottom___XsQQe",
  "bd": "styles__bd___3SAX2",
  "img": "styles__img___3sztD"
};
import cx from 'classnames';
/**
 * Useful to align image/icon and content.
 */

export var Media = function Media(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.media, _defineProperty({}, styles['media--' + align], align && align !== 'middle'), className)
  }, rest), children);
};
Media.propTypes = {
  align: PropTypes.oneOf(['top', 'middle', 'bottom'])
};
export var Img = function Img(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      style = _ref2.style,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.img, className),
    style: style
  }, rest), children);
};
export var Bd = function Bd(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      style = _ref3.style,
      rest = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.bd, className),
    style: style
  }, rest), children);
};