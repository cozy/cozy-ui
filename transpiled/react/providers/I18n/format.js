import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { enGB as enLocale, fr as frLocale, es as esLocale } from 'date-fns/locale';
import { DEFAULT_LANG } from "cozy-ui/transpiled/react/providers/I18n";
var currentLocale;

var getDateFnsLocale = function getDateFnsLocale(lang) {
  switch (lang) {
    case 'en':
      return enLocale;

    case 'fr':
      return frLocale;

    case 'es':
      return esLocale;

    default:
      throw new Error('Locale not found');
  }
};

var getWarningMessage = function getWarningMessage(lang) {
  return "The \"".concat(lang, "\" locale isn't supported by date-fns or has not been included in the build. Check if you have configured a ContextReplacementPlugin that is too restrictive.");
};

export var provideDateFnsLocale = function provideDateFnsLocale(userLang) {
  var defaultLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_LANG;

  try {
    var userLocale = getDateFnsLocale(userLang);
    currentLocale = userLocale;
    return userLocale;
  } catch (e) {
    console.warn(getWarningMessage(userLang));
  }

  try {
    var defaultLocale = getDateFnsLocale(defaultLang);
    currentLocale = defaultLocale;
    return defaultLocale;
  } catch (err) {
    console.warn(getWarningMessage(defaultLang));
  }
};
export var initFormat = function initFormat(userLang) {
  var defaultLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_LANG;
  return function (date, formatStr) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var locale = provideDateFnsLocale(userLang, defaultLang);
    var ensureDate = date && typeof date === 'string' ? new Date(date) : date;

    try {
      return format(ensureDate, formatStr, _objectSpread({
        locale: locale
      }, opts));
    } catch (error) {
      console.error('Error in initFormat', error);
    }
  };
};
export var formatLocallyDistanceToNow = function formatLocallyDistanceToNow(date) {
  return formatDistanceToNow(date, {
    locale: currentLocale
  });
};