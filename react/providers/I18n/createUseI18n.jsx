import Polyglot from 'node-polyglot'
import { useMemo } from 'react'

import { useI18n, DEFAULT_LANG } from '.'
import { initFormat } from './format'

const createUseI18n = locales => () => {
  const { lang } = useI18n() || { lang: DEFAULT_LANG }

  return useMemo(() => {
    const polyglot = new Polyglot({
      locale: DEFAULT_LANG,
      phrases: locales[DEFAULT_LANG]
    })

    if (lang && lang !== DEFAULT_LANG) {
      try {
        polyglot.locale(lang)
        polyglot.extend(locales[lang])
      } catch (e) {
        console.warn(`The dict phrases for "${lang}" can't be loaded`)
      }
    }

    const f = initFormat(lang)
    const t = polyglot.t.bind(polyglot)

    return { t, f, lang }
  }, [lang])
}

export default createUseI18n
