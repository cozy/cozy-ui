import React from 'react'

import styles from './styles.styl'

const ModalContent = ({children}) =>
  (<div className={styles['coz-modal-content']}>
    {children}
  </div>)

export default ModalContent
