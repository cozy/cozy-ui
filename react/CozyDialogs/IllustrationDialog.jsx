import React from 'react'
import cx from 'classnames/dedupe'

import useCozyDialog from './useCozyDialog'
import Dialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const IllustrationDialog = props => {
  const { onClose, onBack, title, content, actions, actionsLayout } = props
  const {
    dialogProps,
    dialogTitleProps,
    id,
    fullScreen,
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
          onClick={onBack}
          data-testid={`modal-back-button-${id}`}
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
            <DialogTitle {...dialogTitleProps}>
              <div className="u-flex u-flex-justify-center">{title}</div>
            </DialogTitle>
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

IllustrationDialog.propTypes = dialogPropTypes

export default IllustrationDialog
