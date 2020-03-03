import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import Icon from '../Icon'
import palette from '../palette'
import withBreakpoints from '../helpers/withBreakpoints'

const ModalCross = ({
  onClick,
  color,
  className,
  breakpoints: { isMobile }
}) => (
  <button
    className={cx(styles['c-modal-close'], className)}
    onClick={onClick}
    type="button"
    aria-label="close"
  >
    <Icon
      icon="cross"
      size={isMobile ? '16' : '24'}
      color={color || palette['coolGrey']}
    />
  </button>
)

export default withBreakpoints()(ModalCross)
