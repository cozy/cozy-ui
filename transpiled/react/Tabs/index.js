import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "variant", "narrowed", "segmented", "children"];
import MuiTabs from '@material-ui/core/Tabs';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
var Tabs = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      variant = _ref.variant,
      narrowed = _ref.narrowed,
      segmented = _ref.segmented,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  return /*#__PURE__*/React.createElement(MuiTabs, _extends({
    ref: ref,
    className: cx(className, {
      segmented: segmented
    }),
    variant: isMobile && variant === 'standard' ? 'fullWidth' : variant
  }, props), React.Children.map(children, function (child) {
    if (child) {
      return /*#__PURE__*/React.cloneElement(child, {
        className: cx(child.props.className, {
          narrowed: narrowed,
          segmented: segmented
        })
      });
    }
  }));
});
Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  variant: 'standard',
  narrowed: false,
  segmented: false
};
Tabs.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'fullWidth', 'scrollable']),
  narrowed: PropTypes.bool,
  segmented: PropTypes.bool
};
export default Tabs;