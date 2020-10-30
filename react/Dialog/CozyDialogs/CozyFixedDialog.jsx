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
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'

const CozyFixedDialog = ({
  opened,
  onClose,
  title,
  content,
  actions,
  below,
  size
}) => {
  const { cssSize, isFullscreen } = useCozyDialog(size)

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      TransitionComponent={DialogTransition}
      TransitionProps={{ isFullscreen }}
      fullScreen={isFullscreen}
      classes={{ paper: cssSize }}
    >
      {!isFullscreen && <DialogCloseButton onClick={onClose} />}
      <DialogTitle disableTypography className="u-ellipsis">
        {isFullscreen ? <DialogBackButton onClick={onClose} /> : null}
        {title}
      </DialogTitle>
      <CardDivider />
      <DialogContent>
        <div className="dialogContentInner">{content}</div>
      </DialogContent>
      <CardDivider />
      <DialogActions
        disableActionSpacing
        className={cx({ dialogActionsBelow: below })}
      >
        {actions}
      </DialogActions>
    </Dialog>
  )
}

CozyFixedDialog.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  content: PropTypes.node,
  actions: PropTypes.node,
  below: PropTypes.bool,
  size: PropTypes.string
}

export default CozyFixedDialog
