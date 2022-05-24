import { useTheme } from '@material-ui/core'

import { getFlagshipMetadata } from 'cozy-device-helper'

import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

export const DialogEffects = ({ fullScreen }) => {
  const theme = useTheme()
  const cozBar = document.querySelector('.coz-bar-wrapper')
  const sidebar = document.getElementById('sidebar')
  const hasAnotherDialog = Boolean(
    document.querySelector('[role="presentation"]')
  )

  useSetFlagshipUI(
    fullScreen
      ? {
          bottomBackground: theme.palette.background.paper,
          bottomTheme: 'dark',
          topBackground: theme.palette.background.paper,
          topTheme: 'dark'
        }
      : {
          ...(hasAnotherDialog
            ? {}
            : { bottomBackground: theme.palette.background.paper }),
          bottomTheme: 'light',
          bottomOverlay: 'rgba(0, 0, 0, 0.5)',
          topOverlay: 'rgba(0, 0, 0, 0.5)',
          ...(hasAnotherDialog
            ? {}
            : { topBackground: theme.palette.background.paper }),
          topTheme: 'light'
        },
    {
      ...(hasAnotherDialog
        ? {}
        : {
            bottomBackground:
              theme.palette.background[sidebar ? 'default' : 'paper']
          }),
      bottomTheme: getFlagshipMetadata().immersive ? 'light' : 'dark',
      bottomOverlay: 'transparent',
      topOverlay: 'transparent',
      ...(hasAnotherDialog
        ? {}
        : {
            topBackground:
              cozBar &&
              getComputedStyle(cozBar).getPropertyValue('background-color')
          }),
      topTheme:
        getFlagshipMetadata().immersive ||
        (cozBar && cozBar.classList.contains('coz-theme-primary'))
          ? 'light'
          : 'dark'
    },
    `cozy-ui/Dialog${fullScreen ? '--fullScreen' : ''}`
  )

  return null
}
