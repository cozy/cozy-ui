import React from 'react'
import MUIDialogTitle from '@material-ui/core/DialogTitle'
import AppTitle from '../AppTitle'

const DialogTitle = ({ children }) => {
  return (
    <MUIDialogTitle disableTypography>
      <AppTitle id="dialog-title">{children}</AppTitle>
    </MUIDialogTitle>
  )
}

export default DialogTitle
