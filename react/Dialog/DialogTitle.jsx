import React from 'react'
import MUIDialogTitle from '@material-ui/core/DialogTitle'

const DialogTitle = ({ children, classes, ellipsis }) => {
  const className = ellipsis ? { className: 'u-ellipsis' } : {}

  return (
    <MUIDialogTitle disableTypography classes={classes} {...className}>
      {children}
    </MUIDialogTitle>
  )
}

export default DialogTitle
