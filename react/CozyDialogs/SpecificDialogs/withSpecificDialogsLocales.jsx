import en from './locales/en.json'
import fr from './locales/fr.json'
import ru from './locales/ru.json'
import vi from './locales/vi.json'
import withOnlyLocales from '../../providers/I18n/withOnlyLocales'

export const locales = {
  en,
  fr,
  ru,
  vi
}

export default withOnlyLocales(locales)
