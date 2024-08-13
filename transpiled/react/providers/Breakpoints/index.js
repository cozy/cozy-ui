import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { createContext, useContext, useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import breakpointDefs, { getBreakpointsStatus as _getBreakpointsStatus } from "cozy-ui/transpiled/react/helpers/breakpoints";

var getBreakpointsStatus = function getBreakpointsStatus() {
  return _getBreakpointsStatus(breakpointDefs);
};

var BreakpointsCtx = /*#__PURE__*/createContext(null);
export var BreakpointsProvider = function BreakpointsProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(getBreakpointsStatus()),
      _useState2 = _slicedToArray(_useState, 2),
      breakpoints = _useState2[0],
      setBreakpoints = _useState2[1];

  useEffect(function () {
    var handleResize = throttle(function () {
      setBreakpoints(getBreakpointsStatus());
    }, 100);
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return /*#__PURE__*/React.createElement(BreakpointsCtx.Provider, {
    value: breakpoints
  }, children);
};
export var useBreakpoints = function useBreakpoints() {
  var v = useContext(BreakpointsCtx);

  if (v === null) {
    throw new Error('Cannot use useBreakpoints without BreakpointsProvider. The component must have a BreakpointsProvider above it.');
  }

  return v;
};
export default useBreakpoints;