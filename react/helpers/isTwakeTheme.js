import flag from 'cozy-flags'

export const isTwakeTheme = () => {
  if (process.env.NODE_ENV === 'test') {
    return false
  }

  return (
    flag('ui.theme-twake.enabled') ||
    localStorage.getItem('ui-theme-name') === 'Twake'
  )
}
