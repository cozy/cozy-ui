/**
 * Provides an I18n helper using a Higher Order Component.
 */
'use strict';

import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, useContext, useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Polyglot from 'node-polyglot';
import { initTranslation } from "cozy-ui/transpiled/react/I18n/translation";
import { initFormat } from "cozy-ui/transpiled/react/I18n/format";
export var DEFAULT_LANG = 'en';
export var I18nContext = /*#__PURE__*/React.createContext(); // Provider root component

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
  lang: PropTypes.string
}; // higher order decorator for components that need `t` and/or `f`

export var translate = function translate() {
  return function (WrappedComponent) {
    var Wrapper = /*#__PURE__*/forwardRef(function (props, ref) {
      var i18nContext = useContext(I18nContext);
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, {
        ref: ref,
        t: i18nContext && i18nContext.t,
        f: i18nContext && i18nContext.f,
        lang: i18nContext && i18nContext.lang
      }));
    });
    Wrapper.displayName = "withI18n(".concat(WrappedComponent.displayName || WrappedComponent.name, ")");
    return Wrapper;
  };
};
export var useI18n = function useI18n() {
  return useContext(I18nContext);
};
export var createUseI18n = function createUseI18n(locales) {
  return function () {
    var _ref = useI18n() || {
      lang: DEFAULT_LANG
    },
        lang = _ref.lang;

    return useMemo(function () {
      var polyglot = new Polyglot({
        locale: DEFAULT_LANG,
        phrases: locales[DEFAULT_LANG]
      });

      if (lang && lang !== DEFAULT_LANG) {
        try {
          polyglot.locale(lang);
          polyglot.extend(locales[lang]);
        } catch (e) {
          console.warn("The dict phrases for \"".concat(lang, "\" can't be loaded"));
        }
      }

      var f = initFormat(lang);
      var t = polyglot.t.bind(polyglot);
      return {
        t: t,
        f: f,
        lang: lang
      };
    }, [lang]);
  };
};
export { initTranslation, extend } from './translation';
export default I18n;