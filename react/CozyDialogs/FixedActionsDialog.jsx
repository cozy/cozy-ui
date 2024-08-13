import React from 'react'
import cx from 'classnames/dedupe'

import useCozyDialog from './useCozyDialog'
import Dialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'
import Divider from '../Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedActionsDialog = props => {
  const { onClose, onBack, title, content, actions, actionsLayout } = props
  const {
    dialogProps,
    dialogTitleProps,
    fullScreen,
    id,
    dividerProps,
    dialogActionsProps,
    dialogContentProps
  } = useCozyDialog({ ...props, isFluidTitle: true })

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
      <DialogContent {...dialogContentProps}>
        <div className="dialogContentInner">
          {title && (
            <div className="dialogTitleFluidContainer">
              <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
            </div>
          )}
          {content}
        </div>
      </DialogContent>
      <Divider {...dividerProps} />
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

FixedActionsDialog.propTypes = dialogPropTypes

export default FixedActionsDialog
