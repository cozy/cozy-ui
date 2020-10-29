import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useCozyDialog } from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogBackButton,
  DialogCloseButton,
  DialogTransition
} from 'cozy-ui/transpiled/react/Dialog'

const CozyConfirmDialog = ({
  opened,
  onClose,
  title,
  content,
  actions,
  below
}) => {
  const { cssSize, isFullscreen } = useCozyDialog('S')

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      TransitionComponent={DialogTransition}
      fullScreen={isFullscreen}
      classes={{ paper: cssSize }}
    >
      {!isFullscreen && <DialogCloseButton onClick={onClose} />}
      <DialogContent>
        <div className="dialogContentInner withFluidActions">
          <DialogTitle disableTypography className="dialogTitleFluid">
            {isFullscreen ? <DialogBackButton onClick={onClose} /> : null}
            {title}
          </DialogTitle>
          {content}
          <DialogActions
            disableActionSpacing
            className={cx('dialogActionsFluid', {
              dialogActionsBelow: below
            })}
          >
            {actions}
          </DialogActions>
        </div>
      </DialogContent>
    </Dialog>
  )
}

CozyConfirmDialog.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  content: PropTypes.node,
  actions: PropTypes.node,
  below: PropTypes.bool
}

export default CozyConfirmDialog
