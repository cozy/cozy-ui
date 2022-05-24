import { useTheme } from '@material-ui/core'

import { getFlagshipMetadata } from 'cozy-device-helper'

import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

export const ModalEffects = () => {
  const theme = useTheme()
  const cozBar = document.querySelector('.coz-bar-wrapper')
  const sidebar = document.getElementById('sidebar')

  useSetFlagshipUI(
    {
      bottomBackground: theme.palette.background.paper,
      bottomTheme: 'dark',
      topBackground: theme.palette.background.paper,
      topTheme: 'dark'
    },
    {
      bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper'],
      bottomTheme: getFlagshipMetadata().immersive ? 'light' : 'dark',
      bottomOverlay: 'transparent',
      topOverlay: 'transparent',
      topBackground:
        cozBar && getComputedStyle(cozBar).getPropertyValue('background-color'),
      topTheme:
        getFlagshipMetadata().immersive ||
        (cozBar && cozBar.classList.contains('coz-theme-primary'))
          ? 'light'
          : 'dark'
    },
    'cozy-ui/Modal'
  )

  return null
}
