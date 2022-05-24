import { useTheme } from '@material-ui/core'

import { getCssVariableValue } from '../utils/color'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

export const ActionMenuEffects = () => {
  const theme = useTheme()

  useSetFlagshipUI(
    {
      bottomBackground: theme.palette.background.paper,
      bottomTheme: 'dark',
      topOverlay: getCssVariableValue('overlay'), // TODO: refactor to semantic variable
      topBackground: theme.palette.background.paper,
      topTheme: 'light'
    },
    {
      bottomBackground:
        (document.getElementById('sidebar') &&
          getComputedStyle(document.getElementById('sidebar')).getPropertyValue(
            'background-color'
          )) ??
        theme.palette.background.paper,
      bottomTheme: 'dark',
      topOverlay: 'transparent',
      topBackground: theme.palette.background.paper,
      topTheme: 'dark'
    },
    'cozy-ui/ActionMenu'
  )

  return null
}
