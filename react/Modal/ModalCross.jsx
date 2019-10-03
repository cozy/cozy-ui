import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import { Button } from '../Button'
import Icon from '../Icon'
import palette from '../palette'

const ModalCross = ({ onClick, color, className }) => (
  <Button
    theme="close"
    className={cx(styles['c-modal-close'], className)}
    onClick={onClick}
    extension="narrow"
    type="button"
    label="Close"
    iconOnly
  >
    <Icon
      icon="cross"
      width="24"
      height="24"
      color={color || palette['coolGrey']}
    />
  </Button>
)

export default ModalCross
