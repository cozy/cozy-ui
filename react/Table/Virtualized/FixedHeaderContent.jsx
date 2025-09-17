import cx from 'classnames'
import React from 'react'

import TableHeadCell from './HeadCell'
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
  columns,
  orderDirection,
  orderBy,
  rowCount,
  context,
  onClick,
  onSelectAllClick
}) => {
  const classes = useStyles()
  const selectedCount = context.selectedItems.length

  return (
    <TableRow>
      <TableCell align="center" padding="checkbox">
        <Checkbox
          className={cx('virtualizedCheckbox', {
            checked: selectedCount > 0
          })}
          indeterminate={selectedCount > 0 && selectedCount < rowCount}
          checked={rowCount > 0 && selectedCount === rowCount}
          inputProps={{ 'aria-label': 'select all' }}
          size="small"
          onChange={onSelectAllClick}
        />
      </TableCell>
      {columns.map(column => (
        <TableHeadCell
          key={column.id}
          className={classes.visuallyHidden}
          column={column}
          orderDirection={orderDirection}
          orderBy={orderBy}
          onClick={() => onClick(column.id)}
        />
      ))}
    </TableRow>
  )
}

export default FixedHeaderContent
