const _loaded = {}

export const preload = async (app, domain, secure) => {
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
  if (!domain) throw new Error('Cannot fetch icon: missing domain')

  return (
    app.links &&
    app.links.icon &&
    `${_getProtocol(secure)}//${domain}${app.links.icon}`
  )
}

export const Preloader = {
  preload
}

export default Preloader
