import React from 'react'

import Cell from './Cell'
import Checkbox from '../../Checkbox'
import TableCell from '../../TableCell'
import useBreakpoints from '../../providers/Breakpoints'

const RowContent = ({
  index,
  row,
  columns,
  selected,
  children,
  onSelectClick
}) => {
  const { isMobile } = useBreakpoints()
  const isSelected = name => selected.indexOf(name) !== -1

  return (
    <>
      {(!isMobile || selected.length > 0) && (
        <TableCell align="center" padding="checkbox">
          <Checkbox
            checked={isSelected(row.name)}
            inputProps={{
              'aria-labelledby': `enhanced-table-checkbox-${index}`
            }}
            onChange={() => onSelectClick(row.name)}
          />
        </TableCell>
      )}
      {columns.map(column => (
        <Cell key={column.id} row={row} columns={columns} column={column}>
          {children}
        </Cell>
      ))}
    </>
  )
}

export default RowContent
