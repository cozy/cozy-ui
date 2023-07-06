import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Deal with app category options.
 *
 * Category options have the following attributes
 *
 * - value: Slug of the category
 * - label: Translated name of the category
 * - secondary: Whether to be displayed as a smaller category
 *   in the sidebar
 */
import { APP_TYPE } from "cozy-ui/transpiled/react/AppSections/constants";
/**
 * Like groupBy except that grouper must return an array values.
 * Thus, an object can be in several groups.
 * If the grouper returns a falsy value, an empty list is assumed.
 */

var multiGroupBy = function multiGroupBy(iter, grouper) {
  var groups = {};

  var _iterator = _createForOfIteratorHelper(iter),
      _step;

  try {
    var _loop = function _loop() {
      var obj = _step.value;
      var values = grouper(obj) || [];
      values.forEach(function (v) {
        // eslint-disable-next-line no-prototype-builtins
        if (!groups.hasOwnProperty(v)) groups[v] = [];
        groups[v].push(obj);
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return groups;
};

var getAppCategory = function getAppCategory(app) {
  return app.categories;
};

export var groupApps = function groupApps(apps) {
  return multiGroupBy(apps, getAppCategory);
};
/**
 * Function to sort category options
 *
 * Alphabetical sort on label except for
 *   - 'all' value always at the beginning
 *   - 'others' value always at the end
 *
 * @param  {CategoryOption} categoryA
 * @param  {CategoryOption} categoryB
 * @return {Number}
 */

export var sorter = function sorter(categoryA, categoryB) {
  return categoryA.value === 'all' && -1 || categoryB.value === 'all' && 1 || categoryA.value === 'others' && 1 || categoryB.value === 'others' && -1 || categoryA.value === 'cozy' && -1 || categoryB.value === 'cozy' && 1 || categoryA.label.localeCompare(categoryB.label);
};
export var addLabel = function addLabel(cat, t) {
  return _objectSpread(_objectSpread({}, cat), {}, {
    label: t("app_categories.".concat(cat.value))
  });
};
/**
 * Returns category options from a list of apps
 * @param  {Array<App>}  apps
 * @param  {Object}  options
 * @param  {Boolean} options.includeAll - Whether to add an "All" option
 * @param  {Boolean} options.addLabel - Function to add a label to generated categories.
 *                                      If passed, generated categories will be sorted.
 * @return {Array<CategoryOption>}
 */

export var generateOptionsFromApps = function generateOptionsFromApps(apps) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var includeAll = options.includeAll || false;

  var addLabel = function addLabel(x) {
    return options.addLabel ? options.addLabel(x) : x;
  };

  if (!apps || !apps.length) return [];
  var allCategoryOptions = includeAll ? [{
    value: 'all',
    secondary: false
  }] : [];

  var _loop2 = function _loop2() {
    var type = _arr[_i];
    var catApps = groupApps(apps.filter(function (a) {
      return a.type === type;
    })); // Add an entry to filter by all konnectors

    if (type === APP_TYPE.KONNECTOR) {
      allCategoryOptions.push(addLabel({
        value: 'konnectors',
        secondary: false
      }));
    }

    var categoryOptions = Object.keys(catApps).map(function (cat) {
      return addLabel({
        value: cat,
        type: type,
        secondary: type === APP_TYPE.KONNECTOR
      });
    }); // Since options have been labelled, it's possible to sort them

    if (options.addLabel) {
      categoryOptions.sort(sorter);
    }

    allCategoryOptions = allCategoryOptions.concat(categoryOptions);
  };

  for (var _i = 0, _arr = [APP_TYPE.WEBAPP, APP_TYPE.KONNECTOR]; _i < _arr.length; _i++) {
    _loop2();
  }

  return allCategoryOptions;
};