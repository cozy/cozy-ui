import React from 'react'

import TableHeadCell from './TableHeadCell'
import { columns as columnsH } from './helpers'
import Checkbox from '../../Checkbox'
import TableCell from '../../TableCell'
import TableRow from '../../TableRow'
import { makeStyles } from '../../styles'

const useStyles = makeStyles({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
})

const FixedHeaderContent = ({
  columns = columnsH,
  order,
  orderBy,
  rowCount,
  selectedCount,
  onClick,
  onSelectAllClick
}) => {
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell align="center" padding="checkbox">
        <Checkbox
          indeterminate={selectedCount > 0 && selectedCount < rowCount}
          checked={rowCount > 0 && selectedCount === rowCount}
          inputProps={{ 'aria-label': 'select all desserts' }}
          onChange={onSelectAllClick}
        />
      </TableCell>
      {columns.map(column => (
        <TableHeadCell
          key={column.id}
          className={classes.visuallyHidden}
          column={column}
          order={order}
          orderBy={orderBy}
          onClick={() => onClick(column.id)}
        />
      ))}
    </TableRow>
  )
}

export default FixedHeaderContent
