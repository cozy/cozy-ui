import withOnlyLocales from '../../providers/I18n/withOnlyLocales'

import en from './en.json'
import fr from './fr.json'

const locales = {
  en,
  fr
}

export default withOnlyLocales(locales)
