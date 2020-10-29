import React from 'react'
import cx from 'classnames'

import styles from './styles.styl'

const IconButton = ({ className, ...props }) => (
  <button className={cx(styles.IconButton, className)} {...props} />
)

export default IconButton
