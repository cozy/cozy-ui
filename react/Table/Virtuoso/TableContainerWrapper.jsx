import React, { forwardRef } from 'react'

import TableContainerWithDnD from './DnD/TableContainerWithDnD'

const TableContainerWrapper = forwardRef(({ dragProps, children }, ref) => {
  if (!dragProps) {
    return children
  }
  return <TableContainerWithDnD ref={ref}>{children}</TableContainerWithDnD>
})

export default TableContainerWrapper
