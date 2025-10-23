import _extends from "@babel/runtime/helpers/extends";
import React, { useContext, forwardRef } from 'react';
import { I18nContext } from "cozy-ui/transpiled/react/providers/I18n"; // higher order decorator for components that need `t` and/or `f`

var translate = function translate() {
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

export default translate;