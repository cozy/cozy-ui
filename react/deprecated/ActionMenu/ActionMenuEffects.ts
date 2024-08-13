/* eslint-disable @typescript-eslint/ban-ts-comment */

// TODO: remove eslint-disable and @ts-ignore rules

import { Theme, useTheme } from '@material-ui/core'

import { isFlagshipApp } from 'cozy-device-helper'

import { useSetFlagshipUI } from '../../hooks/useSetFlagshipUi/useSetFlagshipUI'
import { isRsg } from '../../hooks/useSetFlagshipUi/helpers'
import { useCozyTheme } from '../../providers/CozyTheme'

const getBottomBackground = (theme: Theme): string => {
  const sidebar = document.getElementById('sidebar')

  return sidebar
    ? getComputedStyle(sidebar).getPropertyValue('background-color')
    : theme.palette.background.paper
}

const useHook = (): void => {
  const theme = useTheme()

  const { isLight } = useCozyTheme()

  useSetFlagshipUI(
    {
      bottomBackground: theme.palette.background.paper,
      // @ts-ignore
      bottomTheme: isLight ? 'dark' : 'light',
      topOverlay: 'rgba(0, 0, 0, 0.5)',
      topBackground: theme.palette.background.paper,
      // @ts-ignore
      topTheme: 'light'
    },
    {
      bottomBackground: getBottomBackground(theme),
      bottomTheme: isLight ? 'dark' : 'light',
      topOverlay: 'transparent',
      topBackground: theme.palette.background.paper,
      topTheme: isLight ? 'dark' : 'light'
    },
    'cozy-ui/ActionMenu'
  )
}

export const useActionMenuEffects =
  isFlagshipApp() || isRsg
    ? useHook
    : // eslint-disable-next-line @typescript-eslint/no-empty-function
      (): void => {}
