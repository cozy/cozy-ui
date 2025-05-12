/**
 * Forced to `true`, we don't want to use Cozy theme anymore
 * @returns {boolean}
 */
export const isTwakeTheme = () => {
  if (process.env.NODE_ENV === 'test') {
    return false
  }

  return true
}
