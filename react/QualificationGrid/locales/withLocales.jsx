import en from './en.json'
import fr from './fr.json'
import withOnlyLocales from '../../providers/I18n/withOnlyLocales'

export const locales = {
  en,
  fr
}

export default withOnlyLocales(locales)
