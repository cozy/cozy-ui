/**
 * @param {string} src - Image source
 * @returns {Promise<void>}
 */
export const checkImageSource = async src => {
  const TTL = 10000
  let timeout = null
  let img = null

  const cleanImageLoader = () => {
    clearTimeout(timeout)
    img.onload = img.onerror = null
    img.src = ''
    img = null
  }

  return new Promise((resolve, reject) => {
    img = new Image()
    img.onload = resolve
    img.onerror = reject
    img.src = src
    timeout = setTimeout(
      () => reject(new Error('Loading image took too long')),
      TTL
    )
  }).then(() => {
    return cleanImageLoader()
  })
}
