import withOnlyLocales from '../../providers/I18n/withOnlyLocales'
import { getI18n } from '../../providers/I18n/helpers'

import en from './en.json'
import fr from './fr.json'

const locales = {
  en,
  fr
}

export const getContactsListI18n = () =>
  getI18n(undefined, lang => locales[lang])
export default withOnlyLocales(locales)
