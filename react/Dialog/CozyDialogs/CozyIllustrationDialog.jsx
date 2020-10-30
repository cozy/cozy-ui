import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useCozyDialog } from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogBackButton,
  DialogCloseButton
} from 'cozy-ui/transpiled/react/Dialog'
import DialogTransition from './DialogTransition'

const CozyIllustrationDialog = ({
  opened,
  onClose,
  title,
  content,
  actions,
  below,
  size
}) => {
  const { cssSize, isFullscreen, id } = useCozyDialog(size)

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
            className="dialogTitleFluid u-w-100"
          >
            {isFullscreen ? <DialogBackButton onClick={onClose} /> : null}
            <div className="u-flex u-flex-justify-center">{title}</div>
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

CozyIllustrationDialog.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  content: PropTypes.node,
  actions: PropTypes.node,
  below: PropTypes.bool,
  size: PropTypes.string
}

export default CozyIllustrationDialog
