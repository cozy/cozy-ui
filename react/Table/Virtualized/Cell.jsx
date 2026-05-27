import get from 'lodash/get'
import React, { useState } from 'react'
import { useOnLongPress } from 'rooks'

import TableCell from '../../TableCell'
import { makeStyles } from '../../styles'
import { AddPropsToChildren } from '../../utils/react'

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
    if (column.disableClick) {
      return
    }

    setIsLongPress(true)
    onLongPress?.(row, column)
  })

  const handleClick = () => {
    if (column.disableClick) {
      return
    }

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
        ? AddPropsToChildren(children, () => ({
            row,
            columns,
            column,
            cell: cellContent
          }))
        : cellContent}
    </TableCell>
  )
}

export default React.memo(Cell)
