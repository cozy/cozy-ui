import { Theme, useTheme } from '@material-ui/core'

import { getFlagshipMetadata, isFlagshipApp } from 'cozy-device-helper'

import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const getTopBackground = (theme: Theme, cozyBar: Element | null): string =>
  (cozyBar && getComputedStyle(cozyBar).getPropertyValue('background-color')) ||
  theme.palette.background.paper

const getTopTheme = (cozyBar: Element | null): 'light' | 'dark' =>
  getFlagshipMetadata().immersive ||
  (cozyBar && cozyBar.classList.contains('coz-theme-primary'))
    ? 'light'
    : 'dark'

const useHook = (): void => {
  const theme = useTheme()
  const cozyBar = document.querySelector('.coz-bar-wrapper')
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
      topBackground: getTopBackground(theme, cozyBar),
      topTheme: getTopTheme(cozyBar)
    },
    'cozy-ui/Modal'
  )
}

const Component = (): null => {
  useHook()

  return null
}

export const ModalEffects = isFlagshipApp() ? Component : (): null => null
