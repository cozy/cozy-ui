import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Spinner from "cozy-ui/transpiled/react/Spinner";
import withBreakpoints from "cozy-ui/transpiled/react/helpers/withBreakpoints";

var ViewerSpinner = function ViewerSpinner(_ref) {
  var isDesktop = _ref.breakpoints.isDesktop;
  return /*#__PURE__*/React.createElement(Spinner, _extends({
    size: "xxlarge",
    middle: true,
    noMargin: true
  }, isDesktop && {
    color: 'white'
  }));
};

export default withBreakpoints()(ViewerSpinner);