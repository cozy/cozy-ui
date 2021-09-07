import { getCssVariableValue } from '../../utils/color'

const normalPalette = {
  type: 'light',
  primary: {
    light: getCssVariableValue('primaryColorLight'),
    main: getCssVariableValue('primaryColor'),
    dark: getCssVariableValue('primaryColorDark'),
    contrastText: getCssVariableValue('primaryContrastTextColor')
  },
  error: {
    main: getCssVariableValue('errorColor')
  },
  secondary: {
    light: getCssVariableValue('secondaryColorLight'),
    main: getCssVariableValue('secondaryColor'),
    dark: getCssVariableValue('secondaryColorDark'),
    contrastText: getCssVariableValue('secondaryContrastTextColor')
  },
  text: {
    primary: getCssVariableValue('primaryTextColor'),
    secondary: getCssVariableValue('secondaryTextColor')
  },
  grey: {
    0: getCssVariableValue('white'),
    100: getCssVariableValue('paleGrey'),
    200: getCssVariableValue('silver'),
    300: getCssVariableValue('coolGrey'),
    400: getCssVariableValue('slateGrey'),
    800: getCssVariableValue('charcoalGrey'),
    900: getCssVariableValue('black')
  },
  divider: getCssVariableValue('dividerColor'),
  actions: {
    focus: 'rgba(0, 0, 0, 0.12)'
  }
}

normalPalette.background = {
  default: normalPalette.grey[100],
  selected: '#F5FAFF'
}

export default normalPalette
