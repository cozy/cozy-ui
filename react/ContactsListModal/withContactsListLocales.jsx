import en from './locales/en.json'
import fr from './locales/fr.json'
import withLocales from '../providers/I18n/withLocales'

export const locales = {
  en,
  fr
}

export const withContactsListLocales = withLocales(locales)
