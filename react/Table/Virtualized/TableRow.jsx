import cx from 'classnames'
import React, { forwardRef } from 'react'

import TableRowClassic from '../../TableRow'

const TableRow = forwardRef(({ item, context, className, ...props }, ref) => {
  const isSelected = context?.isSelectedItem(item)

  return (
    <TableRowClassic
      {...props}
      className={cx(className, 'virtualized')}
      ref={ref}
      selected={isSelected}
      hover
    />
  )
})

export default TableRow
