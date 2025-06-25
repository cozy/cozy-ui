import React, { forwardRef } from 'react'

import TableRowClassic from '../../TableRow'

const TableRow = forwardRef(({ item, context, ...props }, ref) => {
  const isSelected = context?.isSelectedItem(item)

  return <TableRowClassic {...props} ref={ref} selected={isSelected} hover />
})

export default TableRow
