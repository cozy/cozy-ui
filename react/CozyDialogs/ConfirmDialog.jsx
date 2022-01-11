import React from 'react'
import cx from 'classnames/dedupe'

import useCozyDialog from './useCozyDialog'
import Dialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const ConfirmDialog = props => {
  const { onClose, onBack, title, content, actions, actionsLayout } = props
  const {
    dialogProps,
    dialogTitleProps,
    fullScreen,
    id,
    dialogActionsProps,
    dialogContentProps
  } = useCozyDialog({ ...props, isFluidTitle: true })

  const onBackOrClose = onBack || onClose

  return (
    <Dialog {...dialogProps}>
      {!fullScreen && onClose && (
        <DialogCloseButton
          onClick={onClose}
          data-test-id={`modal-close-button-${id}`}
        />
      )}
      {!fullScreen && onBack && (
        <DialogBackButton
          data-test-id={`modal-back-button-${id}`}
          onClick={onBack}
        />
      )}
      {fullScreen && onBackOrClose && (
        <DialogBackButton
          data-test-id={`modal-backclose-button-${id}`}
          onClick={onBackOrClose}
        />
      )}
      <DialogContent {...dialogContentProps}>
        <div className="dialogContentInner withFluidActions">
          {title && (
            <div className="dialogTitleFluidContainer">
              <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
            </div>
          )}
          {content}
          {actions && (
            <DialogActions
              {...dialogActionsProps}
              disableSpacing
              className={cx('dialogActionsFluid', {
                columnLayout: actionsLayout == 'column'
              })}
            >
              {actions}
            </DialogActions>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

ConfirmDialog.defaultProps = {
  size: 'small'
}

ConfirmDialog.propTypes = dialogPropTypes

export default ConfirmDialog
