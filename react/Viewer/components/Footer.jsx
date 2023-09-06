import React from 'react'

import useBreakpoints from '../../providers/Breakpoints'

import styles from './styles.styl'

const Footer = ({ children }) => {
  const { isDesktop } = useBreakpoints()

  if (isDesktop) return null
  return <div className={styles['viewer-footer']}>{children}</div>
}

export default Footer
