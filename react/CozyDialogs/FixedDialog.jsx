import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import Dialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'
import Divider from '../Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedDialog = props => {
  const { onClose, onBack, title, content, actions, actionsLayout } = props
  const {
    dialogProps,
    dialogTitleProps,
    fullScreen,
    id,
    dividerProps,
    dialogActionsProps,
    dialogContentProps
  } = useCozyDialog(props)

  const onBackOrClose = onBack || onClose

  return (
    <Dialog {...dialogProps}>
      {!fullScreen && onClose && (
        <DialogCloseButton
          data-testid={`modal-close-button-${id}`}
          onClick={onClose}
        />
      )}
      {!fullScreen && onBack && (
        <DialogBackButton
          data-testid={`modal-back-button-${id}`}
          onClick={onBack}
        />
      )}
      {fullScreen && onBackOrClose && (
        <DialogBackButton
          data-testid={`modal-backclose-button-${id}`}
          onClick={onBackOrClose}
        />
      )}
      {title && (
        <>
          <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
          <Divider {...dividerProps} />
        </>
      )}
      <DialogContent {...dialogContentProps}>
        <div className="dialogContentInner">{content}</div>
      </DialogContent>
      <Divider />
      {actions && (
        <DialogActions
          {...dialogActionsProps}
          disableSpacing
          className={cx({ columnLayout: actionsLayout == 'column' })}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  )
}

FixedDialog.propTypes = dialogPropTypes

export default FixedDialog
