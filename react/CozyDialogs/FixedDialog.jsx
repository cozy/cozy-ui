import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedDialog = props => {
  const {
    open,
    opened, // Deprecated
    onClose,
    title,
    content,
    actions,
    actionsLayout
  } = props
  const { dialogProps, dialogTitleProps, fullScreen, id } = useCozyDialog(props)

  return (
    <Dialog open={open || opened} onClose={onClose} {...dialogProps}>
      {!fullScreen && (
        <DialogCloseButton
          data-test-id={`modal-close-button-${id}`}
          onClick={onClose}
        />
      )}
      <DialogTitle {...dialogTitleProps} className="u-ellipsis">
        {fullScreen ? <DialogBackButton onClick={onClose} /> : null}
        {title}
      </DialogTitle>
      <CardDivider />
      <DialogContent>
        <div className="dialogContentInner">{content}</div>
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

FixedDialog.propTypes = dialogPropTypes

export default FixedDialog
