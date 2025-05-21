import MuiTableRow from '@material-ui/core/TableRow'
import cx from 'classnames'
import React, { forwardRef } from 'react'

const TableRow = forwardRef(({ disabled, className, ...props }, ref) => {
  return (
    <MuiTableRow
      {...props}
      className={cx(className, { disabled })}
      disabled={disabled}
      ref={ref}
    />
  )
})

TableRow.displayName = 'TableRow'

export default TableRow
