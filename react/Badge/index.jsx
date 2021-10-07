import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import MuiBadge from '@material-ui/core/Badge'

const Badge = ({ classes = {}, size, withBorder, ...props }) => {
  const sizeClasses = {
    small: 'badgeSizeSmall',
    medium: 'badgeSizeMedium',
    large: 'badgeSizeLarge'
  }

  return (
    <MuiBadge
      classes={{
        badge: cx(sizeClasses[size], withBorder ? 'badgeBorder' : null),
        ...classes
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
  variant: PropTypes.oneOf(['standard', 'dot']),
  withBorder: PropTypes.bool
}

Badge.defaultProps = {
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  size: 'medium',
  showZero: true,
  withBorder: true,
  overlap: 'circle'
}

export default Badge
