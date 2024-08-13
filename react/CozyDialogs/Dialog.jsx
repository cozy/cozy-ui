import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import MUIDialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'
import Divider from '../Divider'

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
    dividerProps,
    dialogActionsProps,
    dialogContentProps
  } = useCozyDialog(props)

  const onBackOrClose = onBack || onClose

  return (
    <MUIDialog {...dialogProps}>
      {!fullScreen && onClose && (
        <DialogCloseButton
          onClick={onClose}
          data-testid={`modal-close-button-${id}`}
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
      {title && (
        <>
          <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
          <Divider {...dividerProps} />
        </>
      )}
      <DialogContent {...dialogContentProps}>
        <div className="dialogContentInner withFluidActions">
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
    </MUIDialog>
  )
}

Dialog.propTypes = dialogPropTypes

export default Dialog
