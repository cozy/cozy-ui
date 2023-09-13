import withOnlyLocales from '../../providers/I18n/withOnlyLocales'

import en from './locales/en.json'
import fr from './locales/fr.json'

export const locales = {
  en,
  fr
}

export default withOnlyLocales(locales)
