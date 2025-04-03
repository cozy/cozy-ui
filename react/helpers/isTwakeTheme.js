import flag from 'cozy-flags'

/**
 * Relies on flag and local storage to determine if the Twake theme is enabled
 * @returns {boolean}
 */
export const isTwakeTheme = () => {
  if (process.env.NODE_ENV === 'test') {
    return false
  }

  return (
    flag('ui.theme-twake.enabled') ||
    localStorage.getItem('ui-theme-name') === 'Twake'
  )
}
