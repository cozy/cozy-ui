import { Theme, useTheme } from '@material-ui/core'

import { getFlagshipMetadata, isFlagshipApp } from 'cozy-device-helper'
import { FlagshipUI } from 'cozy-intent'

import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const makeOnMount = (
  fullScreen: boolean,
  hasAnotherDialog: boolean,
  theme: Theme,
  sidebar: Element | null,
  cozyBar: Element | null
): FlagshipUI =>
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
          : {
              bottomBackground:
                theme.palette.background[sidebar ? 'default' : 'paper']
            }),
        bottomTheme: 'light',
        bottomOverlay: 'rgba(0, 0, 0, 0.5)',
        topOverlay: 'rgba(0, 0, 0, 0.5)',
        ...(hasAnotherDialog || !cozyBar
          ? {}
          : {
              topBackground: getComputedStyle(cozyBar).getPropertyValue(
                'background-color'
              )
            }),
        topTheme: 'light'
      }

const makeOnUnmount = (
  hasAnotherDialog: boolean,
  theme: Theme,
  immersive: boolean,
  sidebar: Element | null,
  cozyBar: Element | null
): FlagshipUI => ({
  ...(hasAnotherDialog
    ? {}
    : {
        bottomBackground:
          theme.palette.background[sidebar ? 'default' : 'paper']
      }),
  bottomTheme: immersive ? 'light' : 'dark',
  bottomOverlay: 'transparent',
  topOverlay: 'transparent',
  ...(hasAnotherDialog || !cozyBar
    ? {}
    : {
        topBackground:
          cozyBar &&
          getComputedStyle(cozyBar).getPropertyValue('background-color')
      }),
  topTheme:
    immersive || (cozyBar && cozyBar.classList.contains('coz-theme-primary'))
      ? 'light'
      : 'dark'
})

const makeCaller = (
  fullScreen: boolean,
  hasAnotherDialog: boolean,
  immersive: boolean
): string =>
  [
    'cozy-ui/Dialog',
    fullScreen ? '--fullScreen' : '',
    hasAnotherDialog ? '--stacked' : '',
    immersive ? '--immersive' : ''
  ].join('')

const useHook = (fullScreen?: boolean): void => {
  const theme = useTheme()
  const cozyBar = document.querySelector('.coz-bar-wrapper')
  const sidebar = document.getElementById('sidebar')
  const hasAnotherDialog = Boolean(
    document.querySelector('[role="presentation"]')
  )
  const immersive = Boolean(getFlagshipMetadata().immersive)

  useSetFlagshipUI(
    makeOnMount(Boolean(fullScreen), hasAnotherDialog, theme, sidebar, cozyBar),
    makeOnUnmount(hasAnotherDialog, theme, immersive, sidebar, cozyBar),
    makeCaller(Boolean(fullScreen), hasAnotherDialog, immersive)
  )
}

export const useDialogEffects = isFlagshipApp()
  ? useHook
  : // eslint-disable-next-line @typescript-eslint/no-empty-function
    (): void => {}
