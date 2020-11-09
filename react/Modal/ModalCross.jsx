import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import Icon from '../Icon'
import palette from '../palette'
import withBreakpoints from '../helpers/withBreakpoints'

import CrossIcon from 'cozy-ui/transpiled/react/Icons/Cross'

export const ModalCrossIcon = withBreakpoints()(props => {
  const {
    color,
    breakpoints: { isMobile }
  } = props
  return (
    <Icon
      icon={CrossIcon}
      size={isMobile ? '16' : '24'}
      color={color || palette['coolGrey']}
    />
  )
})

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
