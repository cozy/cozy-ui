import cx from 'classnames'
import React from 'react'

import Cell from './Cell'
import Checkbox from '../../Checkbox'
import TableCell from '../../TableCell'

const RowContent = ({
  index,
  row,
  columns,
  isSelectedItem,
  selectedCount,
  children,
  onSelectClick,
  onClick
}) => {
  return (
    <>
      <TableCell align="center" padding="checkbox">
        <Checkbox
          className={cx('virtualizedCheckbox', {
            visible: selectedCount > 0,
            checked: isSelectedItem(row)
          })}
          checked={isSelectedItem(row)}
          inputProps={{
            'aria-labelledby': `enhanced-table-checkbox-${index}`
          }}
          onChange={() => onSelectClick(row)}
        />
      </TableCell>
      {columns.map(column => (
        <Cell
          key={column.id}
          row={row}
          columns={columns}
          column={column}
          onClick={onClick}
        >
          {children}
        </Cell>
      ))}
    </>
  )
}

export default React.memo(RowContent)
