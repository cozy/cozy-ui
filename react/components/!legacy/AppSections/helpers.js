import _get from 'lodash/get'

export const getTranslatedManifestProperty = (app, path, t) => {
  if (!t || !app || !path) return _get(app, path, '')
  return t(`apps.${app.slug}.${path}`, {
    _: _get(app, path, '')
  })
}
