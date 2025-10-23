import en from './en.json'
import fr from './fr.json'
import ru from './ru.json'
import vi from './vi.json'
import withOnlyLocales from '../../providers/I18n/withOnlyLocales'

export const locales = {
  en,
  fr,
  ru,
  vi
}

export default withOnlyLocales(locales)
