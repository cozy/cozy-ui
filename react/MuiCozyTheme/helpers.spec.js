import { makeChipStyleByColor } from './helpers'
import { alpha } from '../styles'

const theme = {
  palette: {
    action: {
      disabledBackground: 'disabled-background',
      ghostOpacity: 0.08,
      hover: 'hover',
      hoverGhostOpacity: 0.16,
      hoverOpacity: 0.04
    },
    border: {
      main: 'border',
      opacity: 0.32
    },
    error: {
      contrastText: 'error-contrast',
      dark: 'error-dark',
      main: '#ff3347'
    },
    primary: {
      contrastText: 'primary-contrast',
      dark: 'primary-dark',
      main: '#0a84ff'
    },
    text: {
      disabled: 'disabled',
      icon: 'icon',
      primary: 'text-primary',
      secondary: 'text-secondary'
    }
  }
}

describe('makeChipStyleByColor', () => {
  it('uses the primary ghost colors for an active primary chip', () => {
    const activeStyle = makeChipStyleByColor(theme, 'primary')['&$colorPrimary']

    expect(activeStyle).toMatchObject({
      color: theme.palette.primary.main,
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.ghostOpacity
      ),
      '& $icon, & $deleteIcon': {
        color: theme.palette.primary.main,
        fill: theme.palette.primary.main
      },
      '&$clickable, &$deletable': {
        '&:hover, &:focus': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.hoverGhostOpacity
          )
        }
      }
    })
  })

  it('keeps semantic active chips filled', () => {
    const activeStyle = makeChipStyleByColor(theme, 'error')['&$colorPrimary']

    expect(activeStyle).toMatchObject({
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
      '& $icon, & $deleteIcon': {
        color: theme.palette.error.contrastText,
        fill: theme.palette.error.contrastText
      },
      '&$clickable, &$deletable': {
        '&:hover, &:focus': {
          backgroundColor: theme.palette.error.dark
        }
      }
    })
  })
})
