import React from 'react';
import DeprecatedI18n, { useI18n as deprecatedUseI18n } from "cozy-ui/transpiled/react/providers/I18n";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDeprecatedFunc = createDepreciationLogger();
var logDeprecatedComp = createDepreciationLogger();
export var useI18n = function useI18n(props) {
  logDeprecatedFunc("\"useI18n\" is now exported elsewhere. Please change the import path to \"cozy-ui/transpiled/react/providers/I18n\"");
  return deprecatedUseI18n(props);
};

var I18n = function I18n(props) {
  logDeprecatedComp("\"I18n\" is now exported elsewhere. Please change the import path to \"cozy-ui/transpiled/react/providers/I18n\"");
  return /*#__PURE__*/React.createElement(DeprecatedI18n, props);
};

export default I18n;