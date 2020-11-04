import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import MUIDialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const Dialog = ({
  open,
  opened, // Deprecated
  onClose,
  title,
  content,
  actions,
  actionsLayout,
  size
}) => {
  const { dialogProps, dialogTitleProps, fullScreen, id } = useCozyDialog(size)

  return (
    <MUIDialog open={open || opened} onClose={onClose} {...dialogProps}>
      {!fullScreen && (
        <DialogCloseButton
          onClick={onClose}
          data-test-id={`modal-close-button-${id}`}
        />
      )}
      <DialogTitle {...dialogTitleProps} className="u-ellipsis">
        {fullScreen ? <DialogBackButton onClick={onClose} /> : null}
        {title}
      </DialogTitle>
      <CardDivider />
      <DialogContent>
        <div className="dialogContentInner withFluidActions">
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
    </MUIDialog>
  )
}

Dialog.propTypes = dialogPropTypes

export default Dialog
