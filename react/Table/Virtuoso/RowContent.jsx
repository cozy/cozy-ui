import React from 'react'

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
