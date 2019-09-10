const getProtocol = (secure = true) => {
  return `http${secure ? 's' : ''}:`
}

const getInstalledIconPath = app => {
  return app.links && app.links.icon
}

const getRegistryIconPath = app => {
  if (typeof app === 'string') {
    return `/registry/${app}/icon`
  }

  return (
    app.latest_version &&
    app.latest_version.version &&
    `/registry/${app.slug}/${app.latest_version.version}/icon`
  )
}

export const getAppIconURL = (app, domain, secure) => {
  let source
  if (!domain) throw new Error('Cannot fetch icon: missing domain')

  let path = getInstalledIconPath(app)
  path = path || getRegistryIconPath(app)
  source = path ? `${getProtocol(secure)}//${domain}${path}` : null

  if (!source) {
    throw new Error(`Cannot get icon source for app ${app.name}`)
  }
  return source
}
