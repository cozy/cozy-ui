import withLocales from '../../../I18n/withLocales'

import en from '../../../ActionMenu/Actions/locales/en.json'
import fr from '../../../ActionMenu/Actions/locales/fr.json'

export const locales = {
  en,
  fr
}

/**
 * TODO: We should use something else than withLocales here. Because it's an HOC
 * so it spreads t, f, lang into child props.
 * We don't use HOC anymore, so we just want to use new I18n context with new locales
 */
export default withLocales(locales)
