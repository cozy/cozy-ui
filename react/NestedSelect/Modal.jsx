import React from 'react'

import NestedSelect from './NestedSelect'
import styles from './styles.styl'
import { useCozyDialog, DialogCloseButton } from '../CozyDialogs'
import Dialog, { DialogTitle, DialogContent } from '../Dialog'
import Icon from '../Icon'
import IconButton from '../IconButton'
import LeftIcon from '../Icons/Left'
import List from '../List'

const NestedSelectDialogHeader = ({ onClickBack, showBack, title }) => {
  const { dialogTitleProps } = useCozyDialog({
    open: true,
    onClose: true
  })

  if (!title) return null

  return (
    <DialogTitle {...dialogTitleProps}>
      <div className="u-flex u-flex-items-center">
        {showBack && (
          <div className={styles.Modal__back}>
            <IconButton size="medium" onClick={onClickBack}>
              <Icon icon={LeftIcon} />
            </IconButton>
          </div>
        )}
        <div className="u-ellipsis u-ov-hidden">{title}</div>
      </div>
    </DialogTitle>
  )
}

const NestedSelectDialogContent = ({ children }) => {
  return (
    <DialogContent className="u-p-0">
      <List>{children}</List>
    </DialogContent>
  )
}

const NestedSelectModal = props => {
  const { dialogProps } = useCozyDialog({ open: true })

  return (
    <Dialog {...dialogProps} onClose={props.onClose}>
      <DialogCloseButton
        onClick={props.onClose}
        data-testid="modal-close-button-nested-select"
      />
      <NestedSelect
        HeaderComponent={NestedSelectDialogHeader}
        ContentComponent={NestedSelectDialogContent}
        {...props}
      />
    </Dialog>
  )
}

export default NestedSelectModal
