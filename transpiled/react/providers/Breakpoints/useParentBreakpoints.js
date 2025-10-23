import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';
import breakpointDefs, { getBreakpointsStatus, isInsideIframe } from "cozy-ui/transpiled/react/helpers/breakpoints";
export var useParentBreakpoints = function useParentBreakpoints(_ref) {
  var parentBasedIframe = _ref.parentBasedIframe;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      parentBreakpoints = _useState2[0],
      setParentBreakpoints = _useState2[1];

  var isIframe = parentBasedIframe && isInsideIframe(); // iframe receives breakpoints from parent window

  useEffect(function () {
    var handleMessage = function handleMessage(ev) {
      var _ev$data$includes, _ev$data;

      if (!isIframe) return;

      if (typeof ev.data === 'string' && (_ev$data$includes = (_ev$data = ev.data).includes) !== null && _ev$data$includes !== void 0 && _ev$data$includes.call(_ev$data, 'UI-breakpoints-value:')) {
        var parentInnerWidth = ev.data.split(':')[1];
        setParentBreakpoints(getBreakpointsStatus(breakpointDefs, parentInnerWidth));
      }
    };

    window.addEventListener('message', handleMessage);
    return function () {
      return window.removeEventListener('message', handleMessage);
    };
  }, [isIframe]);
  return {
    parentBreakpoints: parentBreakpoints
  };
};