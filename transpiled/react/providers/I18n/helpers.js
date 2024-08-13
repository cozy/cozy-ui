import { initTranslation } from "cozy-ui/transpiled/react/providers/I18n/translation";
import { initFormat } from "cozy-ui/transpiled/react/providers/I18n/format";
import { DEFAULT_LANG } from "cozy-ui/transpiled/react/providers/I18n";

var getAppOrUiLang = function getAppOrUiLang(defaultLang) {
  var appContainer = document.querySelector('[role=application]');
  var cozyUiContainer = {
    dataset: {
      cozy: JSON.stringify({
        locale: localStorage.getItem('lang') || defaultLang
      })
    }
  };
  var container = appContainer || cozyUiContainer;

  var _JSON$parse = JSON.parse(container.dataset.cozy),
      locale = _JSON$parse.locale;

  return /^\{\{\..*\}\}$/.test(locale) ? defaultLang : locale;
};

export var getI18n = function getI18n(lang, dictRequire, context) {
  var defaultLang = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_LANG;

  var _lang = lang || getAppOrUiLang(defaultLang);

  var polyglot = initTranslation(_lang, dictRequire, context, defaultLang);
  var f = initFormat(_lang);
  var t = polyglot.t.bind(polyglot);
  return {
    t: t,
    f: f,
    lang: _lang
  };
};