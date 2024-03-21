import React from 'react'

import { useCozyDialog, DialogCloseButton } from '../CozyDialogs'
import Dialog, { DialogTitle, DialogContent } from '../Dialog'
import Icon from '../Icon'
import IconButton from '../IconButton'
import LeftIcon from '../Icons/Left'
import { Media, Bd, Img } from '../deprecated/Media'

import NestedSelect from './NestedSelect'
import styles from './styles.styl'
import List from '../List'

const NestedSelectDialogHeader = ({ onClickBack, showBack, title }) => {
  const { dialogTitleProps } = useCozyDialog({
    open: true,
    onClose: true
  })

  if (!title) return null

  return (
    <DialogTitle {...dialogTitleProps}>
      <Media>
        {showBack && (
          <Img className={styles.Modal__back}>
            <IconButton size="medium" onClick={onClickBack}>
              <Icon icon={LeftIcon} />
            </IconButton>
          </Img>
        )}
        <Bd className="u-ellipsis">{title}</Bd>
      </Media>
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
        data-testid={`modal-close-button-nested-select`}
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
