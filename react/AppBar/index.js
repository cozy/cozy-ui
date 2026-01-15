import MuiAppBar from '@material-ui/core/AppBar'
import PropTypes from 'prop-types'
import React from 'react'

import { makeStyles } from '../styles'

const useStyles = makeStyles(theme => ({
  colorError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  },
  colorWarning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText
  },
  colorInfo: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText
  },
  colorSuccess: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText
  }
}))

const CUSTOM_COLOR_CLASSES = {
  error: 'colorError',
  warning: 'colorWarning',
  info: 'colorInfo',
  success: 'colorSuccess'
}

const AppBar = React.forwardRef(({ color, className, ...props }, ref) => {
  const styles = useStyles()
  const appBarColor = CUSTOM_COLOR_CLASSES[color] ? 'default' : color
  const customColorClass = CUSTOM_COLOR_CLASSES[color]
    ? styles[CUSTOM_COLOR_CLASSES[color]]
    : undefined

  return (
    <MuiAppBar
      {...props}
      ref={ref}
      color={appBarColor}
      className={`${className || ''} ${customColorClass || ''}`}
    />
  )
})

AppBar.propTypes = {
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'transparent',
    'error',
    'warning',
    'info',
    'success'
  ])
}

AppBar.defaultProps = {
  color: 'default'
}

export default AppBar
