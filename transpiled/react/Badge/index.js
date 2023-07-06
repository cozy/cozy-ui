import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["classes", "size", "withBorder", "overlap"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import MuiBadge from '@material-ui/core/Badge';

var Badge = function Badge(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      size = _ref.size,
      withBorder = _ref.withBorder,
      overlapProp = _ref.overlap,
      props = _objectWithoutProperties(_ref, _excluded);

  var sizeClasses = {
    small: 'badgeSizeSmall',
    medium: 'badgeSizeMedium',
    large: 'badgeSizeLarge'
  }; // due to deprecated prop circle and rectangle
  // https://github.com/mui/material-ui/releases/tag/v4.12.4

  var overlap = overlapProp === 'circle' ? 'circular' : overlapProp === 'rectangle' ? 'rectangular' : overlapProp;
  return /*#__PURE__*/React.createElement(MuiBadge, _extends({
    classes: _objectSpread({
      badge: cx(sizeClasses[size], withBorder ? 'badgeBorder' : null)
    }, classes),
    overlap: overlap
  }, props));
};

Badge.propTypes = {
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'right']),
    vertical: PropTypes.oneOf(['bottom', 'top'])
  }),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showZero: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'dot']),
  withBorder: PropTypes.bool
};
Badge.defaultProps = {
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'top'
  },
  size: 'medium',
  showZero: true,
  withBorder: true,
  overlap: 'circular'
};
export default Badge;