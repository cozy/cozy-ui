import React, { forwardRef } from 'react'

import useBreakpoints from '../providers/Breakpoints'
import { makeStyles } from '../styles'
import Button from '../Buttons'
import Typography from '../Typography'
import Icon from '../Icon'

const useDesktopStyles = makeStyles({
  root: {
    border: 'none !important', // to force also on disabled status
    '&:hover': {
      border: 'none'
    }
  }
})

const useMobileStyles = makeStyles({
  root: {
    display: 'block',
    height: '100%',
    flex: '1 1 0',
    padding: 0,
    border: 'none !important', // to force also when disabled
    '&:hover': {
      border: 'none'
    }
  },
  label: { textTransform: 'none' },
  startIcon: {
    marginRight: 0,
    marginBottom: 2
  }
})

const ResponsiveAction = forwardRef(({ action, disabled, onClick }, ref) => {
  const { isMobile } = useBreakpoints()
  const useStyles = isMobile ? useMobileStyles : useDesktopStyles
  const styles = useStyles()

  return (
    <Button
      ref={ref}
      classes={styles}
      variant="secondary"
      startIcon={<Icon icon={action.icon} />}
      label={
        isMobile ? (
          <Typography
            variant="caption"
            color={disabled ? 'inherit' : 'textPrimary'}
          >
            {action.label}
          </Typography>
        ) : (
          action.label
        )
      }
      disabled={disabled}
      onClick={onClick}
    />
  )
})

ResponsiveAction.displayName = 'ResponsiveAction'

export default ResponsiveAction
