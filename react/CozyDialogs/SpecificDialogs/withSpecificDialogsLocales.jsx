import en from './locales/en.json'
import fr from './locales/fr.json'
import withOnlyLocales from '../../providers/I18n/withOnlyLocales'

export const locales = {
  en,
  fr
}

export default withOnlyLocales(locales)
