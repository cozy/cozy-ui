import MuiSnackbar from '@material-ui/core/Snackbar'
import React, { forwardRef } from 'react'

const Snackbar = forwardRef(({ children, ...props }, ref) => {
  return (
    <MuiSnackbar
      ref={ref}
      anchorOrigin={{
        vertical: 'bottom',
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
