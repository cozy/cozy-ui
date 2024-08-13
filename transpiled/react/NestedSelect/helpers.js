/**
 * @param {import('../types').NestedSelectOption} options
 * @param {boolean} canSelectParent
 * @returns {import('../types').NestedSelectOption[]}
 */
export var makeHistory = function makeHistory(options, canSelectParent) {
  var _options$focusedId;

  if (!options) return [];
  var focusedId = (_options$focusedId = options.focusedId) !== null && _options$focusedId !== void 0 ? _options$focusedId : null;
  if (!focusedId) return [options];
  var result = [];

  var findElement = function findElement(opts) {
    var _opts$children;

    var itemFound = (_opts$children = opts.children) === null || _opts$children === void 0 ? void 0 : _opts$children.some(function (child) {
      return child.id === focusedId || findElement(child);
    });

    if (itemFound) {
      if (canSelectParent) {
        var item = opts.children.find(function (child) {
          return child.id === focusedId;
        });
        if (item !== null && item !== void 0 && item.children) result.push(item);
      }

      result.push(opts);
      return true;
    }

    return false;
  };

  findElement(options);

  if (result.length === 0) {
    console.log('No item found with id', focusedId);
    result.push(options);
  }

  return result;
};