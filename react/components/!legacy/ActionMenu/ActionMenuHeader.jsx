import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.styl'

export const ActionMenuHeader = ({ children, className }) => {
  return (
    <div className={cx(styles['c-actionmenu-header'], className)}>
      {children}
    </div>
  )
}

ActionMenuHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
