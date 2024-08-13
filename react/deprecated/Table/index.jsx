import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.styl'

export const Table = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return <div className={cx(styles.Table, className)} {...rest} ref={ref} />
})

export const TableHead = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableHead, className)} {...rest} ref={ref} />
})

export const TableBody = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableBody, className)} {...rest} ref={ref} />
})

export const TableRow = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableRow, className)} {...rest} ref={ref} />
})

export const TableCell = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return <div className={cx(styles.TableCell, className)} {...rest} ref={ref} />
})

export const TableHeader = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return (
    <div className={cx(styles.TableHeader, className)} {...rest} ref={ref} />
  )
})

Table.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}
TableHead.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}
TableBody.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

TableRow.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}
TableCell.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}
TableHeader.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}
