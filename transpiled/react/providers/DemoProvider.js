import React from 'react';
import { CozyProvider } from 'cozy-client';
import { BreakpointsProvider } from "cozy-ui/transpiled/react/providers/Breakpoints";
import CozyTheme from "cozy-ui/transpiled/react/providers/CozyTheme";
import AlertProvider from "cozy-ui/transpiled/react/providers/Alert";
import I18n from "cozy-ui/transpiled/react/providers/I18n";
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
      dictRequire = _ref.dictRequire,
      children = _ref.children;
  var lang = localStorage.getItem('lang') || 'en';

  var _dictRequire = dictRequire ? dictRequire : function () {
    return {};
  };

  return /*#__PURE__*/React.createElement(CozyProvider, {
    client: client || defaultClient
  }, /*#__PURE__*/React.createElement(BreakpointsProvider, null, /*#__PURE__*/React.createElement(AlertProvider, null, /*#__PURE__*/React.createElement(I18n, {
    lang: lang,
    dictRequire: _dictRequire
  }, /*#__PURE__*/React.createElement(CozyTheme, {
    variant: variant
  }, children)))));
};

export default DemoProvider;