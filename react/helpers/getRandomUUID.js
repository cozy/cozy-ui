/**
 * Returns a random UUID without using window.crypto API
 * @returns {string} a random UUID
 */
const createUUID = () => {
  const func = c => {
    var r = (dt + Math.random() * 16) % 16 | 0
    dt = Math.floor(dt / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  }

  var dt = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, func)

  return uuid
}

/**
 * Returns a random UUID
 * @returns {string} a random UUID
 */
export const getRandomUUID = () => {
  if (process.env.NODE_ENV === 'test') {
    return 'random-uuid-for-jest'
  }

  return window?.crypto?.randomUUID?.() || createUUID()
}
