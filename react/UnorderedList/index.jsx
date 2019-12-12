import React from 'react'
import cx from 'classnames'
import styles from './styles.styl'
import Stack from '../Stack'

export const UnorderedList = props => {
  const { className, ...rest } = props

  return (
    <Stack tag="ul" className={cx(styles.UnorderedList, className)} {...rest} />
  )
}

export const ListItem = props => {
  const { className, ...rest } = props

  return <li className={cx(styles.ListItem, className)} {...rest} />
}
