import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MuiButton from '@material-ui/core/Button'

import Icon from '../Icon'
import SpinnerIcon from '../Icons/Spinner'

const DefaultButton = ({
  className,
  color,
  label,
  busy,
  disabled,
  endIcon,
  ...props
}) => {
  return (
    <MuiButton
      {...props}
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

DefaultButton.defaultProps = {
  variant: 'contained',
  color: 'primary'
}

const Buttons = ({ variant, ...props }) => {
  switch (variant) {
    case 'ghost':
      return <DefaultButton className="ghost" variant="outlined" {...props} />

    case 'secondary':
      return <DefaultButton variant="outlined" {...props} />

    case 'text':
      return <DefaultButton variant="text" {...props} />

    case 'primary':
      return <DefaultButton {...props} />

    default:
      return <DefaultButton {...props} />
  }
}

Buttons.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'text']),
  color: PropTypes.oneOf(['success', 'error', 'warning', 'info'])
}

Buttons.defaultProps = {
  variant: 'primary'
}

export default Buttons
