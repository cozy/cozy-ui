import React from 'react'
import MUIDialogActions from '@material-ui/core/DialogActions'

const DialogActions = ({ layout, children }) => {
  const className = layout === 'row' ? { className: 'modal_actions_row' } : {}
  return <MUIDialogActions {...className}>{children}</MUIDialogActions>
}

export default DialogActions
