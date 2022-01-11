import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import MUIDialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'
import Divider from '../MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const Dialog = props => {
  const { onClose, onBack, title, content, actions, actionsLayout } = props
  const {
    dialogProps,
    dialogTitleProps,
    fullScreen,
    id,
    dialogActionsProps,
    dialogContentProps
  } = useCozyDialog(props)

  const onBackOrClose = onBack || onClose

  return (
    <MUIDialog {...dialogProps}>
      {!fullScreen && onClose && (
        <DialogCloseButton
          onClick={onClose}
          data-test-id={`modal-close-button-${id}`}
        />
      )}
      {!fullScreen && onBack && (
        <DialogBackButton
          onClick={onBack}
          data-test-id={`modal-back-button-${id}`}
        />
      )}
      {fullScreen && onBackOrClose && (
        <DialogBackButton
          data-test-id={`modal-backclose-button-${id}`}
          onClick={onBackOrClose}
        />
      )}
      {title && (
        <>
          <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
          <Divider />
        </>
      )}
      <DialogContent {...dialogContentProps}>
        <div className="dialogContentInner withFluidActions">
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
    </MUIDialog>
  )
}

Dialog.propTypes = dialogPropTypes

export default Dialog
