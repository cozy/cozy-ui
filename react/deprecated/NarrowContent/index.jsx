import cx from 'classnames'
import React from 'react'

import styles from './styles.styl'

const NarrowContent = props => {
  const { className, ...rest } = props

  return <div className={cx(styles.NarrowContent, className)} {...rest} />
}

export default NarrowContent
