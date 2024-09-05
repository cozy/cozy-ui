import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';
import { DEFAULT_LANG } from "cozy-ui/transpiled/react/providers/I18n";
var locales = {};
var lang = DEFAULT_LANG;

var getWarningMessage = function getWarningMessage(lang) {
  return "The \"".concat(lang, "\" locale isn't supported by date-fns. or has not been included in the build. Check if you have configured a ContextReplacementPlugin that is too restrictive.");
};

export var provideDateFnsLocale = function provideDateFnsLocale(userLang) {
  var defaultLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_LANG;
  lang = userLang;

  try {
    locales[defaultLang] = require("date-fns/locale/".concat(defaultLang, "/index.js"));
  } catch (err) {
    console.warn(getWarningMessage(defaultLang));
  }

  if (lang && lang !== defaultLang) {
    try {
      locales[lang] = require("date-fns/locale/".concat(lang, "/index.js"));
    } catch (e) {
      console.warn(getWarningMessage(lang));
    }
  }

  return locales[lang];
};
export var initFormat = function initFormat(userLang) {
  var defaultLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_LANG;
  return function (date, formatStr) {
    var locale = provideDateFnsLocale(userLang, defaultLang);
    return format(date, formatStr, {
      locale: locale
    });
  };
};
export var formatLocallyDistanceToNow = function formatLocallyDistanceToNow(date) {
  return distanceInWordsToNow(date, {
    locale: locales[lang]
  });
};