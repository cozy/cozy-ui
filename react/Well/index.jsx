import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.styl'

const Well = ({ children, className }) => {
  return (
    <div className={cx(styles['well'], 'u-p-1', className)}>{children}</div>
  )
}

Well.propTypes = {
  className: PropTypes.string
}

export default Well
