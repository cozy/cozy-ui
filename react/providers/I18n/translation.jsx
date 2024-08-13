import Polyglot from 'node-polyglot'

import { DEFAULT_LANG, useI18n } from '.'

export let _polyglot

export const initTranslation = (
  lang,
  dictRequire,
  context,
  defaultLang = DEFAULT_LANG
) => {
  _polyglot = new Polyglot({
    phrases: dictRequire(defaultLang),
    locale: defaultLang
  })

  // Load global locales
  if (lang && lang !== defaultLang) {
    try {
      const dict = dictRequire(lang)
      _polyglot.extend(dict)
      _polyglot.locale(lang)
    } catch (e) {
      console.warn(`The dict phrases for "${lang}" can't be loaded`)
    }
  }

  // Load context locales
  if (context) {
    try {
      const dict = dictRequire(lang, context)
      _polyglot.extend(dict)
    } catch (e) {
      console.warn(`The context ${context} cannot be loaded for lang ${lang}`)
    }
  }

  return _polyglot
}

export const extend = (dict, polyglot) => (polyglot || _polyglot)?.extend(dict)

// Use to determine if we need to merge locales again, and to avoid useless calls
let useExtendI18nLang = ''

/**
 * Hook to merge app locales with cozy-ui locales
 * @param {object} locales - Locales sorted by lang `{ fr: {...}, en: {...} }`
 * @returns {void}
 */
export const useExtendI18n = locales => {
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
