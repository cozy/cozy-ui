import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'

export const Table = React.forwardRef(({ className, ...props }, ref) => {
  return <div className={cx(styles.Table, className)} {...props} ref={ref} />
})

export const TableHead = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cx(styles.TableHead, className)} {...props} ref={ref} />
  )
})

export const TableBody = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cx(styles.TableBody, className)} {...props} ref={ref} />
  )
})

export const TableRow = React.forwardRef(({ className, ...props }, ref) => {
  return <div className={cx(styles.TableRow, className)} {...props} ref={ref} />
})

export const TableCell = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cx(styles.TableCell, className)} {...props} ref={ref} />
  )
})

export const TableHeader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cx(styles.TableHeader, className)} {...props} ref={ref} />
  )
})

Table.propTypes = {
  className: PropTypes.string
}

TableHead.propTypes = {
  className: PropTypes.string
}

TableBody.propTypes = {
  className: PropTypes.string
}

TableRow.propTypes = {
  className: PropTypes.string
}

TableCell.propTypes = {
  className: PropTypes.string
}

TableHeader.propTypes = {
  className: PropTypes.string
}
