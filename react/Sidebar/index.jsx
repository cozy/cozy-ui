import React from 'react'
import styles from './styles.styl'

const Sidebar = ({ children }) => (
  <aside className={styles['o-sidebar']}>
    { children }
  </aside>
)

export default Sidebar
