'use strict';

import { I18n } from "cozy-ui/transpiled/react/providers/I18n";
export var I18nContext = function I18nContext(options) {
  var I18nComponent = new I18n({
    lang: options.lang,
    defaultLang: options.defaultLang,
    dictRequire: function dictRequire() {
      return options.locale;
    }
  });
  return I18nComponent.getContextValue();
};