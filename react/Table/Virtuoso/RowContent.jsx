import React from 'react'

import { columns as columnsH } from './helpers'
import Checkbox from '../../Checkbox'
import TableCell from '../../TableCell'

const RowContent = ({
  index,
  row,
  columns = columnsH,
  selected,
  children,
  onSelectClick
}) => {
  const isSelected = rowId => selected.some(item => item.id === rowId)

  return (
    <>
      <TableCell align="center" padding="checkbox">
        <Checkbox
          checked={isSelected(row.id)}
          inputProps={{
            'aria-labelledby': `enhanced-table-checkbox-${index}`
          }}
          onChange={() => onSelectClick(row.id)}
        />
      </TableCell>
      {columns.map(column => (
        <TableCell
          key={column.id}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {children
            ? React.Children.map(children, child =>
                React.isValidElement(child)
                  ? React.cloneElement(child, {
                      row,
                      columns,
                      column,
                      cell: row[column.id]
                    })
                  : null
              )
            : row[column.id]}
        </TableCell>
      ))}
    </>
  )
}

export default RowContent
