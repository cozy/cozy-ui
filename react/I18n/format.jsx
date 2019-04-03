import format from 'date-fns/format'
import { DEFAULT_LANG } from '.'

const getWarningMessage = lang =>
  `The "${lang}" locale isn't supported by date-fns. or has not been included in the build. Check if you have configured a ContextReplacementPlugin that is too restrictive.`

export const initFormat = (lang, defaultLang = DEFAULT_LANG) => {
  const locales = {}

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
  return (date, formatStr) => format(date, formatStr, { locale: locales[lang] })
}
