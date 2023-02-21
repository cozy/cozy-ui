import React, { forwardRef } from 'react'
import MuiSnackbar from '@material-ui/core/Snackbar'
import useBreakpoints from '../../hooks/useBreakpoints'

const Snackbar = forwardRef(({ children, ...props }, ref) => {
  const { isDesktop } = useBreakpoints()

  return (
    <MuiSnackbar
      ref={ref}
      anchorOrigin={{
        vertical: !isDesktop ? 'bottom' : 'top',
        horizontal: 'center'
      }}
      {...props}
    >
      {children}
    </MuiSnackbar>
  )
})

Snackbar.displayName = 'Snackbar'

Snackbar.defaultProps = {
  autoHideDuration: 2000
}

export default Snackbar
