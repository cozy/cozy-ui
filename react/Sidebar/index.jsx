import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const Sidebar = ({ children, className, ...others }) => (
  <aside className={cx(styles['o-sidebar'], className)} {...others}>
    {children}
  </aside>
)

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /*
   other = all html attributes
   */
  others: PropTypes.object
}

export default Sidebar
