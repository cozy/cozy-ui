import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import mapValues from 'lodash/mapValues';
var large = 1200;
var medium = 1023;
var small = 768;
var tiny = 543;
var breakpoints = {
  isExtraLarge: [large + 1],
  isLarge: [medium + 1, large],
  isMedium: [small + 1, medium],
  isSmall: [tiny + 1, small],
  isTiny: [0, tiny],
  isDesktop: [medium + 1],
  isTablet: [small + 1, medium],
  isMobile: [0, small]
};
export var getBreakpointsStatus = function getBreakpointsStatus(breakpoints) {
  var width = window.innerWidth;
  return mapValues(breakpoints, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        min = _ref2[0],
        max = _ref2[1];

    return width >= min && (max === undefined || width <= max);
  });
};
export default breakpoints;