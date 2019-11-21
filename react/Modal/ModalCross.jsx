import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import Icon from '../Icon'
import palette from '../palette'

const ModalCross = ({ onClick, color, className }) => (
  <button
    className={cx(styles['c-modal-close'], className)}
    onClick={onClick}
    type="button"
    aria-label="close"
  >
    <Icon
      icon="cross"
      width="24"
      height="24"
      color={color || palette['coolGrey']}
    />
  </button>
)

export default ModalCross
