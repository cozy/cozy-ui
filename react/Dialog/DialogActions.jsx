import React from 'react'
import MUIDialogActions from '@material-ui/core/DialogActions'

const DialogActions = ({ below, children }) => {
  const className = below ? { className: 'modal_actions_below' } : {}

  return <MUIDialogActions {...className}>{children}</MUIDialogActions>
}

export default DialogActions
