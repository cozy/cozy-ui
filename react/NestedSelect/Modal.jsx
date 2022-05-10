import React from 'react'
import Icon from '../Icon'

import { Media, Bd, Img } from '../Media'
import NestedSelect from './NestedSelect'
import Dialog, {
  DialogTitle,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import { useCozyDialog, DialogCloseButton } from '../CozyDialogs'

import styles from './styles.styl'

import LeftIcon from 'cozy-ui/transpiled/react/Icons/Left'

const NestedSelectDialogHeader = ({ onClickBack, showBack, title }) => {
  const { dialogTitleProps } = useCozyDialog({
    open: true
  })
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
        <Bd>{title}</Bd>
      </Media>
    </DialogTitle>
  )
}

const NestedSelectDialogContent = ({ children }) => {
  return <DialogContent className="u-p-0">{children}</DialogContent>
}

const NestedSelectModal = props => {
  const { dialogProps } = useCozyDialog({
    open: true,
    align: 'top'
  })
  return (
    <Dialog
      {...dialogProps}
      open={true}
      title={props.title}
      onClose={props.onClose}
    >
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
