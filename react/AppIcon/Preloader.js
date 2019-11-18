/**
 * Preloads an image in the cache of the browser.
 *
 * @return Promise - Resolves when the image is in the cache
 */
const imgPreload = url =>
  new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(source)
    }
    img.onerror = () => {
      const loadError = new Error(`Error while preloading ${source}`)
      console.error(loadError.message)
      reject(loadError)
    }
    img.src = source
  })

export { imgPreload }
