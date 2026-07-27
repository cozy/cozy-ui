import MuiButton from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import { makeStyles } from '../styles'

const EXTENDED_COLORS = ['success', 'error', 'info', 'warning']
const GHOST_VARIANT = 'ghost'

const useStyles = makeStyles({
  buttonNew: {
    minHeight: '2.5rem'
  },
  sizeSmall: {
    minHeight: '2.25rem'
  },
  sizeLarge: {
    minHeight: '3rem'
  }
})

const ButtonNew = forwardRef(function ButtonNew(props, ref) {
  const {
    color = 'primary',
    variant = 'text',
    size = 'medium',
    loading = null,
    loadingPosition = 'center',
    loadingIndicator,
    disabled = false,
    className,
    startIcon: startIconProp,
    endIcon: endIconProp,
    children,
    ...other
  } = props

  const isExtendedColor = EXTENDED_COLORS.includes(color)
  const isGhost = variant === GHOST_VARIANT
  const isLoading = loading === true
  const isControlledLoading = typeof loading === 'boolean'
  const isCenterLoading = isControlledLoading && loadingPosition === 'center'
  const classes = useStyles()
  const customColor = isExtendedColor ? color : 'primary'
  const effectiveVariant = isGhost ? 'outlined' : variant
  const muiColor =
    effectiveVariant === 'text' && !isExtendedColor ? color : 'primary'

  const indicator = loadingIndicator ?? (
    <CircularProgress color="inherit" size={16} />
  )
  const startIcon =
    isLoading && loadingPosition === 'start' ? indicator : startIconProp
  const endIcon =
    isLoading && loadingPosition === 'end' ? indicator : endIconProp
  const body = isCenterLoading ? (
    <>
      {children}
      {isLoading && <span className="loadingIndicator">{indicator}</span>}
    </>
  ) : (
    children
  )

  return (
    <MuiButton
      ref={ref}
      color={muiColor}
      variant={isGhost ? 'outlined' : variant}
      size={size}
      disabled={disabled || isLoading}
      className={cx(
        className,
        classes.buttonNew,
        size === 'small' && classes.sizeSmall,
        size === 'large' && classes.sizeLarge,
        `customColor-${customColor}`,
        isGhost && GHOST_VARIANT,
        isLoading && 'loading',
        isControlledLoading && `loadingPosition-${loadingPosition}`
      )}
      startIcon={startIcon}
      endIcon={endIcon}
      {...other}
    >
      {body}
    </MuiButton>
  )
})

ButtonNew.displayName = 'ButtonNew'

ButtonNew.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'inherit',
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning'
    ]),
    PropTypes.string
  ]),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  disableElevation: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  endIcon: PropTypes.node,
  focusVisibleClassName: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.node,
  loadingPosition: PropTypes.oneOf(['center', 'end', 'start']),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string
  ]),
  startIcon: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['contained', 'outlined', 'text', 'ghost']),
    PropTypes.string
  ])
}

ButtonNew.defaultProps = {
  color: 'primary',
  variant: 'text',
  size: 'medium',
  loadingPosition: 'center',
  loading: null,
  disabled: false
}

export default ButtonNew
