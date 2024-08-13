import Polyglot from 'node-polyglot';
import { DEFAULT_LANG, useI18n } from "cozy-ui/transpiled/react/providers/I18n";
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
export var extend = function extend(dict, polyglot) {
  var _ref;

  return (_ref = polyglot || _polyglot) === null || _ref === void 0 ? void 0 : _ref.extend(dict);
}; // Use to determine if we need to merge locales again, and to avoid useless calls

var useExtendI18nLang = '';
/**
 * Hook to merge app locales with cozy-ui locales
 * @param {object} locales - Locales sorted by lang `{ fr: {...}, en: {...} }`
 * @returns {void}
 */

export var useExtendI18n = function useExtendI18n(locales) {
  var _useI18n = useI18n(),
      lang = _useI18n.lang,
      polyglot = _useI18n.polyglot;

  if (!locales || !lang || !polyglot) return; // To simplify code we use Polyglot.extend to merge
  // locales from object and from polyglot.phrases
  // rather than native JS or lodash. this is why we have two extend.

  if (useExtendI18nLang !== lang) {
    var _polyglot2 = new Polyglot({
      phrases: locales[lang],
      locale: lang
    }); // merge locales from app and cozy-ui, without replacing existing one in app


    extend(polyglot.phrases, _polyglot2); // use merged locales in app

    extend(_polyglot2.phrases, polyglot); // set the sitch to avoid useless merge

    useExtendI18nLang = lang;
  }
};