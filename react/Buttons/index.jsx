import MuiButton from '@material-ui/core/Button'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import Icon from '../Icon'
import SpinnerIcon from '../Icons/Spinner'

const CUSTOM_COLORS = ['success', 'error', 'warning', 'info']

const DefaultButton = forwardRef(
  (
    {
      variant,
      className,
      color,
      label,
      busy,
      disabled,
      height,
      endIcon,
      ...props
    },
    ref
  ) => {
    const customColor = CUSTOM_COLORS.includes(color) ? color : 'primary'
    const _color =
      variant === 'text' && !CUSTOM_COLORS.includes(color) ? color : 'primary'

    return (
      <MuiButton
        {...props}
        variant={variant}
        ref={ref}
        className={cx(
          { [`customColor-${customColor}`]: customColor },
          { [`customSize-${height}`]: height },
          className
        )}
        color={_color}
        disabled={disabled || busy}
        endIcon={
          busy ? (
            <Icon icon={SpinnerIcon} spin aria-hidden focusable="false" />
          ) : (
            endIcon
          )
        }
        disableElevation={true}
      >
        {label}
      </MuiButton>
    )
  }
)

DefaultButton.displayName = 'DefaultButton'

DefaultButton.defaultProps = {
  variant: 'contained',
  color: 'primary'
}

const Buttons = forwardRef(({ variant, className = '', ...props }, ref) => {
  switch (variant) {
    case 'ghost':
      return (
        <DefaultButton
          className={`ghost ${className}`}
          variant="outlined"
          {...props}
          ref={ref}
        />
      )

    case 'secondary':
      return (
        <DefaultButton
          variant="outlined"
          className={className}
          {...props}
          ref={ref}
        />
      )

    case 'text':
      return (
        <DefaultButton
          variant="text"
          className={className}
          {...props}
          ref={ref}
        />
      )

    case 'primary':
      return <DefaultButton className={className} {...props} ref={ref} />

    default:
      return <DefaultButton className={className} {...props} ref={ref} />
  }
})

Buttons.displayName = 'Buttons'

Buttons.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'text']),
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info'
  ]),
  height: PropTypes.oneOf(['default', 'auto'])
}

Buttons.defaultProps = {
  variant: 'primary',
  height: 'default'
}

export default Buttons
