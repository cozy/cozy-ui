import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-circle": "styles__c-circle___1DuMR",
  "c-circle-text": "styles__c-circle-text___1jFgD"
};
var sizeNameToPx = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
};
export var createSizeStyle = function createSizeStyle(size) {
  var sizeConverter = sizeNameToPx;
  var sizeToPixel = Number.isInteger(size) ? size : sizeConverter[size];
  return {
    '--circleSize': "".concat(sizeToPixel, "px")
  };
};

var Circle = function Circle(_ref) {
  var children = _ref.children,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      className = _ref.className;
  var sizeStyle = createSizeStyle(size);
  var bgColorStyle = {
    backgroundColor: backgroundColor
  };
  var circleStyle = Object.assign(bgColorStyle, sizeStyle);
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['c-circle'], className),
    style: circleStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: styles['c-circle-text']
  }, children));
};

Circle.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.number]),
  className: PropTypes.string
};
Circle.defaultProps = {
  size: 'medium',
  className: ''
};
export default Circle;