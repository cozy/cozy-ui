/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react'

import Table from '..'
import TableBody from '../../TableBody'
import TableContainer from '../../TableContainer'
import TableFooter from '../../TableFooter'
import TableHead from '../../TableHead'
import TableRow from '../../TableRow'

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
  TableHead: forwardRef(({ context, ...props }, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableBody: forwardRef(({ context, ...props }, ref) => (
    <TableBody {...props} ref={ref} />
  )),
  TableFooter: forwardRef(({ context, ...props }, ref) => (
    <TableFooter {...props} ref={ref} />
  )),
  TableRow: forwardRef(({ item, context, ...props }, ref) => {
    const isSelected = context?.isSelectedItem(item)

    return <TableRow {...props} ref={ref} selected={isSelected} hover />
  })
}

export default virtuosoComponents
