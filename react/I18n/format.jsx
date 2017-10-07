import format from 'date-fns/format'
import { DEFAULT_LANG } from '.'

export const initFormat = (lang, defaultLang = DEFAULT_LANG) => {
  const locales = {
    [defaultLang]: require(`date-fns/locale/${defaultLang}/index`)
  }
  if (lang && lang !== defaultLang) {
    try {
      locales[lang] = require(`date-fns/locale/${lang}/index`)
    } catch (e) {
      console.warn(`The "${lang}" locale isn't supported by date-fns`)
    }
  }
  return (date, formatStr) => format(date, formatStr, { locale: locales[lang] })
}
