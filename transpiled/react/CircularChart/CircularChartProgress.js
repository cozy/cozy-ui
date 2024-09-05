import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["value", "position", "color", "size", "thickness"];
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import MuiCircularProgress from "cozy-ui/transpiled/react/CircularProgress";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  root: {
    position: function position(_ref) {
      var _position = _ref.position;
      return _position !== null && _position !== void 0 ? _position : undefined;
    }
  },
  svg: {
    transform: 'rotate(-117deg)'
  },
  circle: {
    strokeLinecap: 'round'
  },
  colorPrimary: {
    color: function color(_ref2) {
      var _color = _ref2.color;
      return _color !== null && _color !== void 0 ? _color : undefined;
    }
  }
});

var computeValue = function computeValue(value) {
  return value * 65 / 100;
};

var CircularChartProgress = /*#__PURE__*/forwardRef(function (_ref3, ref) {
  var value = _ref3.value,
      position = _ref3.position,
      color = _ref3.color,
      size = _ref3.size,
      thickness = _ref3.thickness,
      props = _objectWithoutProperties(_ref3, _excluded);

  var styles = useStyles({
    color: color,
    position: position
  });
  var computedValue = computeValue(value);
  return /*#__PURE__*/React.createElement(MuiCircularProgress, _extends({
    ref: ref,
    classes: styles,
    value: computedValue,
    thickness: thickness,
    size: size
  }, props));
});
CircularChartProgress.displayName = 'CircularChartProgress';
CircularChartProgress.defaultProps = {
  value: 0,
  variant: 'determinate',
  size: 150,
  thickness: 2.3
};
CircularChartProgress.propTypes = {
  value: PropTypes.number,
  position: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  thickness: PropTypes.number
};
export default CircularChartProgress;