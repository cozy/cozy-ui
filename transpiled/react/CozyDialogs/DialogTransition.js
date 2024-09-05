import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["fullScreen", "isFullscreen"];
import MuiGrow from '@material-ui/core/Grow';
import MuiSlide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
var DialogTransition = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var fullScreen = _ref.fullScreen,
      isFullscreen = _ref.isFullscreen,
      props = _objectWithoutProperties(_ref, _excluded);

  return fullScreen || isFullscreen ? /*#__PURE__*/React.createElement(MuiSlide, _extends({
    ref: ref,
    direction: "up"
  }, props)) : /*#__PURE__*/React.createElement(MuiGrow, _extends({
    ref: ref
  }, props));
});
DialogTransition.propTypes = {
  /** Use the Slide transition is true, otherwise Grow */
  fullScreen: PropTypes.bool
};
export default DialogTransition;