import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import MuiBadge from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/core/styles'
import omit from 'lodash/omit'

const LARGE_BADGE = '1.25rem'
const MEDIUM_BADGE = '1.125rem'
const SMALL_BADGE = '1rem'

const useStyles = makeStyles(theme => ({
  colorPrimary: ({ withBorder }) => ({
    border: withBorder ? `2px solid ${theme.palette.background.paper}` : 'none'
  }),
  colorSecondary: ({ withBorder }) => ({
    border: withBorder ? `2px solid ${theme.palette.background.paper}` : 'none'
  }),
  colorError: ({ withBorder }) => ({
    border: withBorder ? `2px solid ${theme.palette.background.paper}` : 'none'
  }),
  top: ({ overlap }) => {
    return overlap ? { top: '16%' } : undefined
  },
  bottom: ({ overlap }) => {
    return overlap ? { top: '82%', '&$large': { top: '86%' } } : undefined
  },
  left: ({ overlap }) => {
    return overlap ? { right: '90%' } : undefined
  },
  right: ({ overlap }) => {
    return overlap ? { right: '10%' } : undefined
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
}))

const Badge = ({ classes = {}, anchorOrigin, size, ...props }) => {
  const {
    colorPrimary,
    colorSecondary,
    colorError,
    top,
    bottom,
    left,
    right,
    large,
    medium,
    small,
    dot
  } = useStyles(props)

  const { badge: customBadge, ...customClasses } = classes

  const verticalClasses = { top, bottom }
  const horizontalClasses = { left, right }
  const sizeClasses = { large, medium, small }

  const { overlap, ...customProps } = props
  const anchorProps = {}
  if (!overlap) {
    customProps.overlap = 'rectangle'
    anchorProps.anchorOrigin = anchorOrigin
  }

  return (
    <MuiBadge
      classes={{
        dot,
        badge: cx(
          verticalClasses[anchorOrigin.vertical],
          horizontalClasses[anchorOrigin.horizontal],
          sizeClasses[size],
          colorPrimary,
          colorSecondary,
          colorError,
          customBadge
        ),
        ...customClasses
      }}
      {...omit(customProps, 'withBorder')}
      {...anchorProps}
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
  variant: PropTypes.oneOf(['standard', 'dot']),
  withBorder: PropTypes.bool,
  overlap: PropTypes.bool
}

Badge.defaultProps = {
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  size: 'medium',
  showZero: true,
  withBorder: true,
  overlap: true
}

export default Badge
