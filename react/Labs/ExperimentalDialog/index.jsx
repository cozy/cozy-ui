import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import PropTypes from 'prop-types'
import AppTitle from '../../AppTitle'

export const ExperimentalDialog = props => {
  const { onClose, fullScreen, children, open, scroll, ...otherProps } = props
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      aria-labelledby="dialog-title"
      scroll={scroll}
      {...otherProps}
    >
      {children}
    </Dialog>
  )
}
ExperimentalDialog.defaultProps = {
  open: true,
  scroll: 'paper'
}

ExperimentalDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  fullScreen: PropTypes.bool,
  scroll: PropTypes.oneOf(['paper', 'body'])
}
export const ExperimentalDialogTitle = ({ children }) => {
  return (
    <DialogTitle disableTypography>
      <AppTitle id="dialog-title">{children}</AppTitle>
    </DialogTitle>
  )
}

export const ExperimentalDialogActions = ({ layout, children }) => {
  const className = layout === 'row' ? { className: 'modal_actions_row' } : {}
  return <DialogActions {...className}>{children}</DialogActions>
}

export default withMobileDialog()(ExperimentalDialog)
