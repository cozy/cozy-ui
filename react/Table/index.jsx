import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'

export const Table = props => {
  const { className, ...rest } = props

  return <div className={cx(styles.Table, className)} {...rest} />
}

export const TableHead = props => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableHead, className)} {...rest} />
}

export const TableBody = props => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableBody, className)} {...rest} />
}

export const TableRow = props => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableRow, className)} {...rest} />
}

export const TableCell = props => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableCell, className)} {...rest} />
}

export const TableHeader = props => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableHeader, className)} {...rest} />
}
