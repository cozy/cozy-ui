import React, { forwardRef } from 'react'
import MuiSnackbar from '@material-ui/core/Snackbar'

const Snackbar = forwardRef(({ children, ...props }, ref) => {
  return (
    <MuiSnackbar ref={ref} {...props}>
      {children}
    </MuiSnackbar>
  )
})

Snackbar.displayName = 'Snackbar'

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center'
  }
}

export default Snackbar
