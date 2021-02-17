import React from 'react'
import Icon from '../Icon'

import { Img } from '../Media'
import palette from '../palette'
import NestedSelect from './NestedSelect'
import Dialog, {
  DialogTitle,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'
import { useCozyDialog, DialogCloseButton } from '../CozyDialogs'

import styles from './styles.styl'

import LeftIcon from 'cozy-ui/transpiled/react/Icons/Left'

const NestedSelectModal = props => {
  const { dialogProps, dialogTitleProps } = useCozyDialog({
    open: true
  })
  return (
    <Dialog
      {...dialogProps}
      open={true}
      title={props.title}
      onClose={props.onClose}
    >
      <DialogTitle {...dialogTitleProps}>
        {props.showBack && (
          <Img className={styles.Modal__back} onClick={props.onClickBack}>
            <Icon icon={LeftIcon} color={palette['coolGrey']} />
          </Img>
        )}
        {props.title}
      </DialogTitle>
      <DialogCloseButton
        onClick={props.onClose}
        data-test-id={`modal-close-button-nested-select`}
      />
      <DialogContent className="u-p-0">
        <NestedSelect {...props} />
      </DialogContent>
    </Dialog>
  )
}

export default NestedSelectModal
