import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useEffect, useState } from 'react';
import { isInsideIframe } from "cozy-ui/transpiled/react/helpers/breakpoints";
export var useIframeConnection = function useIframeConnection(_ref) {
  var parentBasedIframe = _ref.parentBasedIframe;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasIframe = _useState2[0],
      setHasIframe = _useState2[1];

  var isIframe = parentBasedIframe && isInsideIframe(); // parent window receives from iframe to give breakpoints

  useEffect(function () {
    var handleMessage = function handleMessage(ev) {
      if (ev.data === 'UI-breakpoints-needParentBreakpoints') {
        setHasIframe(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return function () {
      return window.removeEventListener('message', handleMessage);
    };
  }, []); // iframe send to parent window ask for its breakpoints

  useEffect(function () {
    if (isIframe) {
      window.parent.postMessage('UI-breakpoints-needParentBreakpoints', '*');
    }
  }, [isIframe]);
  return {
    hasIframe: hasIframe
  };
};