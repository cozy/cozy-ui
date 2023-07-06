import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useState } from 'react';
import throttle from 'lodash/throttle';
import breakpointDefs, { getBreakpointsStatus } from "cozy-ui/transpiled/react/helpers/breakpoints";
import useEventListener from "cozy-ui/transpiled/react/hooks/useEventListener";
import { computeMaxAction } from "cozy-ui/transpiled/react/SelectionBar/helpers";
var huge = 1400;
var large = 1200;

var breakpoints = _objectSpread({
  isHuge: [large + 1, huge]
}, breakpointDefs);

var getCurrentMaxAction = function getCurrentMaxAction(maxAction) {
  return computeMaxAction(maxAction, getBreakpointsStatus(breakpoints));
};
/**
 * Compute the maximum number of actions to display according to the breakpoint
 * @param {number|object} maxAction an number or a set of maximum for each breakpoint
 * @returns the maximum number or undefined if there is no matching result
 */


var useMaxActions = function useMaxActions(maxAction) {
  var _useState = useState(getCurrentMaxAction(maxAction)),
      _useState2 = _slicedToArray(_useState, 2),
      currentMax = _useState2[0],
      setCurrentMax = _useState2[1];

  var handleResize = throttle(function () {
    setCurrentMax(getCurrentMaxAction(maxAction));
  }, 100);
  useEventListener(window, 'resize', handleResize);
  return currentMax;
};

export default useMaxActions;