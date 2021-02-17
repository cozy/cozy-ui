import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import MuiBadge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'

const LARGE_BADGE = '1.25rem'
const MEDIUM_BADGE = '1.125rem'
const SMALL_BADGE = '1rem'

const LARGE_DOT = '.875rem'
const MEDIUM_DOT = '.75rem'
const SMALL_DOT = '.625rem'

const customStyles = theme => ({
  badge: {
    padding: 0
  },
  root: {},
  top: {
    top: '16%'
  },
  bottom: {
    top: '82%',
    '&$large': {
      top: '86%'
    }
  },
  left: {
    right: '90%'
  },
  right: {
    right: '10%'
  },
  large: {
    height: LARGE_BADGE,
    minWidth: LARGE_BADGE,
    fontSize: '.6875rem'
  },
  medium: {
    height: MEDIUM_BADGE,
    minWidth: MEDIUM_BADGE,
    fontSize: '.625rem'
  },
  small: {
    height: SMALL_BADGE,
    minWidth: SMALL_BADGE,
    fontSize: '.5rem',
    lineHeight: '0',
    padding: '0 3px'
  },
  colorPrimary: {
    border: `2px solid ${theme.palette.primary.contrastText}`
  },
  colorSecondary: {
    border: `2px solid ${theme.palette.secondary.contrastText}`
  },
  colorError: {
    border: `2px solid ${theme.palette.error.contrastText}`
  },
  dot: {
    borderRadius: '100%',
    padding: 0,
    '&$large': {
      height: LARGE_DOT,
      minWidth: LARGE_DOT
    },
    '&$medium': {
      height: MEDIUM_DOT,
      minWidth: MEDIUM_DOT
    },
    '&$small': {
      height: SMALL_DOT,
      minWidth: SMALL_DOT
    }
  }
})

const Badge = withStyles(customStyles)(
  ({ classes, anchorOrigin, size, ...props }) => {
    const {
      badge,
      colorPrimary,
      colorSecondary,
      colorError,
      dot,
      top,
      bottom,
      left,
      right,
      large,
      medium,
      small,
      ...customClasses
    } = classes
    const verticalClasses = { top, bottom }
    const horizontalClasses = { left, right }
    const sizeClasses = { large, medium, small }

    return (
      <MuiBadge
        classes={{
          colorPrimary,
          colorSecondary,
          colorError,
          dot,
          badge: cx(
            badge,
            verticalClasses[anchorOrigin.vertical],
            horizontalClasses[anchorOrigin.horizontal],
            sizeClasses[size]
          ),
          ...customClasses
        }}
        {...props}
      />
    )
  }
)

Badge.propTypes = {
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'right']),
    vertical: PropTypes.oneOf(['bottom', 'top'])
  }),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showZero: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'dot'])
}

Badge.defaultProps = {
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  size: 'medium',
  showZero: true
}

export default Badge
