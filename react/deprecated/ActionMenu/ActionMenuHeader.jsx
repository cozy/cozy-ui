import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

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
