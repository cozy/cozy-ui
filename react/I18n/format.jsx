import format from 'date-fns/format'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'
import getHours from 'date-fns/get_hours'
import setHours from 'date-fns/set_hours'
import setMinutes from 'date-fns/set_minutes'
import getMinutes from 'date-fns/get_minutes'

import { DEFAULT_LANG } from '.'

const locales = {}
let lang = DEFAULT_LANG

const getWarningMessage = lang =>
  `The "${lang}" locale isn't supported by date-fns. or has not been included in the build. Check if you have configured a ContextReplacementPlugin that is too restrictive.`

export const provideDateFnsLocale = (userLang, defaultLang = DEFAULT_LANG) => {
  lang = userLang
  try {
    locales[defaultLang] = require(`date-fns/locale/${defaultLang}/index.js`)
  } catch (err) {
    console.warn(getWarningMessage(defaultLang))
  }

  if (lang && lang !== defaultLang) {
    try {
      locales[lang] = require(`date-fns/locale/${lang}/index.js`)
    } catch (e) {
      console.warn(getWarningMessage(lang))
    }
  }
  return locales[lang]
}

export const initFormat = (userLang, defaultLang = DEFAULT_LANG) => (
  date,
  formatStr
) => {
  const locale = provideDateFnsLocale(userLang, defaultLang)
  return format(date, formatStr, { locale })
}

export const formatLocallyDistanceToNow = date =>
  distanceInWordsToNow(date, { locale: locales[lang] })

export const setHoursAndMinutesFromDate = (date, refDate) => {
  let newDate = date
  newDate = setHours(newDate, getHours(refDate))
  newDate = setMinutes(newDate, getMinutes(refDate))
  return newDate
}

/**
 * Return the distance between the given dates in words, using strict units.
 * If the distance is in days, we force the time to be a whole number of days
 * @param {Date} date - Future date compared to the current date
 * @returns {string} Number of hours/day/month that separates the date from the present moment
 */
export const formatLocallyDistanceToNowStrict = date => {
  const now = new Date()
  const days = differenceInCalendarDays(date, now)
  const isSameDay = days === 0
  const isInMonth = days > 0 && days < 32

  const refDate = isSameDay ? date : setHoursAndMinutesFromDate(date, now)
  const unit = isInMonth ? 'd' : undefined

  return distanceInWordsStrict(now, refDate, {
    locale: locales[lang],
    unit
  })
}
