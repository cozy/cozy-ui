import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["size", "primaryProps", "secondaryProps", "children"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from "cozy-ui/transpiled/react/Box";
import CircularProgressWithBackground from "cozy-ui/transpiled/react/CircularChart/CircularProgressWithBackground";
import { makeSizeAndThickness } from "cozy-ui/transpiled/react/CircularChart/helpers";
var CircularChart = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var size = _ref.size,
      primaryProps = _ref.primaryProps,
      secondaryProps = _ref.secondaryProps,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _makeSizeAndThickness = makeSizeAndThickness(size, Boolean(secondaryProps)),
      primarySizeAndThickness = _makeSizeAndThickness.primarySizeAndThickness,
      secondarySizeAndThickness = _makeSizeAndThickness.secondarySizeAndThickness;

  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  }, props), Boolean(primaryProps) && /*#__PURE__*/React.createElement(CircularProgressWithBackground, _extends({}, primarySizeAndThickness, primaryProps)), Boolean(secondaryProps) && /*#__PURE__*/React.createElement(CircularProgressWithBackground, _extends({}, secondarySizeAndThickness, secondaryProps, {
    position: "absolute"
  })), /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "1rem"
  }, children));
});
CircularChart.displayName = 'CircularChart';
CircularChart.defaultProps = {
  size: 'large'
};
CircularChart.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  primaryProps: PropTypes.shape({
    value: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.number,
    thickness: PropTypes.number
  }),
  secondaryProps: PropTypes.shape({
    value: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.number,
    thickness: PropTypes.number
  }),
  children: PropTypes.node
};
export default CircularChart;