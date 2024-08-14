import en from './en.json'
import fr from './fr.json'
import withLocales from '../../../../providers/I18n/withLocales'

export const locales = {
  en,
  fr
}

export default withLocales(locales)
