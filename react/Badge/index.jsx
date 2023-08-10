import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import MuiBadge from '@material-ui/core/Badge'

const Badge = ({
  classes = {},
  size,
  withBorder,
  withGreyBorder,
  overlap: overlapProp,
  center,
  ...props
}) => {
  const sizeClasses = {
    small: 'badgeSizeSmall',
    medium: 'badgeSizeMedium',
    large: 'badgeSizeLarge'
  }

  const centerClasses = {
    small: 'badgeCenterSmall',
    medium: 'badgeCenterMedium',
    large: 'badgeCenterLarge'
  }

  // due to deprecated prop circle and rectangle
  // https://github.com/mui/material-ui/releases/tag/v4.12.4
  const overlap =
    overlapProp === 'circle'
      ? 'circular'
      : overlapProp === 'rectangle'
      ? 'rectangular'
      : overlapProp

  return (
    <MuiBadge
      classes={{
        root: cx(center ? centerClasses[size] : null),
        badge: cx(
          sizeClasses[size],
          withBorder
            ? withGreyBorder
              ? 'badgeGreyBorder'
              : 'badgeBorder'
            : null,
          center ? 'badgeCenter' : null
        ),
        ...classes
      }}
      overlap={overlap}
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
  /** Display a border around the badge */
  withBorder: PropTypes.bool,
  /** Set border color into grey */
  withGreyBorder: PropTypes.bool,
  /** Center the badge */
  center: PropTypes.bool
}

Badge.defaultProps = {
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  size: 'medium',
  showZero: true,
  withBorder: true,
  withGreyBorder: false,
  overlap: 'circular',
  center: false
}

export default Badge
