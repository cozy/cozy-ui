import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const Sidebar = ({ children, className, ...restProps }) => {
  useSetFlagshipUI(
    {
      bottomBackground: 'background.default',
      bottomTheme: 'dark'
    },
    {
      bottomBackground: 'background.paper'
    }
  )

  return (
    <aside className={cx(styles['o-sidebar'], className)} {...restProps}>
      {children}
    </aside>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Sidebar
