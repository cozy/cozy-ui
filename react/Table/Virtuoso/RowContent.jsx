import React from 'react'

import Cell from './Cell'
import Checkbox from '../../Checkbox'
import TableCell from '../../TableCell'

const RowContent = ({
  index,
  row,
  columns,
  selected,
  children,
  onSelectClick
}) => {
  const isSelected = name => selected.indexOf(name) !== -1

  return (
    <>
      <TableCell align="center" padding="checkbox">
        <Checkbox
          checked={isSelected(row.name)}
          inputProps={{
            'aria-labelledby': `enhanced-table-checkbox-${index}`
          }}
          onChange={() => onSelectClick(row.name)}
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
