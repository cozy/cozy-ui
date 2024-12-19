import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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

export const initFormat =
  (userLang, defaultLang = DEFAULT_LANG) =>
  (date, formatStr, opts = {}) => {
    const locale = provideDateFnsLocale(userLang, defaultLang)
    const ensureDate = date && typeof date === 'string' ? new Date(date) : date

    return format(ensureDate, formatStr, { locale, ...opts })
  }

export const formatLocallyDistanceToNow = date => {
  return formatDistanceToNow(date, { locale: locales[lang] })
}
