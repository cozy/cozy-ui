import React from 'react'

import TableCell from '../../TableCell'
import TableSortLabel from '../../TableSortLabel'
import { makeStyles } from '../../styles'

const useStyles = makeStyles({
  root: {
    width: ({ column }) => column.width,
    maxWidth: ({ column }) => column.maxWidth
  }
})

const TableHeadCell = ({
  className,
  column,
  orderBy,
  orderDirection,
  onClick
}) => {
  const classes = useStyles({ column })

  return (
    <TableCell
      key={column.id}
      classes={classes}
      align={column.textAlign ?? 'left'}
      padding={column.disablePadding ? 'none' : 'normal'}
      sortDirection={orderBy === column.id ? orderDirection : false}
    >
      {column.sortable !== false ? (
        <TableSortLabel
          active={orderBy === column.id}
          direction={orderBy === column.id ? orderDirection : 'asc'}
          onClick={onClick}
        >
          {column.label}
          {orderBy === column.id && (
            <span className={className}>
              {orderDirection === 'desc'
                ? 'sorted descending'
                : 'sorted ascending'}
            </span>
          )}
        </TableSortLabel>
      ) : (
        column.label
      )}
    </TableCell>
  )
}

export default TableHeadCell
