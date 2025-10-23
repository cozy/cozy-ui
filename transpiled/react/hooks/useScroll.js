import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import debounce from 'lodash/debounce';
import { useState } from 'react';
import useEventListener from "cozy-ui/transpiled/react/hooks/useEventListener";
import { unRef } from "cozy-ui/transpiled/react/helpers/ref";
/**
 * Get scrollTop & scrollLeft from scroll event
 * @param {HTMLElement|React.RefObject} element - Element or Ref to listen scroll event
 * @param {Object} options
 * @param {number} options.delay - Delay in ms before calling the callback
 * @returns {{ scrollTop: number, scrollLeft: number}} - Scroll state
 */

var useScroll = function useScroll(element) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 250 : _ref$delay;

  var _useState = useState({
    scrollTop: 0,
    scrollLeft: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var handleScroll = debounce(function () {
    var mainElement = unRef(element);

    if (mainElement === window) {
      setScroll({
        scrollTop: window.scrollY,
        scrollLeft: window.scrollX
      });
    } else {
      setScroll({
        scrollTop: mainElement.scrollTop,
        scrollLeft: mainElement.scrollLeft
      });
    }
  }, delay); // For Desktop

  useEventListener(element, 'scroll', handleScroll); // For Mobile

  useEventListener(element, 'touchmove', handleScroll);
  return scroll;
};

export default useScroll;