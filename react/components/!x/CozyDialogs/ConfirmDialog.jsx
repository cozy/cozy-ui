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
          data-testid={`modal-close-button-${id}`}
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
      <DialogContent {...dialogContentProps}>
        <div className="dialogContentInner withFluidActions">
          {title && (
            <div className="dialogTitleFluidContainer">
              <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
            </div>
          )}
          <div
            className={cx('dialogContentWrapper', {
              withActions: Boolean(actions)
            })}
          >
            {content}
          </div>
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
