/**
 * Return the env(safe-area-inset-[position]) value
 * expl: "0px"
 */
export var getSafeArea = function getSafeArea(position) {
  return getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-".concat(position));
};
/**
 * Return the env(safe-area-inset-[position]) value without unit
 * expl: 0 for "0px"
 */

export var getSafeAreaValue = function getSafeAreaValue(position) {
  return parseInt(getSafeArea(position));
};