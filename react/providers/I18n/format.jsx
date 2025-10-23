import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {
  enGB as enLocale,
  fr as frLocale,
  es as esLocale
} from 'date-fns/locale'

import { DEFAULT_LANG } from '.'

let currentLocale

const getDateFnsLocale = lang => {
  switch (lang) {
    case 'en':
      return enLocale
    case 'fr':
      return frLocale
    case 'es':
      return esLocale
    default:
      throw new Error('Locale not found')
  }
}

const getWarningMessage = lang =>
  `The "${lang}" locale isn't supported by date-fns or has not been included in the build. Check if you have configured a ContextReplacementPlugin that is too restrictive.`

export const provideDateFnsLocale = (userLang, defaultLang = DEFAULT_LANG) => {
  try {
    const userLocale = getDateFnsLocale(userLang)
    currentLocale = userLocale
    return userLocale
  } catch (e) {
    console.warn(getWarningMessage(userLang))
  }

  try {
    const defaultLocale = getDateFnsLocale(defaultLang)
    currentLocale = defaultLocale
    return defaultLocale
  } catch (err) {
    console.warn(getWarningMessage(defaultLang))
  }
}

export const initFormat =
  (userLang, defaultLang = DEFAULT_LANG) =>
  (date, formatStr, opts = {}) => {
    const locale = provideDateFnsLocale(userLang, defaultLang)
    const ensureDate = date && typeof date === 'string' ? new Date(date) : date

    try {
      return format(ensureDate, formatStr, { locale, ...opts })
    } catch (error) {
      console.error('Error in initFormat', error)
    }
  }

export const formatLocallyDistanceToNow = date => {
  return formatDistanceToNow(date, { locale: currentLocale })
}
