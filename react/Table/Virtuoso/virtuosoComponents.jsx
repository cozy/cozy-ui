import React, { forwardRef } from 'react'

import Table from '..'
import Paper from '../../Paper'
import TableBody from '../../TableBody'
import TableContainer from '../../TableContainer'
import TableHead from '../../TableHead'
import TableRow from '../../TableRow'

const virtuosoComponents = {
  Scroller: forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: forwardRef((props, ref) => <Table {...props} ref={ref} />),
  TableHead: forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow: forwardRef(({ context, item, ...props }, ref) => {
    const { isSelectedItem } = context
    const isSelected = isSelectedItem(item)

    return (
      <TableRow
        {...props}
        ref={ref}
        context={context}
        item={item}
        selected={isSelected}
        hover
      />
    )
  }),
  TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />)
}

export default virtuosoComponents
