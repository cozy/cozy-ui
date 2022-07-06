import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import MuiChip from '@material-ui/core/Chip'

const Chips = ({
  label,
  variant = 'default',
  color = 'primary',
  className,
  ...props
}) => {
  return (
    <MuiChip
      className={cx(className, {
        noLabel: !label,
        ghost: variant === 'ghost',
        [`customColor-${color}`]: color
      })}
      label={label}
      variant={variant === 'active' ? 'default' : 'outlined'}
      color={variant === 'active' ? 'primary' : 'default'}
      {...props}
    />
  )
}

Chips.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOf(['default', 'active', 'ghost']),
  color: PropTypes.oneOf(['primary', 'success', 'error', 'warning', 'info']),
  className: PropTypes.string
}

export default Chips
