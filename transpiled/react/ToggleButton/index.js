import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "rounded", "color"];
import MuiToggleButton from '@material-ui/lab/ToggleButton';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
var ToggleButton = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      rounded = _ref.rounded,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MuiToggleButton, _extends({
    ref: ref,
    className: cx(className, {
      rounded: rounded
    }, "customColor-".concat(color))
  }, props));
});
ToggleButton.displayName = 'ToggleButton';
ToggleButton.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  color: PropTypes.string
};
export default ToggleButton;