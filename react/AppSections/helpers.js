import _get from 'lodash/get'

import { APP_CLASS, APP_TYPE } from './constants'

export const getTranslatedManifestProperty = (app, path, t) => {
  if (!t || !app || !path) return _get(app, path, '')
  return t(`apps.${app.slug}.${path}`, {
    _: _get(app, path, '')
  })
}

export const isShortcutFile = app => {
  if (!app) return false

  return app.type === APP_TYPE.FILE && app.class === APP_CLASS.SHORTCUT
}
