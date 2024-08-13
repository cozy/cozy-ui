import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'
import { useCozyTheme } from '../providers/CozyTheme'
import { useTheme } from '@material-ui/core'

const Sidebar = ({ children, className, ...restProps }) => {
  const theme = useTheme()
  const { isLight } = useCozyTheme()

  useSetFlagshipUI(
    {
      bottomBackground: theme.palette.background.default,
      bottomTheme: isLight ? 'dark' : 'light'
    },
    {
      bottomBackground: theme.palette.background.paper
    },
    'cozy-ui/Sidebar'
  )

  return (
    <aside
      id="sidebar"
      className={cx(styles['o-sidebar'], className)}
      {...restProps}
    >
      {children}
    </aside>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Sidebar
