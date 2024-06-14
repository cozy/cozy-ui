/* eslint-disable @typescript-eslint/ban-ts-comment */

// TODO: remove eslint-disable and @ts-ignore rules

import { Theme, useTheme } from '@material-ui/core'

import { isFlagshipApp } from 'cozy-device-helper'

import { useSetFlagshipUI } from '../../hooks/useSetFlagshipUi/useSetFlagshipUI'
import { getFlagshipMetadata } from '../../hooks/useSetFlagshipUi/helpers'
import { useCozyTheme } from '../../providers/CozyTheme'

const getTopBackground = (theme: Theme, cozyBar: Element | null): string =>
  (cozyBar && getComputedStyle(cozyBar).getPropertyValue('background-color')) ||
  theme.palette.background.paper

const getTopTheme = (
  cozyBar: Element | null,
  isLight: boolean
): 'light' | 'dark' =>
  getFlagshipMetadata().immersive ||
  (cozyBar && cozyBar.classList.contains('coz-theme-primary')) || // Needed for previous versions of cozy-bar like v7. Can be removed when all apps in v12.
  !isLight
    ? 'light'
    : 'dark'

const useHook = (): void => {
  const theme = useTheme()

  const { isLight } = useCozyTheme()

  const cozyBar = document.querySelector('.coz-bar-wrapper')
  const sidebar = document.getElementById('sidebar')

  useSetFlagshipUI(
    {
      bottomBackground: theme.palette.background.paper,
      // @ts-ignore
      bottomTheme: isLight ? 'dark' : 'light',
      topBackground: theme.palette.background.paper,
      // @ts-ignore
      topTheme: isLight ? 'dark' : 'light'
    },
    {
      bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper'],
      bottomTheme:
        getFlagshipMetadata().immersive || !isLight ? 'light' : 'dark',
      bottomOverlay: 'transparent',
      topOverlay: 'transparent',
      topBackground: getTopBackground(theme, cozyBar),
      topTheme: getTopTheme(cozyBar, isLight)
    },
    'cozy-ui/Modal'
  )
}

const Component = (): null => {
  useHook()

  return null
}

export const ModalEffects = isFlagshipApp() ? Component : (): null => null
