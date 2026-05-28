import React from 'react'

import Cell from './Cell'

const RowContent = ({
  row,
  columns,
  children,
  onLongPress,
  onDoubleClick,
  onClick
}) => {
  return (
    <>
      {columns.map(column => (
        <Cell
          key={column.id}
          row={row}
          columns={columns}
          column={column}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          onLongPress={onLongPress}
        >
          {children}
        </Cell>
      ))}
    </>
  )
}

export default React.memo(RowContent)
