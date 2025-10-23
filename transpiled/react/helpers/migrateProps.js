import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';

var migrate = function migrate(oldProps, options) {
  var newProps, msg;

  var _iterator = _createForOfIteratorHelper(options),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var option = _step.value;

      if (option.src && option.dest) {
        // simple mode
        var src = option.src;
        var dest = option.dest;
        var oldProp = oldProps[src];

        if (oldProp === undefined) {
          continue;
        }

        newProps = newProps || _objectSpread({}, oldProps); // copy props only if we change them

        newProps[dest] = oldProps[src];
        delete newProps[src];
        msg = "`".concat(src, "` is deprecated and has been migrated automatically, you should use `").concat(dest, "` now");
      } else if (option.fn) {
        // advanced mode
        var res = option.fn(newProps || oldProps);

        if (res.length !== 2) {
          throw new Error('migrateOption `fn` should return [newProps, msg].');
        }

        ;

        var _res = _slicedToArray(res, 2);

        newProps = _res[0];
        msg = _res[1];
      } else {
        console.warn('migrateProps option is not valid, valid properties are `src`, `dest`, `fn`. You passed', option);
      }

      if ((process.env.NODE_ENV != 'production' || window.SHOW_DEPRECATION_WARNINGS) && msg) {
        console.warn("Deprecation: ".concat(msg));
        msg = null;
      }
    } // It is possible that no migration has been made, in this case newProps is undefined and we simply
    // return the oldProps

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return newProps || oldProps;
};
/**
 * HOC to migrate old props for deprecation purpose.
 *
 * @example
 * Let's say we deprecated the property `withCross` of Modal and replaced
 * it with `closable`. To preserve backward compatibility we use the `migrate`
 * HOC, and provide an array of migrations to perform on the old props.
 *
 * ```
 * const migrateOptions = [{ src: 'withCross', dest: 'closable'}]
 * const Modal = migrate(migrateOptions)(_Modal)
 * ```
 *
 * Here we only have one migration, to rename `withCross` (source) to `closable` (destination).
 * For more complex migration, it is possible to use the `fn` property of a migration. In this
 * case you are responsible for providing a warning message as part of the return value of `fn`.
 *
 * ```
 * const migrateClosableAndReverse = oldProps => {
 *   let newProps
 *   if (oldProps.withoutCross) {
 *     newProps = {...oldProps}
 *     newProps.closable = !oldProps.withoutCross
 *     return [newProps, '`withoutCross` is deprecated. Use `closable` now. Be careful closable = !withoutCross']
 *   } else {
 *     return [oldProps, null]
 *   }
 *   return newProps || oldProps
 * }
 *
 * const migrateOptions = [{ fn: migrateClosableAndReverse }]
 * const Modal = migrate(migrateOptions)(_Modal)
 * ```
 *
 * @param  {Array} migrateOptions - Prop migrations that will be done on the old props
 * @return {HOC}
 */


export default (function (migrateOptions) {
  return function (Component) {
    var Wrapped = function Wrapped(oldProps) {
      var newProps = migrate(oldProps, migrateOptions, Component);
      return /*#__PURE__*/React.createElement(Component, newProps);
    };

    Wrapped.displayName = Component.displayName || Component.name;
    return Wrapped;
  };
});