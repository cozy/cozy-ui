import React from 'react'
import Icon from 'cozy-ui/react/Icon'
import Modal, {
  ModalHeader as UIModalHeader,
  ModalContent as UIModalContent
} from 'cozy-ui/react/Modal'
import { Media, Bd, Img } from 'cozy-ui/react/Media'
import palette from 'cozy-ui/react/palette'
import NestedSelect from './NestedSelect'

import styles from './styles.styl'

const ModalTitle = ({ showBack, onClickBack, title }) => (
  <Media>
    {showBack && (
      <Img className={styles.Modal__back} onClick={onClickBack}>
        <Icon icon="left" color={palette['coolGrey']} />
      </Img>
    )}
    <Bd>
      <h2>{title}</h2>
    </Bd>
  </Media>
)

const ModalHeader = ({ showBack, onClickBack, title }) => (
  <UIModalHeader className={styles.Modal__title}>
    <ModalTitle showBack={showBack} onClickBack={onClickBack} title={title} />
  </UIModalHeader>
)

const ModalContent = ({ children }) => (
  <UIModalContent className={styles.Modal__content}>{children}</UIModalContent>
)

const NestedSelectModal = props => {
  return (
    <Modal
      closeBtnClassName={props.closeBtnClassName}
      overflowHidden
      dismissAction={props.onCancel}
      into="body"
    >
      <NestedSelect
        {...props}
        HeaderComponent={ModalHeader}
        ContentComponent={ModalContent}
      />
    </Modal>
  )
}

export default NestedSelectModal
