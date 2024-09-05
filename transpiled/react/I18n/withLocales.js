import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
import withLocales from "cozy-ui/transpiled/react/providers/I18n/withLocales";
var logDeprecatedWithLocale = createDepreciationLogger();

var deprecatedWithLocales = function deprecatedWithLocales(props) {
  logDeprecatedWithLocale("\"withLocales\" is now exported elsewhere. Please change the import path to \"cozy-ui/transpiled/react/providers/I18n\"");
  return withLocales(props);
};

export default deprecatedWithLocales;