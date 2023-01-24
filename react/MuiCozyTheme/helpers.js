import { alpha, lighten, darken } from '../styles'

export const makeAlertColor = (theme, color) => {
  const themeColorByColor = {
    primary: theme.palette[color].main,
    secondary: theme.palette.text.primary
  }

  // same approach as Mui, see https://github.com/mui/material-ui/blob/v4.x/packages/material-ui-lab/src/Alert/Alert.js#L28
  return {
    '&-standard': {
      color: darken(themeColorByColor[color], 0.6),
      backgroundColor: lighten(themeColorByColor[color], 0.9),
      '& $icon': {
        color: themeColorByColor[color]
      },
      '& $action': {
        '& button[title="Close"]': {
          color: theme.palette.text.secondary
        }
      }
    },
    '&-outlined': {
      color: darken(themeColorByColor[color], 0.6),
      border: `1px solid ${themeColorByColor[color]}`,
      '& $icon': {
        color: themeColorByColor[color]
      }
    },
    '&-filled': {
      backgroundColor:
        color === 'secondary'
          ? theme.palette.grey[600]
          : themeColorByColor[color]
    }
  }
}

export const makeAlertInvertedColor = (theme, color) => {
  return {
    '&-standard': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
      '& $icon': {
        color: theme.palette[color].main
      }
    },
    '&-outlined': {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      '& $icon': {
        color: theme.palette[color].main
      }
    },
    '&-filled': {
      color: theme.palette[color].contrastText,
      backgroundColor:
        color === 'secondary'
          ? theme.palette.grey[200]
          : theme.palette[color].main,
      '& $icon': {
        color: theme.palette[color].contrastText
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

export const addStyleOverrides = overrides => {
  const components = {}
  Object.entries(overrides)
    .map(([key, value]) => ({
      [key]: { styleOverrides: value }
    }))
    .forEach(value => Object.assign(components, value))

  return components
}
