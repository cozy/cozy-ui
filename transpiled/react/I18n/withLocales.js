import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { I18n, translate } from "cozy-ui/transpiled/react/I18n";
import omit from 'lodash/omit';
/**
 *
 * @param  {Function|Object} localesOrRequire - Either a function returning the locale for a lang,
 *                                              or an object containing all the locales
 * @return {Component}
 */

var withLocales = function withLocales(localesOrRequire) {
  return function (Component) {
    // The inner components needs to receive t
    var Translated = translate()(Component);
    var requireLocale = typeof localesOrRequire === 'function' ? localesOrRequire : function (localeCode) {
      return localesOrRequire[localeCode];
    };

    var Wrapped = /*#__PURE__*/function (_React$Component) {
      _inherits(Wrapped, _React$Component);

      var _super = _createSuper(Wrapped);

      function Wrapped() {
        _classCallCheck(this, Wrapped);

        return _super.apply(this, arguments);
      }

      _createClass(Wrapped, [{
        key: "render",
        value: function render() {
          var lang = this.props.lang; // Do not pass translate props downwards
          // since the component is already augmented with translate()

          var wrappedProps = omit(this.props, Object.keys(I18n.childContextTypes));
          return /*#__PURE__*/React.createElement(I18n, {
            dictRequire: requireLocale,
            lang: lang
          }, /*#__PURE__*/React.createElement(Translated, wrappedProps));
        }
      }]);

      return Wrapped;
    }(React.Component);

    Wrapped.propTypes = _objectSpread(_objectSpread({}, Component.propTypes || {}), I18n.childContextTypes);
    Wrapped.displayName = "withLocales(".concat(Component.displayName || Component.name, ")"); // The outer component needs to receive lang

    return translate()(Wrapped);
  };
};

export default withLocales;