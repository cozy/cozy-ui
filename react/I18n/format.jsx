import format from 'date-fns/format'
import { DEFAULT_LANG } from '.'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

const locales = {}
let lang = DEFAULT_LANG === 'en' ? 'en-US' : DEFAULT_LANG

const getWarningMessage = lang =>
  `The "${lang}" locale isn't supported by date-fns. or has not been included in the build. Check if you have configured a ContextReplacementPlugin that is too restrictive.`

export const provideDateFnsLocale = (userLang, defaultLang = DEFAULT_LANG) => {
  const resolvedDefaultLang = defaultLang === 'en' ? 'en-US' : defaultLang
  const resolvedUserLang = userLang === 'en' ? 'en-US' : userLang
  try {
    locales[
      resolvedDefaultLang
    ] = require(`date-fns/locale/${resolvedDefaultLang}/index.js`)
  } catch (err) {
    console.warn(getWarningMessage(resolvedDefaultLang))
  }
  if (resolvedUserLang && resolvedUserLang !== resolvedDefaultLang) {
    try {
      locales[
        resolvedUserLang
      ] = require(`date-fns/locale/${resolvedUserLang}/index.js`)
    } catch (e) {
      console.warn(getWarningMessage(resolvedUserLang))
    }
  }
  lang = resolvedUserLang
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
  formatDistanceToNow(date, { locale: locales[lang] })

export const formatLocallyDistanceToNowStrict = date =>
  formatDistanceToNowStrict(date, { locale: locales[lang] })
