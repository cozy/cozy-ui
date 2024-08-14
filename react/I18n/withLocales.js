import createDepreciationLogger from '../helpers/createDepreciationLogger'
import withLocales from '../providers/I18n/withLocales'

const logDeprecatedWithLocale = createDepreciationLogger()

const deprecatedWithLocales = props => {
  logDeprecatedWithLocale(
    `"withLocales" is now exported elsewhere. Please change the import path to "cozy-ui/transpiled/react/providers/I18n"`
  )

  return withLocales(props)
}

export default deprecatedWithLocales
