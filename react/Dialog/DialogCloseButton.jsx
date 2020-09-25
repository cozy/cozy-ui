import React from 'react'
import cx from 'classnames'
import styles from './styles.styl'
import { ModalCrossIcon } from '../Modal/ModalCross'

const DialogCloseButton = ({ className, onClick }) => {
  return (
    <button
      className={cx(styles.DialogCloseButton, className)}
      onClick={onClick}
      type="button"
      aria-label="close"
    >
      <ModalCrossIcon />
    </button>
  )
}

export default DialogCloseButton
