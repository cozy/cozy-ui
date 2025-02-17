import cx from 'classnames'
import React from 'react'

import TableCell from '../../TableCell'
import { makeStyles } from '../../styles'

const useStyles = makeStyles({
  root: {
    width: ({ column }) => column.width,
    maxWidth: ({ column }) => column.maxWidth
  }
})

const Cell = ({ row, columns, column, children }) => {
  const classes = useStyles({ column })

  return (
    <TableCell
      key={column.id}
      align={column.textAlign ?? 'left'}
      classes={classes}
      className={cx({ sortable: column.sortable !== false })}
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
  )
}

export default Cell
