import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'

import cx from 'classnames'
import { ModalHeader, ModalContent } from '../deprecated/Modal'

export const IntentWrapper = ({
  children,
  appName,
  appEditor,
  appIcon,
  iconSrc,
  iconDest,
  className
}) => (
  <div className={cx(styles['intentWrapper'], className)}>
    <ModalHeader
      appIcon={appIcon}
      appName={appName}
      appEditor={appEditor}
      className={styles['intentHeader']}
    />
    <ModalContent
      className={styles['intentContent']}
      iconSrc={iconSrc}
      iconDest={iconDest}
    >
      {children}
    </ModalContent>
  </div>
)

IntentWrapper.propTypes = {
  appIcon: PropTypes.string,
  appEditor: PropTypes.string,
  appName: PropTypes.string,
  iconSrc: PropTypes.node,
  iconDest: PropTypes.node
}

export default IntentWrapper
