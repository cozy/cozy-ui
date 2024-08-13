import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef } from 'react';
import { I18n, useI18n } from "cozy-ui/transpiled/react/providers/I18n";
/**
 *
 * @param  {Function|Object} localesOrRequire - Either a function returning the locale,
 *                                              or an object containing all the locales
 * @return {Component}
 */

var withOnlyLocales = function withOnlyLocales(localesOrRequire) {
  return function (Component) {
    var requireLocale = typeof localesOrRequire === 'function' ? localesOrRequire : function (localeCode) {
      return localesOrRequire[localeCode];
    };
    var Wrapped = /*#__PURE__*/forwardRef(function (props, ref) {
      var _useI18n = useI18n(),
          lang = _useI18n.lang;

      return /*#__PURE__*/React.createElement(I18n, {
        dictRequire: requireLocale,
        lang: lang
      }, /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        ref: ref
      })));
    });
    Wrapped.propTypes = _objectSpread({}, Component.propTypes || {});
    Wrapped.displayName = "withOnlyLocales(".concat(Component.displayName || Component.name, ")");
    return Wrapped;
  };
};

export default withOnlyLocales;