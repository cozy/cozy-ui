import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import Icon from '../Icon'
import palette from '../palette'
import useBreakpoints from '../hooks/useBreakpoints'

export const ModalCrossIcon = ({ color }) => {
  const { isMobile } = useBreakpoints()
  return (
    <Icon
      icon="cross"
      size={isMobile ? '16' : '24'}
      color={color || palette['coolGrey']}
    />
  )
}

const ModalCross = ({ onClick, color, className }) => (
  <button
    className={cx(styles['c-modal-close'], className)}
    onClick={onClick}
    type="button"
    aria-label="close"
  >
    <ModalCrossIcon color={color} />
  </button>
)

export default ModalCross
