import React, { forwardRef } from 'react'

import Table from '..'
import Paper from '../../Paper'
import TableBody from '../../TableBody'
import TableContainer from '../../TableContainer'
import TableHead from '../../TableHead'
import TableRow from '../../TableRow'

const virtuosoComponents = {
  Scroller: forwardRef((props, ref) => (
    <TableContainer component={Paper} elevation={0} {...props} ref={ref} />
  )),
  Table: forwardRef((props, ref) => <Table {...props} ref={ref} />),
  TableHead: forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  TableRow: forwardRef(({ item, context, ...props }, ref) => {
    const isSelected = context?.isSelectedItem(item)

    return <TableRow {...props} ref={ref} selected={isSelected} hover />
  })
}

export default virtuosoComponents
