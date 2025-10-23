import { colorMapping } from "cozy-ui/transpiled/react/Avatar/helpers";

var makeKey = function makeKey(colors, name) {
  return Array.from(name.toUpperCase()).map(function (letter) {
    return letter.charCodeAt(0);
  }).reduce(function (sum, number) {
    return sum + number;
  }, 0) % colors.length;
};

var colors = Object.values(colorMapping).filter(Boolean);
/**
 * @param {string} name
 * @returns {string}
 */

export var nameToColor = function nameToColor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var key = makeKey(colors, name);
  return colors[key];
};