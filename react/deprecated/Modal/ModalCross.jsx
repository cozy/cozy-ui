import { Icon, Cross } from '@linagora/twake-icons'
import cx from 'classnames'
import React from 'react'

import styles from './styles.styl'
import palette from '../../palette'
import useBreakpoints from '../../providers/Breakpoints'

export const ModalCrossIcon = props => {
  const { isMobile } = useBreakpoints()
  const { color } = props
  return (
    <Icon
      icon={Cross}
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
