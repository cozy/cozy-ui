import React from 'react'

import withBreakpoints from '../helpers/withBreakpoints'

import styles from './styles.styl'

const Footer = ({ children, breakpoints: { isDesktop } }) => {
  if (isDesktop) return null
  return <div className={styles['viewer-footer']}>{children}</div>
}

export default withBreakpoints()(Footer)
