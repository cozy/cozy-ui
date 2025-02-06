import React from 'react'

import TableCell from '../../TableCell'
import TableSortLabel from '../../TableSortLabel'
import { makeStyles } from '../../styles'

const useStyles = makeStyles({
  root: {
    width: ({ column }) => column.width
  }
})

const TableHeadCell = ({ className, column, orderBy, order, onClick }) => {
  const classes = useStyles({ column })

  return (
    <TableCell
      key={column.id}
      classes={classes}
      align={column.textAlign ?? 'left'}
      padding={column.disablePadding ? 'none' : 'normal'}
      sortDirection={orderBy === column.id ? order : false}
    >
      <TableSortLabel
        active={orderBy === column.id}
        direction={orderBy === column.id ? order : 'asc'}
        onClick={onClick}
      >
        {column.label}
        {orderBy === column.id && (
          <span className={className}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </span>
        )}
      </TableSortLabel>
    </TableCell>
  )
}

export default TableHeadCell
