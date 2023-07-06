import React from 'react'
import Stack from '../Stack'
import cx from 'classnames'
import styles from './styles.styl'

export const OrderedList = props => {
  const { className, ...rest } = props

  return (
    <Stack tag="ol" className={cx(styles.OrderedList, className)} {...rest} />
  )
}

export const ListItem = props => {
  const { className, ...rest } = props

  return <li className={cx(styles.ListItem, className)} {...rest} />
}
