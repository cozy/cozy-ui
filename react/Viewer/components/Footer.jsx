import React from 'react'

import styles from './styles.styl'
import useBreakpoints from '../../providers/Breakpoints'

const Footer = ({ children }) => {
  const { isDesktop } = useBreakpoints()

  if (isDesktop) return null
  return <div className={styles['viewer-footer']}>{children}</div>
}

export default Footer
