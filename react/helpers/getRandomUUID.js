/**
 *  Returns a random UUID
 * @returns {string} a random UUID
 */
export const getRandomUUID = () => {
  if (process.env.NODE_ENV === 'test') {
    return 'random-uuid-for-jest'
  }

  return window.crypto.randomUUID()
}
