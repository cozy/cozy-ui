'use strict'

import { I18n } from '../providers/I18n'

export const I18nContext = options => {
  const I18nComponent = new I18n({
    lang: options.lang,
    defaultLang: options.defaultLang,
    dictRequire: () => options.locale
  })

  return I18nComponent.getContextValue()
}
