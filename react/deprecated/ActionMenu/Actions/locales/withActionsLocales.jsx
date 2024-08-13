import withLocales from '../../../../providers/I18n/withLocales'

import en from './en.json'
import fr from './fr.json'

export const locales = {
  en,
  fr
}

export default withLocales(locales)
