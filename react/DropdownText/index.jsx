import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '../Typography'
import Icon from '../Icon'
import BottomIcon from '../Icons/Bottom'

const useStyles = makeStyles(theme => ({
  endIcon: {
    marginLeft: '5px'
  },
  typography: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: ({ spaceBetween }) =>
      spaceBetween ? 'space-between' : 'left',
    color: ({ disabled }) =>
      theme.palette.text[disabled ? 'disabled' : 'primary']
  }
}))

const endIconSizeByVariant = {
  h1: 24,
  h2: 17,
  h3: 15,
  h4: 14,
  h5: 13,
  h6: 12,
  body1: 12,
  body2: 11,
  caption: 10,
  subtitle1: 11,
  subtitle2: 10
}

const DropdownText = forwardRef(
  (
    {
      spaceBetween = false,
      variant = 'body1',
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const styles = useStyles({ spaceBetween, disabled })

    return (
      <Typography
        ref={ref}
        classes={{ root: styles.typography }}
        variant={variant}
        {...props}
      >
        {children}
        <Icon
          className={styles.endIcon}
          icon={BottomIcon}
          size={endIconSizeByVariant[variant]}
        />
      </Typography>
    )
  }
)

DropdownText.propTypes = {
  /** Whether there is a space between the label and the icon */
  spaceBetween: PropTypes.bool,
  /** Variant used by Typography component */
  variant: PropTypes.string,
  /** Whether the component is disabled */
  disabled: PropTypes.bool,
  children: PropTypes.node
}

export default DropdownText
