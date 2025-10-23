import cx from 'classnames'
import React from 'react'

import styles from './styles.styl'

const ModalSection = ({ children, className }) => (
  <div
    className={cx(
      styles['c-modal-content'],
      styles['c-modal-section'],
      className
    )}
  >
    {children}
  </div>
)

export default ModalSection
