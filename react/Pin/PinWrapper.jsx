import React from 'react'
import LockedBody from './LockedBody'
import styles from './styles.styl'
import BarTheme from '../BarTheme'
import Portal from 'cozy-ui/react/Portal'
import cx from 'classnames'

const PinWrapper = ({ children, className }) => (
  <LockedBody>
    <BarTheme theme="primary" />
    <Portal into="body">
      <div className={cx(styles.PinWrapper, className)}>{children}</div>
    </Portal>
  </LockedBody>
)

export default PinWrapper
