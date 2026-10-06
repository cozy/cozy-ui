import { withLocales } from 'twake-i18n'

import de from './de.json'
import en from './en.json'
import es from './es.json'
import fr from './fr.json'
import it from './it.json'
import ru from './ru.json'
import vi from './vi.json'

export const locales = {
  de,
  en,
  es,
  fr,
  it,
  ru,
  vi
}

export default withLocales(locales)
