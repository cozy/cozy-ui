import React from 'react'
import MUIDialogContent from '@material-ui/core/DialogContent'

const DialogContent = ({ unfixed, withDividers, children, ...props }) => {
  const style = unfixed ? { style: { overflowY: 'initial' } } : {}
  const className = withDividers ? { className: 'modal_content_dividers' } : {}

  return (
    <MUIDialogContent {...props} {...style} {...className}>
      {children}
    </MUIDialogContent>
  )
}

export default DialogContent
