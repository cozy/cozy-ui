import throttle from 'lodash/throttle';
import { useEffect } from 'react';
/**
 * To send window innerWidth to first iframe
 * @returns
 */

var sendWidthToIframe = function sendWidthToIframe() {
  return window.frames[1].postMessage("UI-breakpoints-value:".concat(window.innerWidth), '*');
};

export var useIframeToSendWidth = function useIframeToSendWidth(_ref) {
  var hasIframe = _ref.hasIframe;
  // parent window send its innerWidth
  useEffect(function () {
    if (hasIframe) {
      sendWidthToIframe();
    }
  }, [hasIframe]); // parent window send its innerWidth on resize

  useEffect(function () {
    var handleResize = throttle(function () {
      if (hasIframe) {
        sendWidthToIframe();
      }
    }, 100);
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [hasIframe]);
};