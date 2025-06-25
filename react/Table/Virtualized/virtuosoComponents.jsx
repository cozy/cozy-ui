/* eslint-disable no-unused-vars */
import cx from 'classnames'
import React, { forwardRef } from 'react'

import TableRow from './TableRow'
import Table from '..'
import TableBody from '../../TableBody'
import TableContainer from '../../TableContainer'
import TableFooter from '../../TableFooter'
import TableHead from '../../TableHead'

/**
 Be aware that context is spread to every components but should not be spread to Table components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/
const virtuosoComponents = {
  Scroller: forwardRef(({ context, ...props }, ref) => (
    <TableContainer {...props} ref={ref} />
  )),
  Table: forwardRef(({ context, ...props }, ref) => (
    <Table {...props} ref={ref} />
  )),
  TableHead: forwardRef(({ context, className, ...props }, ref) => (
    <TableHead {...props} className={cx(className, 'virtualized')} ref={ref} />
  )),
  TableBody: forwardRef(({ context, ...props }, ref) => (
    <TableBody {...props} ref={ref} />
  )),
  TableFooter: forwardRef(({ context, ...props }, ref) => (
    <TableFooter {...props} ref={ref} />
  )),
  TableRow: forwardRef((props, ref) => <TableRow {...props} ref={ref} />)
}

export default virtuosoComponents
