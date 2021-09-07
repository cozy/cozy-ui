import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'

import { getCssVariableValue } from '../../utils/color'
import isTesting from '../../helpers/isTesting'
import AccordionExpandIcon from '../AccordionExpandIcon'
import makeOverrides from './overrides'
import makeTypography from './typography'
import normalPalette from './palette'
import shadows from './shadows'
import defaultValues from './defaultValues'

const makeNormalTheme = () => {
  const normalTheme = createMuiTheme({
    typography: makeTypography(normalPalette),
    shape: {
      borderRadius: defaultValues.borderRadius
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1023,
        xl: 1200
      }
    },
    zIndex: {
      modal: getCssVariableValue('zIndex-modal')
    },
    palette: normalPalette,
    props: {
      MuiTabs: {
        textColor: 'primary',
        TabIndicatorProps: { color: 'primary' }
      },
      MuiButton: {
        disableRipple: true
      },
      MuiListItem: {
        disableRipple: true
      },
      MuiTooltip: {
        arrow: true
      },
      MuiAccordionSummary: {
        expandIcon: <AccordionExpandIcon />
      }
    },
    ...(isTesting() && { transitions: { create: () => 'none' } })
  })
  normalTheme.overrides = makeOverrides(normalTheme)
  normalTheme.shadows = shadows

  return normalTheme
}

export default makeNormalTheme
