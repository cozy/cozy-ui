import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useIframeConnection } from "cozy-ui/transpiled/react/providers/Breakpoints/useIframeConnection";
import { useIframeToSendWidth } from "cozy-ui/transpiled/react/providers/Breakpoints/useIframeToSendWidth";
import { useParentBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints/useParentBreakpoints";
import breakpointDefs, { getBreakpointsStatus } from "cozy-ui/transpiled/react/helpers/breakpoints";
var BreakpointsCtx = /*#__PURE__*/createContext(null);
export var BreakpointsProvider = function BreakpointsProvider(_ref) {
  var parentBasedIframe = _ref.parentBasedIframe,
      children = _ref.children;

  var _useState = useState(getBreakpointsStatus(breakpointDefs)),
      _useState2 = _slicedToArray(_useState, 2),
      breakpoints = _useState2[0],
      setBreakpoints = _useState2[1];

  var _useIframeConnection = useIframeConnection({
    parentBasedIframe: parentBasedIframe
  }),
      hasIframe = _useIframeConnection.hasIframe;

  useIframeToSendWidth({
    hasIframe: hasIframe
  });

  var _useParentBreakpoints = useParentBreakpoints({
    parentBasedIframe: parentBasedIframe
  }),
      parentBreakpoints = _useParentBreakpoints.parentBreakpoints;

  useEffect(function () {
    var handleResize = throttle(function () {
      setBreakpoints(getBreakpointsStatus(breakpointDefs));
    }, 100);
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return /*#__PURE__*/React.createElement(BreakpointsCtx.Provider, {
    value: parentBreakpoints || breakpoints
  }, children);
};
BreakpointsProvider.defaultProps = {
  parentBasedIframe: false
};
BreakpointsProvider.propTypes = {
  /** Iframes breakpoints are based on parent window inner width instead of iframe inner width  */
  parentBasedIframe: PropTypes.bool
};
export var useBreakpoints = function useBreakpoints() {
  var v = useContext(BreakpointsCtx);

  if (v === null) {
    throw new Error('Cannot use useBreakpoints without BreakpointsProvider. The component must have a BreakpointsProvider above it.');
  }

  return v;
};
export default useBreakpoints;