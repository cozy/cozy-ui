import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { DEFAULT_LANG } from '.'

const locales = {}
let lang = DEFAULT_LANG

/**
 * Ensure that the locale is in the correct format for date-fns (see 2.0.0 BC https://github.com/date-fns/date-fns/blob/main/CHANGELOG.md#200---2019-08-20)
 * @param {string} lang
 */
const ensureLocaleFormat = lang => {
  switch (lang) {
    case 'en':
      return 'en-US'
    case 'zh_cn':
      return 'zh-CN'
    case 'zh_tw':
      return 'zh-TW'
    default:
      return lang
  }
}

const getWarningMessage = lang =>
  `The "${lang}" locale isn't supported by date-fns. or has not been included in the build. Check if you have configured a ContextReplacementPlugin that is too restrictive.`

export const provideDateFnsLocale = (userLang, defaultLang = DEFAULT_LANG) => {
  lang = ensureLocaleFormat(userLang)
  const ensureDefaultLang = ensureLocaleFormat(defaultLang)
  try {
    locales[
      ensureDefaultLang
    ] = require(`date-fns/locale/${ensureDefaultLang}/index.js`)
  } catch (err) {
    console.warn(getWarningMessage(ensureDefaultLang))
  }

  if (lang && lang !== ensureDefaultLang) {
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

    try {
      return format(ensureDate, formatStr, { locale, ...opts })
    } catch (error) {
      console.error('Error in initFormat', error)
    }
  }

export const formatLocallyDistanceToNow = date => {
  return formatDistanceToNow(date, { locale: locales[lang] })
}
