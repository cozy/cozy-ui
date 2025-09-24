import en from './en.json'
import fr from './fr.json'
import ru from './ru.json'
import vi from './vi.json'
import { getI18n } from '../../../providers/I18n/helpers'
import withOnlyLocales from '../../../providers/I18n/withOnlyLocales'

export const locales = {
  en,
  fr,
  ru,
  vi
}

export const getActionsI18n = () => getI18n(undefined, lang => locales[lang])
export default withOnlyLocales(locales)
