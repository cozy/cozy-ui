import React from 'react'
import { Text } from '../Text'
import styles from './EmptyMessage.styl'
import cx from 'classnames'

const EmptyMessage = props => {
  const { className, ...rest } = props

  return <Text className={cx(styles.EmptyMessage, className)} {...rest} />
}

export default EmptyMessage
