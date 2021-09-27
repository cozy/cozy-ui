import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import MuiBadge from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/core/styles'

const LARGE_BADGE = '1.25rem'
const MEDIUM_BADGE = '1.125rem'
const SMALL_BADGE = '1rem'

const useStyles = makeStyles({
  badge: {
    padding: 0
  },
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
  dot: {
    '&$large': {
      height: '.875rem',
      minWidth: '.875rem'
    },
    '&$medium': {
      height: '.75rem',
      minWidth: '.75rem'
    },
    '&$small': {
      height: '.625rem',
      minWidth: '.625rem'
    }
  }
})

const Badge = ({ anchorOrigin, size, ...props }) => {
  const classes = useStyles(props)
  const {
    badge,
    top,
    bottom,
    left,
    right,
    large,
    medium,
    small,
    dot,
    ...customClasses
  } = classes

  const verticalClasses = { top, bottom }
  const horizontalClasses = { left, right }
  const sizeClasses = { large, medium, small }

  return (
    <MuiBadge
      classes={{
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
