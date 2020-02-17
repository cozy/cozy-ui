import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'

import withMobileDialog from '@material-ui/core/withMobileDialog'

import AppTitle from '../../AppTitle'

export const ExperimentalModal = props => {
  const { dismissAction, fullScreen, children, open } = props
  return (
    <Dialog
      open={open}
      onClose={dismissAction}
      fullScreen={fullScreen}
      aria-labelledby="dialog-title"
      scroll={'paper'}
    >
      {children}
    </Dialog>
  )
}
ExperimentalModal.defaultProps = {
  open: true
}
export const ExperimentalModalTitle = ({ children }) => {
  return (
    <DialogTitle disableTypography>
      <AppTitle id="dialog-title">{children}</AppTitle>
    </DialogTitle>
  )
}

export const ExperimentalModalActions = ({ layout, children }) => {
  const className = layout === 'row' ? { className: 'modal_actions_row' } : {}
  return <DialogActions {...className}>{children}</DialogActions>
}

export default withMobileDialog()(ExperimentalModal)
