/**
 * Add or Remove a value inside an array
 * @param {array} arr
 * @param {string} value
 * @returns
 */
export var toggleInArray = function toggleInArray(arr, value) {
  var s = new Set(arr);

  if (s.has(value)) {
    s.delete(value);
  } else {
    s.add(value);
  }

  return Array.from(s);
};
/**
 * @param {array} options
 * @param {string} value
 * @returns
 */

export var getLabelByValue = function getLabelByValue(options, value) {
  var _options$find;

  return (_options$find = options.find(function (option) {
    return option.value === value;
  })) === null || _options$find === void 0 ? void 0 : _options$find.label;
};