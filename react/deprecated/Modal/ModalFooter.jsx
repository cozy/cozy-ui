import cx from 'classnames'
import React from 'react'

import styles from './styles.styl'

const ModalFooter = ({ children, className }) => (
  <div className={cx(styles['c-modal-footer'], className)}>{children}</div>
)

export default ModalFooter
