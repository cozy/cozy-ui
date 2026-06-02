import get from 'lodash/get'
import React, { useState } from 'react'
import { useOnLongPress } from 'rooks'

import TableCell from '../../TableCell'
import { makeStyles } from '../../styles'
import { AddPropsToChildren } from '../../utils/react'

const DOUBLECLICKDELAY = 400

const useStyles = makeStyles({
  root: {
    cursor: ({ isClickable }) => (isClickable ? 'pointer' : undefined),
    width: ({ column }) => column.width,
    maxWidth: ({ column }) => column.maxWidth
  }
})

const Cell = ({
  row,
  columns,
  column,
  onClick,
  onDoubleClick,
  onLongPress,
  children
}) => {
  const [isLongPress, setIsLongPress] = useState(false) // onClick is triggered after a long press anyway, so we need this bool to avoid this behavior
  const [lastClickTime, setLastClickTime] = useState(0)

  const classes = useStyles({ column, isClickable: !!onClick })
  const cellContent = get(row, column.id, '—')

  const longPressRef = useOnLongPress(
    () => {
      if (column.disableClick) {
        return
      }

      setIsLongPress(true)
      onLongPress?.(row, column)
    },
    { duration: 300 }
  )

  const handleClick = () => {
    if (column.disableClick) {
      return
    }

    if (isLongPress) {
      setIsLongPress(false)
      return
    }

    const currentTime = Date.now()
    const isDoubleClick = currentTime - lastClickTime < DOUBLECLICKDELAY
    setLastClickTime(currentTime)

    if (!isDoubleClick) {
      onClick?.(row, column)
    }
  }

  return (
    <TableCell
      key={column.id}
      ref={longPressRef}
      classes={classes}
      className={column.noWrap ? 'u-ellipsis' : undefined}
      align={column.textAlign ?? 'left'}
      padding={column.disablePadding ? 'none' : 'normal'}
      onClick={handleClick}
      onDoubleClick={() =>
        column.disableClick ? undefined : onDoubleClick?.(row, column)
      }
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
