import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import addDays from 'date-fns/add_days';
import { DEFAULT_LANG } from "cozy-ui/transpiled/react/I18n";
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
/**
 * Return the distance between the given dates in words, using strict units.
 * If the distance is in days, we force the time to be a whole number of days
 * @param {Date} date - Future date compared to the current date
 * @returns {string} Number of hours/day/month that separates the date from the present moment
 */

export var formatLocallyDistanceToNowStrict = function formatLocallyDistanceToNowStrict(date) {
  var now = new Date();
  var days = differenceInCalendarDays(date, now);
  var isSameDay = days === 0;
  var isInMonth = days > 0 && days < 32;
  var refDate = isSameDay ? date : addDays(now, days);
  var unit = isInMonth ? 'd' : undefined;
  return distanceInWordsStrict(now, refDate, {
    locale: locales[lang],
    unit: unit
  });
};