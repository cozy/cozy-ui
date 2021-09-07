import defaultPalette from '../../../../theme/palette.json'
import { getCssVariableValue } from '../../../utils/color'
import normalPalette from '../palette'

const invertedPalette = {
  ...normalPalette,
  type: 'dark',
  background: {
    default: getCssVariableValue('primaryColorDark'),
    paper: getCssVariableValue('primaryColor'),
    selected: getCssVariableValue('primaryColorDark')
  },
  primary: {
    main: '#FFFFFF'
  },
  secondary: {
    main: '#FFFFFF'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF'
  },
  success: {
    main: defaultPalette.Success['400']
  },
  error: {
    main: '#fcc0c0' // lighten(--errorColor, 70%)
  },
  divider: '#FFFFFF29' // 16% opacity
}

invertedPalette.action = {
  active: `${invertedPalette.primary.main}8A`, // 54% opacity
  hover: `${invertedPalette.primary.main}0A`, // 4% opacity
  selected: `${invertedPalette.primary.main}14`, // 8% opacity
  disabled: `${invertedPalette.primary.main}40`, // 26% opacity
  disabledBackground: `${invertedPalette.primary.main}1F`, // 12% opacity
  focus: `${invertedPalette.primary.main}1F` // 12% opacity
}

export default invertedPalette
