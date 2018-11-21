const _loaded = {}

export const preload = async (app, domain, secure) => {
  if (!domain) throw new Error('Cannot fetch icon: missing domain')

  const source = _getAppIconURL(app, domain, secure)

  if (!source) {
    throw new Error(`Cannot get icon source for app ${app.name}`)
  }

  return new Promise((resolve, reject) => {
    const loader = document.createElement('img')
    loader.onload = () => {
      _loaded[source] = true
      resolve(source)
    }
    loader.onerror = () => {
      const loadError = new Error(`Error while preloading ${source}`)
      console.error(loadError.message)
      reject(loadError)
    }
    loader.src = source
  })
}

export const getPreloaded = (app, domain, secure) => {
  const source = _getAppIconURL(app, domain, secure)
  return source && _loaded[source] ? source : null
}

const _getProtocol = (secure = true) => {
  return `http${secure ? 's' : ''}:`
}

const _getAppIconURL = (app, domain, secure) => {
  if (!domain) return null

  let path = _getInstalledIconPath(app)
  path = path || _getRegistryIconPath(app)
  return path ? `${_getProtocol(secure)}//${domain}${path}` : null
}

const _getInstalledIconPath = app => {
  return app.links && app.links.icon
}

const _getRegistryIconPath = app => {
  return (
    app.latest_version &&
    app.latest_version.version &&
    `/registry/${app.slug}/${app.latest_version.version}/icon`
  )
}

export const Preloader = {
  preload
}

export default Preloader
