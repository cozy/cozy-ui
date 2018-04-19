import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Sidebar = ({ children, className }) => (
  <aside className={classNames(styles['o-sidebar'], className)}>
    {children}
  </aside>
)

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Sidebar
