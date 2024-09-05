import _get from 'lodash/get';
import { APP_CLASS, APP_TYPE } from "cozy-ui/transpiled/react/AppSections/constants";
export var getTranslatedManifestProperty = function getTranslatedManifestProperty(app, path, t) {
  if (!t || !app || !path) return _get(app, path, '');
  return t("apps.".concat(app.slug, ".").concat(path), {
    _: _get(app, path, '')
  });
};
export var isShortcutFile = function isShortcutFile(app) {
  if (!app) return false;
  return app.type === APP_TYPE.FILE && app.class === APP_CLASS.SHORTCUT;
};