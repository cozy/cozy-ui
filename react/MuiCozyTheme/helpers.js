import { alpha } from '../styles'
import { getCssVariableValue } from '../utils/color'

export const makeAlertBackgroundColor = ({ theme, severity }) => ({
  standard: alpha(
    theme.palette[severity].main,
    theme.palette.background.contrastOpacity
  ),
  outlined: theme.palette[severity].main,
  filled: theme.palette[severity].main
})

export const makeAlertColor = (theme, severity) => {
  // same approach as Mui, see https://github.com/mui/material-ui/blob/v4.x/packages/material-ui-lab/src/Alert/Alert.js#L28
  return {
    '&-standard': {
      color: theme.palette.text.primary,
      backgroundColor: makeAlertBackgroundColor({ theme, severity }).standard,
      '& $icon': {
        color:
          severity === 'secondary'
            ? theme.palette.text.primary
            : theme.palette[severity].main
      },
      '& $action': {
        '& button[title="Close"]': {
          color: theme.palette.text.secondary
        }
      }
    },
    '&-outlined': {
      color: theme.palette.text.primary,
      border: `1px solid ${
        makeAlertBackgroundColor({ theme, severity }).outlined
      }`,
      '& $icon': {
        color:
          severity === 'secondary'
            ? theme.palette.text.primary
            : theme.palette[severity].main
      }
    },
    '&-filled': {
      color: theme.palette[severity].contrastText,
      backgroundColor: makeAlertBackgroundColor({ theme, severity }).filled,
      '& $action': {
        '& button[title="Close"]': {
          color: theme.palette[severity].contrastText
        }
      }
    }
  }
}

export const makeChipStyleByColor = (theme, color) => ({
  color: theme.palette.text[color] || theme.palette[color].main,
  borderColor:
    color === 'primary'
      ? theme.palette.border.main
      : alpha(theme.palette[color].main, theme.palette.border.opacity),
  '&$clickable, &$deletable': {
    '&:hover, &:focus': {
      borderColor:
        color === 'primary'
          ? theme.palette.border.main
          : alpha(theme.palette[color].main, theme.palette.border.opacity),
      backgroundColor:
        color === 'primary'
          ? theme.palette.action.hover
          : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
    }
  },
  '& $icon': {
    color:
      color === 'primary' ? theme.palette.text.icon : theme.palette[color].main,
    fill:
      color === 'primary' ? theme.palette.text.icon : theme.palette[color].main
  },
  '& $deleteIcon': {
    color:
      color === 'primary'
        ? theme.palette.text.secondary
        : theme.palette[color].main,
    fill:
      color === 'primary'
        ? theme.palette.text.secondary
        : theme.palette[color].main
  },
  '&$colorPrimary': {
    padding: '0 1px',
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
    '& $icon, & $deleteIcon': {
      color: theme.palette[color].contrastText,
      fill: theme.palette[color].contrastText
    },
    '&$disabled': {
      opacity: 1,
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
      '& $icon, & $deleteIcon': {
        color: theme.palette.text.disabled,
        fill: theme.palette.text.disabled
      }
    },
    '&$clickable, &$deletable': {
      '&:hover, &:focus': {
        backgroundColor: theme.palette[color].dark
      }
    }
  },
  '&.ghost': {
    borderWidth: '1px',
    borderStyle: 'dashed',
    '&:not($disabled)': {
      color: theme.palette[color].main,
      borderColor: alpha(
        theme.palette[color].main,
        theme.palette.border.ghostOpacity
      ),
      backgroundColor: alpha(
        theme.palette[color].main,
        theme.palette.action.ghostOpacity
      ),
      '& $icon, & $deleteIcon': {
        color: theme.palette[color].main,
        fill: theme.palette[color].main
      }
    },
    '&$clickable, &$deletable': {
      '&:hover, &:focus': {
        borderColor: alpha(
          theme.palette[color].main,
          theme.palette.border.ghostOpacity
        ),
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.hoverGhostOpacity
        )
      }
    }
  }
})

export const makeSecondaryButtonStyle = (theme, color) => ({
  color: theme.palette[color].main,
  borderColor: theme.palette[color].main,
  '&:hover': {
    backgroundColor: alpha(
      theme.palette[color].main,
      theme.palette.action.hoverOpacity
    ),
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  '&.ghost': {
    backgroundColor: alpha(
      theme.palette[color].main,
      theme.palette.action.ghostOpacity
    ),
    '&:hover': {
      backgroundColor: alpha(
        theme.palette[color].main,
        theme.palette.action.hoverGhostOpacity
      ),
      '@media (hover: none)': {
        backgroundColor: alpha(
          theme.palette[color].main,
          theme.palette.action.ghostOpacity
        )
      }
    }
  }
})

export const makeTextButtonStyle = (theme, color) => ({
  color: theme.palette[color].main,
  '&:hover': {
    backgroundColor: alpha(
      theme.palette[color].main,
      theme.palette.action.hoverOpacity
    ),
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
})

export const makeContainedButtonStyle = (theme, color) => ({
  color: theme.palette[color].contrastText,
  backgroundColor: theme.palette[color].main,
  '&:hover': {
    backgroundColor: theme.palette[color].dark,
    '@media (hover: none)': {
      backgroundColor: theme.palette[color].main
    }
  }
})

/**
 * @param {string} position one of `"top"` or `"bottom"`
 * @returns {string} `var(--flagship-${position}-height, 0px)`
 */
export const getFlagshipCssVar = position =>
  `var(--flagship-${position}-height, 0px)`

/**
 * @param {string} type - Type of the theme
 * @param {string} variant - Variant of the theme
 * @returns {array} Array of Mui shadows
 */
export const makeShadows = (type, variant) =>
  [...Array(25)].map((_, index) =>
    getCssVariableValue(`shadow${index}`, type, variant)
  )
