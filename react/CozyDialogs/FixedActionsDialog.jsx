import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useCozyDialog } from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'

import DialogTransition from './DialogTransition'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedActionsDialog = ({
  opened,
  onClose,
  title,
  content,
  actions,
  actionsLayout,
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
        <div className="dialogContentInner">
          <DialogTitle
            id={`modal-title-${id}`}
            disableTypography
            className="dialogTitleFluid"
          >
            {isFullscreen ? <DialogBackButton onClick={onClose} /> : null}
            {title}
          </DialogTitle>
          {content}
        </div>
      </DialogContent>
      <CardDivider />
      <DialogActions
        disableActionSpacing
        className={cx({ columnLayout: actionsLayout == 'column' })}
      >
        {actions}
      </DialogActions>
    </Dialog>
  )
}

FixedActionsDialog.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  content: PropTypes.node,
  actions: PropTypes.node,
  actionsLayout: PropTypes.oneOf(['row', 'column']),
  size: PropTypes.string
}

export default FixedActionsDialog
