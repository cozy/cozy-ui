import { Theme, useTheme } from '@material-ui/core'

import { getFlagshipMetadata, isFlagshipApp } from 'cozy-device-helper'
import { FlagshipUI } from 'cozy-intent'

import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

function lightOrDark(color: string): 'light' | 'dark' {
  let r, g, b, hsp

  if (color.match(/^rgb/)) {
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    )

    r = color[1]
    g = color[2]
    b = color[3]
  } else {
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'))

    r = color >> 16
    g = (color >> 8) & 255
    b = color & 255
  }

  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  if (hsp > 127.5) {
    return 'light'
  } else {
    return 'dark'
  }
}

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
): FlagshipUI => {
  const otherDialogStyles = hasAnotherDialog ? getOtherDialogStyles() : undefined
  const otherDialogBackground = otherDialogStyles?.color
  const isDark = otherDialogBackground && lightOrDark(otherDialogBackground) === "dark"

  return {
    ...(hasAnotherDialog
      ? {}
      : {
          bottomBackground:
            theme.palette.background[sidebar ? 'default' : 'paper']
        }),
    bottomTheme: isDark ? 'dark' : immersive ? 'light' : 'dark',
    bottomOverlay:  'transparent',
    topOverlay:  'transparent',
    ...(hasAnotherDialog || !cozyBar
      ? {}
      : {
          topBackground:
            cozyBar &&
            getComputedStyle(cozyBar).getPropertyValue('background-color')
        }),
    topTheme:
      isDark ? 'dark': immersive || (cozyBar && cozyBar.classList.contains('coz-theme-primary'))
        ? 'light'
        : 'dark'
  }
}

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

const getOtherDialogStyles = (): {
  color: string
} | null => {
  const innerDialog = document.querySelector('.MuiPaper-root')

  if (!innerDialog) return null

  const styles = getComputedStyle(innerDialog)

  return {
    color: styles.getPropertyValue('color')
  }
}

const useHook = (fullScreen?: boolean): void => {
  const theme = useTheme()
  const cozyBar = document.querySelector('.coz-bar-wrapper')
  const sidebar = document.getElementById('sidebar')
  const otherDialog = document.querySelector('[role="presentation"]')
  const hasAnotherDialog = !!otherDialog
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
