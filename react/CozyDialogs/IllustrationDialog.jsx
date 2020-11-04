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
import DialogTransition from './DialogTransition'

const IllustrationDialog = ({
  open,
  opened, // Deprecated
  onClose,
  title,
  content,
  actions,
  actionsLayout,
  size
}) => {
  const { paperClassName, isFullscreen, id } = useCozyDialog(size)

  return (
    <Dialog
      open={open || opened}
      onClose={onClose}
      TransitionComponent={DialogTransition}
      TransitionProps={{ isFullscreen }}
      fullScreen={isFullscreen}
      classes={{ paper: paperClassName }}
      aria-labelledby={`modal-title-${id}`}
    >
      {!isFullscreen && (
        <DialogCloseButton
          data-test-id={`modal-close-button-${id}`}
          onClick={onClose}
        />
      )}
      <DialogContent>
        <div className="dialogContentInner withFluidActions">
          <DialogTitle
            id={`modal-title-${id}`}
            disableTypography
            className="dialogTitleFluid u-w-100"
          >
            {isFullscreen ? <DialogBackButton onClick={onClose} /> : null}
            <div className="u-flex u-flex-justify-center">{title}</div>
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

IllustrationDialog.propTypes = dialogPropTypes

export default IllustrationDialog
