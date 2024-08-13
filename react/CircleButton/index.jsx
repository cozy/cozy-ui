import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../styles'
import Box from '../Box'
import IconButton from '../IconButton'
import Typography from '../Typography'
import { makeTypoColor, makeButtonShadow } from './helpers'
import { getRandomUUID } from '../helpers/getRandomUUID'

const useStyles = makeStyles(theme => ({
  iconButton: {
    margin: '0 auto',
    boxShadow: ({ active, disabled }) =>
      makeButtonShadow({ theme, active, disabled }),
    backgroundColor: ({ active }) =>
      active ? theme.palette.primary.main : 'transparent',
    color: ({ active }) =>
      active ? theme.palette.primary.contrastText : theme.palette.text.icon,
    '&:hover': {
      backgroundColor: ({ active }) =>
        active ? theme.palette.primary.dark : theme.palette.action.hover,
      '@media (hover: none)': {
        backgroundColor: ({ active }) =>
          active ? theme.palette.primary.main : 'transparent'
      }
    }
  },
  typography: {
    marginTop: '0.25rem',
    color: ({ active, disabled }) => makeTypoColor({ theme, active, disabled })
  }
}))

const CircleButton = ({
  className,
  label,
  variant = 'default',
  disabled,
  fullWidth = false,
  'aria-label': ariaLabel,
  children,
  ...props
}) => {
  const styles = useStyles({ active: variant === 'active', disabled })
  const uuid = getRandomUUID()

  if (!ariaLabel && !label) {
    console.warn(`The "aria-label" or "label" property must be filled in.`)
  }

  return (
    <Box
      className={className}
      display="inline-flex"
      flexDirection="column"
      flexGrow={fullWidth ? 1 : undefined}
      minWidth="64px"
      flexBasis="64px"
      padding="8px 0 4px 0"
    >
      <IconButton
        className={styles.iconButton}
        disabled={disabled}
        {...(ariaLabel
          ? { 'aria-label': ariaLabel }
          : { 'aria-labelledby': uuid })}
        {...props}
      >
        {children}
      </IconButton>
      {label && (
        <Typography
          component="div"
          className={styles.typography}
          variant="caption"
          align="center"
          noWrap
          {...(!ariaLabel && { id: uuid })}
        >
          {label}
        </Typography>
      )}
    </Box>
  )
}

CircleButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['default', 'active']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default CircleButton
