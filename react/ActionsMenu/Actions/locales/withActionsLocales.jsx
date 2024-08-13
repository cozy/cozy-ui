import { getI18n } from '../../../providers/I18n/helpers'
import withOnlyLocales from '../../../providers/I18n/withOnlyLocales'

import en from './en.json'
import fr from './fr.json'

export const locales = {
  en,
  fr
}

export const getActionsI18n = () => getI18n(undefined, lang => locales[lang])
export default withOnlyLocales(locales)
