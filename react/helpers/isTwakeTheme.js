import flag from 'cozy-flags'

export const isTwakeTheme = () =>
  flag('ui.theme-twake.enabled') ||
  localStorage.getItem('ui-theme-name') === 'Twake'
