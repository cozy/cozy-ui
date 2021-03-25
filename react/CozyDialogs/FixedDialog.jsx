import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import Dialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'
import Divider from '../MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedDialog = props => {
  const { onClose, title, content, actions, actionsLayout } = props
  const {
    dialogProps,
    dialogTitleProps,
    fullScreen,
    id,
    dialogActionsProps
  } = useCozyDialog(props)

  return (
    <Dialog {...dialogProps}>
      {!fullScreen && onClose && (
        <DialogCloseButton
          data-test-id={`modal-close-button-${id}`}
          onClick={onClose}
        />
      )}
      <DialogTitle {...dialogTitleProps} className="u-ellipsis">
        {fullScreen ? <DialogBackButton onClick={onClose} /> : null}
        {title}
      </DialogTitle>
      <Divider />
      <DialogContent>
        <div className="dialogContentInner">{content}</div>
      </DialogContent>
      <Divider />
      <DialogActions
        {...dialogActionsProps}
        disableSpacing
        className={cx({ columnLayout: actionsLayout == 'column' })}
      >
        {actions}
      </DialogActions>
    </Dialog>
  )
}

FixedDialog.propTypes = dialogPropTypes

export default FixedDialog
