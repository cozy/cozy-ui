import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MuiButton from '@material-ui/core/Button'

import Icon from '../Icon'
import SpinnerIcon from '../Icons/Spinner'

const DefaultButton = forwardRef(
  ({ className, color, label, busy, disabled, endIcon, ...props }, ref) => {
    return (
      <MuiButton
        {...props}
        ref={ref}
        className={cx({ [`customColor-${color}`]: color }, className)}
        color="primary"
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

const Buttons = forwardRef(({ variant, ...props }, ref) => {
  switch (variant) {
    case 'ghost':
      return (
        <DefaultButton
          className="ghost"
          variant="outlined"
          {...props}
          ref={ref}
        />
      )

    case 'secondary':
      return <DefaultButton variant="outlined" {...props} ref={ref} />

    case 'text':
      return <DefaultButton variant="text" {...props} ref={ref} />

    case 'primary':
      return <DefaultButton {...props} ref={ref} />

    default:
      return <DefaultButton {...props} ref={ref} />
  }
})
Buttons.displayName = 'Buttons'

Buttons.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'text']),
  color: PropTypes.oneOf(['success', 'error', 'warning', 'info'])
}

Buttons.defaultProps = {
  variant: 'primary'
}

export default Buttons
