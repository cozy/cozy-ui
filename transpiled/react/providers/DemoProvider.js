import React from 'react';
import { CozyProvider } from 'cozy-client';
import { BreakpointsProvider } from "cozy-ui/transpiled/react/providers/Breakpoints";
import CozyTheme from "cozy-ui/transpiled/react/providers/CozyTheme";
import { I18nContext } from "cozy-ui/transpiled/react/providers/I18n";
var defaultClient = {
  plugins: {
    realtime: {
      subscribe: function subscribe() {},
      unsubscribe: function unsubscribe() {},
      unsubscribeAll: function unsubscribeAll() {}
    }
  },
  getStackClient: function getStackClient() {
    return {
      uri: 'https://cozy.io/'
    };
  },
  getInstanceOptions: function getInstanceOptions() {
    return {
      subdomain: ''
    };
  }
};

var DemoProvider = function DemoProvider(_ref) {
  var client = _ref.client,
      variant = _ref.variant,
      children = _ref.children;
  var lang = localStorage.getItem('lang') || 'en';
  return /*#__PURE__*/React.createElement(CozyProvider, {
    client: client || defaultClient
  }, /*#__PURE__*/React.createElement(BreakpointsProvider, null, /*#__PURE__*/React.createElement(I18nContext.Provider, {
    value: {
      t: function t(x) {
        return x;
      },
      f: function f() {
        return '01 Jan. 2022';
      },
      lang: lang
    }
  }, /*#__PURE__*/React.createElement(CozyTheme, {
    variant: variant
  }, children))));
};

export default DemoProvider;