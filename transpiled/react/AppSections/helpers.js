import _get from 'lodash/get';
export var getTranslatedManifestProperty = function getTranslatedManifestProperty(app, path, t) {
  if (!t || !app || !path) return _get(app, path, '');
  return t("apps.".concat(app.slug, ".").concat(path), {
    _: _get(app, path, '')
  });
};