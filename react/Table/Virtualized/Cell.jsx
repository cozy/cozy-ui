import cx from 'classnames'
import get from 'lodash/get'
import React from 'react'

import TableCell from '../../TableCell'
import { makeStyles } from '../../styles'

const useStyles = makeStyles({
  root: {
    cursor: ({ isClickable }) => (isClickable ? 'pointer' : undefined),
    width: ({ column }) => column.width,
    maxWidth: ({ column }) => column.maxWidth
  }
})

const Cell = ({ row, columns, column, onClick, children }) => {
  const classes = useStyles({ column, isClickable: !!onClick })
  const cellContent = get(row, column.id, '—')

  return (
    <TableCell
      key={column.id}
      classes={classes}
      className={cx({ sortable: column.sortable !== false })}
      align={column.textAlign ?? 'left'}
      padding={column.disablePadding ? 'none' : 'normal'}
      onClick={() => onClick?.(row, column)}
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
