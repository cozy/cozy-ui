import { withOnlyLocales } from 'twake-i18n'

import en from './en.json'
import fr from './fr.json'
import ru from './ru.json'
import vi from './vi.json'

export const locales = {
  en,
  fr,
  ru,
  vi
}

export default withOnlyLocales(locales)
