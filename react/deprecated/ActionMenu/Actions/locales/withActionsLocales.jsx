import en from './en.json'
import fr from './fr.json'
import ru from './ru.json'
import vi from './vi.json'
import withLocales from '../../../../providers/I18n/withLocales'

export const locales = {
  en,
  fr,
  ru,
  vi
}

export default withLocales(locales)
