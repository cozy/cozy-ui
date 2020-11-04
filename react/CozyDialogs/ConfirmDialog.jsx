import React from 'react'
import cx from 'classnames'
import omit from 'lodash/omit'

import useCozyDialog from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'
import DialogTransition from './DialogTransition'

const ConfirmDialog = ({
  open,
  opened, // Deprecated
  onClose,
  title,
  content,
  actions,
  actionsLayout
}) => {
  const { dialogProps, dialogTitleProps, fullScreen, id } = useCozyDialog(
    'small'
  )

  return (
    <Dialog open={open || opened} onClose={onClose} {...dialogProps}>
      {!fullScreen && (
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
            disableActionSpacing
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

ConfirmDialog.propTypes = omit(dialogPropTypes, 'size')

export default ConfirmDialog
