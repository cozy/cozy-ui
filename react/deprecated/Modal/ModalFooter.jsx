import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'

const ModalFooter = ({ children, className }) => (
  <div className={cx(styles['c-modal-footer'], className)}>{children}</div>
)

export default ModalFooter
