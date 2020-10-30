import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useCozyDialog } from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'

import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'
import DialogTransition from './DialogTransition'

const ConfirmDialog = ({
  opened,
  onClose,
  title,
  content,
  actions,
  actionsLayout
}) => {
  const { cssSize, isFullscreen, id } = useCozyDialog('S')

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      TransitionComponent={DialogTransition}
      TransitionProps={{ isFullscreen }}
      fullScreen={isFullscreen}
      classes={{ paper: cssSize }}
      aria-labelledby={`modal-title-${id}`}
    >
      {!isFullscreen && <DialogCloseButton onClick={onClose} />}
      <DialogContent>
        <div className="dialogContentInner withFluidActions">
          <DialogTitle
            id={`modal-title-${id}`}
            disableTypography
            className="dialogTitleFluid"
          >
            {isFullscreen ? <DialogBackButton onClick={onClose} /> : null}
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

ConfirmDialog.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  content: PropTypes.node,
  actions: PropTypes.node,
  actionsLayout: PropTypes.oneOf(['row', 'column'])
}

export default ConfirmDialog
