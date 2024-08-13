import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["value", "color", "backgroundColor", "size", "thickness"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from "cozy-ui/transpiled/react/Box";
import CircularChartProgress from "cozy-ui/transpiled/react/CircularChart/CircularChartProgress";
var CircularProgressWithBackground = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var value = _ref.value,
      color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      thickness = _ref.thickness,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    position: "relative",
    display: "inline-flex"
  }, props), /*#__PURE__*/React.createElement(CircularChartProgress, {
    size: size,
    color: backgroundColor,
    thickness: thickness,
    position: "absolute",
    value: 100
  }), /*#__PURE__*/React.createElement(CircularChartProgress, {
    value: value,
    color: color,
    size: size,
    thickness: thickness
  }));
});
CircularProgressWithBackground.displayName = 'CircularProgressWithBackground';
CircularProgressWithBackground.defaultProps = {
  backgroundColor: 'var(--actionColorGhost)'
};
CircularProgressWithBackground.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
  thickness: PropTypes.number
};
export default CircularProgressWithBackground;