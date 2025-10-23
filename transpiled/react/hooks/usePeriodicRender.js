import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useEffect, useState } from 'react';
/**
 * Force a new render each `duration` ms
 *
 * @param {number} duration - in millisecond
 * @returns {Date} last trigger date for a rerender
 */

export default function usePeriodicRender(duration) {
  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      lastExecuted = _useState2[0],
      setLastExecuted = _useState2[1];

  useEffect(function () {
    if (duration) {
      var interval = window.setInterval(function () {
        setLastExecuted(new Date());
      }, duration);
      return function () {
        window.clearInterval(interval);
      };
    }
  }, [duration]);
  return lastExecuted;
}