import { initTranslation } from './translation'
import { initFormat } from './format'
import { DEFAULT_LANG } from './'

const getAppOrUiLang = defaultLang => {
  const appContainer = document.querySelector('[role=application]')
  const cozyUiContainer = {
    dataset: {
      cozy: JSON.stringify({
        locale: localStorage.getItem('lang') || defaultLang
      })
    }
  }
  const container = appContainer || cozyUiContainer
  const { locale } = JSON.parse(container.dataset.cozy)

  return /^\{\{\..*\}\}$/.test(locale) ? defaultLang : locale
}

export const getI18n = (
  lang,
  dictRequire,
  context,
  defaultLang = DEFAULT_LANG
) => {
  const _lang = lang || getAppOrUiLang(defaultLang)
  const polyglot = initTranslation(_lang, dictRequire, context, defaultLang)

  const f = initFormat(_lang)
  const t = polyglot.t.bind(polyglot)

  return { t, f, lang: _lang }
}
