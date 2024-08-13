import React from 'react';
import { I18nContext } from "cozy-ui/transpiled/react/providers/I18n";
import { BreakpointsProvider } from "cozy-ui/transpiled/react/providers/Breakpoints";
import { CozyProvider } from 'cozy-client';
import { Provider } from 'react-redux';
import { WebviewIntentProvider } from 'cozy-intent';

var BarContextProvider = function BarContextProvider(_ref) {
  var children = _ref.children,
      store = _ref.store,
      client = _ref.client,
      f = _ref.f,
      t = _ref.t,
      lang = _ref.lang,
      webviewService = _ref.webviewService;
  if (!children) return null;
  return /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(CozyProvider, {
    client: client
  }, /*#__PURE__*/React.createElement(I18nContext.Provider, {
    value: {
      f: f,
      t: t,
      lang: lang
    }
  }, /*#__PURE__*/React.createElement(BreakpointsProvider, null, webviewService ? /*#__PURE__*/React.createElement(WebviewIntentProvider, {
    webviewService: webviewService
  }, children) : children))));
};

export default BarContextProvider;