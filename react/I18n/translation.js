import Polyglot from 'node-polyglot'
import { DEFAULT_LANG } from '.'

export let _polyglot

export const initTranslation = (lang, dictRequire, context, defaultLang = DEFAULT_LANG) => {
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
    const dict = dictRequire(lang, context)
    _polyglot.extend(dict)
  }

  return _polyglot
}
