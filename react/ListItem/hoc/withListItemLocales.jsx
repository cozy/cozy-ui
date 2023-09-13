import withLocales from '../../providers/I18n/withLocales'

import en from '../locales/en.json'
import fr from '../locales/fr.json'

export const locales = {
  en,
  fr
}

export default withLocales(locales)
