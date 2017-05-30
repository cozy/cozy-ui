import React from 'react'

import styles from './styles.styl'

const ModalContent = ({children}) => {
  console.warn && console.warn('`Content` component is deprecated and will be removed soon, please use `ModalContent` instead.')
  return (
    <div className={styles['coz-modal-content']}>
      {children}
    </div>
  )
}

export default ModalContent
