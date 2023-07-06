import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "disableGutters", "disableElevation", "className"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Paper from "cozy-ui/transpiled/react/Paper";
var BottomSheetItem = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      disableGutters = _ref.disableGutters,
      disableElevation = _ref.disableElevation,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Paper, _extends({
    ref: ref,
    elevation: disableElevation ? 0 : 25,
    square: true,
    className: cx({
      'u-p-1': !disableGutters
    }, className)
  }, props), children);
});
BottomSheetItem.displayName = 'BottomSheetItem';
BottomSheetItem.propTypes = {
  /** CSS classes */
  className: PropTypes.string,

  /** Disables default padding */
  disableGutters: PropTypes.bool,

  /** Disables default paper elevation */
  disableElevation: PropTypes.bool
};
export default /*#__PURE__*/React.memo(BottomSheetItem);