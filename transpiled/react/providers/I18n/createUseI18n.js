import Polyglot from 'node-polyglot';
import { useMemo } from 'react';
import { useI18n, DEFAULT_LANG } from "cozy-ui/transpiled/react/providers/I18n";
import { initFormat } from "cozy-ui/transpiled/react/providers/I18n/format";

var createUseI18n = function createUseI18n(locales) {
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

export default createUseI18n;