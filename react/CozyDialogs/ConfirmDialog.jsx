import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const ConfirmDialog = props => {
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
          onClick={onClose}
          data-test-id={`modal-close-button-${id}`}
        />
      )}
      <DialogContent>
        <div className="dialogContentInner withFluidActions">
          <DialogTitle {...dialogTitleProps} className="dialogTitleFluid">
            {fullScreen ? <DialogBackButton onClick={onClose} /> : null}
            {title}
          </DialogTitle>
          {content}
          <DialogActions
            {...dialogActionsProps}
            disableSpacing
            className={cx('dialogActionsFluid', {
              columnLayout: actionsLayout == 'column'
            })}
          >
            {actions}
          </DialogActions>
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
