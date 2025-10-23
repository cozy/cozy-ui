import { themesList } from 'cozy-client/dist/models/document/documentTypeData';
import flag from 'cozy-flags';
export var getThemesList = function getThemesList() {
  return flag('hide.healthTheme.enabled') ? themesList.filter(function (theme) {
    return theme.label !== 'health';
  }) : themesList;
};