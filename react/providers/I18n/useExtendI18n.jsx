import Polyglot from 'node-polyglot'

import { useI18n } from '.'
import { extend } from './translation'

// Use to determine if we need to merge locales again, and to avoid useless calls
let useExtendI18nLang = ''

/**
 * Hook to merge app locales with cozy-ui locales
 * @param {object} locales - Locales sorted by lang `{ fr: {...}, en: {...} }`
 * @returns {void}
 */
const useExtendI18n = locales => {
  const { lang, polyglot } = useI18n()

  if (!locales || !lang || !polyglot) return

  // To simplify code we use Polyglot.extend to merge
  // locales from object and from polyglot.phrases
  // rather than native JS or lodash. this is why we have two extend.
  if (useExtendI18nLang !== lang) {
    const _polyglot = new Polyglot({
      phrases: locales[lang],
      locale: lang
    })

    // merge locales from app and cozy-ui, without replacing existing one in app
    extend(polyglot.phrases, _polyglot)
    // use merged locales in app
    extend(_polyglot.phrases, polyglot)
    // set the sitch to avoid useless merge
    useExtendI18nLang = lang
  }
}

export default useExtendI18n
