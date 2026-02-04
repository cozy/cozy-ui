import cx from 'classnames'
import React from 'react'

import Cell from './Cell'
import Checkbox from '../../Checkbox'
import TableCell from '../../TableCell'

const RowContent = ({
  index,
  row,
  columns,
  context,
  children,
  disableCheckbox,
  onSelectClick,
  onLongPress,
  onClick
}) => {
  const selectedCount = context.selectedItems.length

  return (
    <>
      {context.withCheckbox && (
        <TableCell align="center" padding="checkbox">
          <Checkbox
            className={cx('virtualizedCheckbox', {
              visible: selectedCount > 0,
              checked: context.isSelectedItem(row)
            })}
            disabled={disableCheckbox?.(row)}
            checked={context.isSelectedItem(row)}
            inputProps={{
              'aria-labelledby': `enhanced-table-checkbox-${index}`
            }}
            size="small"
            onClick={event => onSelectClick(row, event, index)}
          />
        </TableCell>
      )}
      {columns.map(column => (
        <Cell
          key={column.id}
          row={row}
          columns={columns}
          column={column}
          onClick={onClick}
          onLongPress={onLongPress}
        >
          {children}
        </Cell>
      ))}
    </>
  )
}

export default React.memo(RowContent)
