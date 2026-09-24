import MuiButton from '@material-ui/core/Button'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import { makeStyles } from '../styles'

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.body2,
    minHeight: 40,
    borderRadius: 12,
    '&$disabled': {
      color: theme.palette.text.disabled
    }
  },
  disabled: {},
  startIcon: {
    marginRight: 7,
    '& > *': { width: 12, height: 12, fontSize: 12 }
  },
  primary: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `linear-gradient(${theme.palette.action.hover}, ${theme.palette.action.hover})`,
      '@media (hover: none)': { backgroundImage: 'none' }
    }
  },
  secondary: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    '&:hover': { backgroundColor: theme.palette.background.paper }
  }
}))

const NavbarButton = forwardRef(
  ({ icon, text, variant = 'primary', className, ...props }, ref) => {
    const { root, disabled, startIcon, ...variants } = useStyles()

    return (
      <MuiButton
        ref={ref}
        variant="contained"
        color="primary"
        disableElevation
        classes={{ root, disabled, startIcon }}
        className={cx(variants[variant], className)}
        startIcon={icon}
        {...props}
      >
        {text}
      </MuiButton>
    )
  }
)

NavbarButton.displayName = 'NavbarButton'

NavbarButton.propTypes = {
  /** Icon displayed before the text */
  icon: PropTypes.node.isRequired,
  /** Text of the button */
  text: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string
}

export default NavbarButton
