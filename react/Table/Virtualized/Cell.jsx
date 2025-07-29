import get from 'lodash/get'
import React, { useState } from 'react'
import { useOnLongPress } from 'rooks'

import TableCell from '../../TableCell'
import { makeStyles } from '../../styles'

const useStyles = makeStyles({
  root: {
    cursor: ({ isClickable }) => (isClickable ? 'pointer' : undefined),
    width: ({ column }) => column.width,
    maxWidth: ({ column }) => column.maxWidth
  }
})

const Cell = ({ row, columns, column, onClick, onLongPress, children }) => {
  const [isLongPress, setIsLongPress] = useState(false) // onClick is triggered after a long press anyway, so we need this bool to avoid this behavior

  const classes = useStyles({ column, isClickable: !!onClick })
  const cellContent = get(row, column.id, '—')

  const longPressRef = useOnLongPress(() => {
    setIsLongPress(true)
    onLongPress?.(row, column)
  })

  const handleClick = () => {
    if (!isLongPress) {
      onClick?.(row, column)
    } else {
      setIsLongPress(false)
    }
  }

  return (
    <TableCell
      key={column.id}
      ref={longPressRef}
      classes={classes}
      align={column.textAlign ?? 'left'}
      padding={column.disablePadding ? 'none' : 'normal'}
      onClick={handleClick}
      onContextMenu={isLongPress ? ev => ev.preventDefault() : undefined}
    >
      {children
        ? React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child, {
                  row,
                  columns,
                  column,
                  cell: cellContent
                })
              : null
          )
        : cellContent}
    </TableCell>
  )
}

export default React.memo(Cell)
