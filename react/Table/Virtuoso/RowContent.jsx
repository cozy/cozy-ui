import React from 'react'

import Cell from './Cell'
import Checkbox from '../../Checkbox'
import TableCell from '../../TableCell'

const RowContent = ({
  index,
  row,
  columns,
  isSelectedItem,
  children,
  onSelectClick
}) => {
  return (
    <>
      <TableCell align="center" padding="checkbox">
        <Checkbox
          checked={isSelectedItem(row)}
          inputProps={{
            'aria-labelledby': `enhanced-table-checkbox-${index}`
          }}
          onChange={() => onSelectClick(row)}
        />
      </TableCell>
      {columns.map(column => (
        <Cell key={column.id} row={row} columns={columns} column={column}>
          {children}
        </Cell>
      ))}
    </>
  )
}

export default RowContent
