import Polyglot from 'node-polyglot';
import { DEFAULT_LANG } from "cozy-ui/transpiled/react/I18n";
export var _polyglot;
export var initTranslation = function initTranslation(lang, dictRequire, context) {
  var defaultLang = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_LANG;
  _polyglot = new Polyglot({
    phrases: dictRequire(defaultLang),
    locale: defaultLang
  }); // Load global locales

  if (lang && lang !== defaultLang) {
    try {
      var dict = dictRequire(lang);

      _polyglot.extend(dict);

      _polyglot.locale(lang);
    } catch (e) {
      console.warn("The dict phrases for \"".concat(lang, "\" can't be loaded"));
    }
  } // Load context locales


  if (context) {
    try {
      var _dict = dictRequire(lang, context);

      _polyglot.extend(_dict);
    } catch (e) {
      console.warn("The context ".concat(context, " cannot be loaded for lang ").concat(lang));
    }
  }

  return _polyglot;
};
export var extend = function extend(dict) {
  return _polyglot && _polyglot.extend(dict);
};