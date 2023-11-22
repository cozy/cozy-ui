/* eslint-disable @typescript-eslint/ban-ts-comment */

// TODO: remove eslint-disable and @ts-ignore rules

import { Theme, useTheme } from '@material-ui/core'

import { isFlagshipApp } from 'cozy-device-helper'

import { useSetFlagshipUI } from '../../hooks/useSetFlagshipUi/useSetFlagshipUI'

const getBottomBackground = (theme: Theme): string => {
  const sidebar = document.getElementById('sidebar')

  return sidebar
    ? getComputedStyle(sidebar).getPropertyValue('background-color')
    : theme.palette.background.paper
}

const useHook = (): void => {
  const theme = useTheme()

  useSetFlagshipUI(
    {
      bottomBackground: theme.palette.background.paper,
      // @ts-ignore
      bottomTheme: 'dark',
      topOverlay: 'var(--overlay)',
      topBackground: theme.palette.background.paper,
      // @ts-ignore
      topTheme: 'light'
    },
    {
      bottomBackground: getBottomBackground(theme),
      bottomTheme: 'dark',
      topOverlay: 'transparent',
      topBackground: theme.palette.background.paper,
      topTheme: 'dark'
    },
    'cozy-ui/ActionMenu'
  )
}

export const useActionMenuEffects = isFlagshipApp()
  ? useHook
  : // eslint-disable-next-line @typescript-eslint/no-empty-function
    (): void => {}
