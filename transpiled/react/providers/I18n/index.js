/**
 * Provides an I18n helper using a Higher Order Component.
 */
'use strict';

import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import PropTypes from 'prop-types';
import React, { Component, useContext } from 'react';
import { initFormat } from "cozy-ui/transpiled/react/providers/I18n/format";
import { initTranslation } from "cozy-ui/transpiled/react/providers/I18n/translation";
export var DEFAULT_LANG = 'en';
export var I18nContext = /*#__PURE__*/React.createContext();
export var useI18n = function useI18n() {
  var context = useContext(I18nContext);

  if (!context) {
    throw new Error('`I18nContext` is missing. `useI18n()` must be used within a `<I18n>`');
  }

  return context;
}; // Provider root component

export var I18n = /*#__PURE__*/function (_Component) {
  _inherits(I18n, _Component);

  var _super = _createSuper(I18n);

  function I18n(props) {
    var _this;

    _classCallCheck(this, I18n);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
      if (nextProps.lang !== _this.props.lang) {
        _this.init(nextProps);
      }
    });

    _this.init(_this.props);

    return _this;
  }

  _createClass(I18n, [{
    key: "init",
    value: function init(props) {
      var polyglot = props.polyglot,
          lang = props.lang,
          dictRequire = props.dictRequire,
          context = props.context,
          defaultLang = props.defaultLang;
      this.translator = polyglot || initTranslation(lang, dictRequire, context, defaultLang);
      this.format = initFormat(lang, defaultLang);
      this.t = this.translator.t.bind(this.translator);
      this.contextValue = this.getContextValue(props);
    }
  }, {
    key: "getContextValue",
    value: function getContextValue(props) {
      return {
        t: this.t,
        f: this.format,
        polyglot: (props || this.props).polyglot || this.translator,
        lang: (props || this.props).lang
      };
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return this.contextValue;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(I18nContext.Provider, {
        value: this.contextValue
      }, this.props.children);
    }
  }]);

  return I18n;
}(Component);
I18n.propTypes = {
  lang: PropTypes.string.isRequired,
  // current language.
  polyglot: PropTypes.object,
  // A polyglot instance.
  dictRequire: PropTypes.func,
  // A callback to load locales.
  context: PropTypes.string,
  // current context.
  defaultLang: PropTypes.string // default language. By default is 'en'

};
I18n.defaultProps = {
  defaultLang: DEFAULT_LANG
};
I18n.childContextTypes = {
  t: PropTypes.func,
  f: PropTypes.func,
  polyglot: PropTypes.object,
  lang: PropTypes.string
};
export { initTranslation, extend, useExtendI18n } from './translation';
export { default as translate } from './translate';
export { default as createUseI18n } from './createUseI18n';
export default I18n;