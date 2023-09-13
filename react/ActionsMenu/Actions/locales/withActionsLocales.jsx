import withOnlyLocales from '../../../providers/I18n/withOnlyLocales'

import en from '../../../deprecated/ActionMenu/Actions/locales/en.json'
import fr from '../../../deprecated/ActionMenu/Actions/locales/fr.json'

export const locales = {
  en,
  fr
}

export default withOnlyLocales(locales)
