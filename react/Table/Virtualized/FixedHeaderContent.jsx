import React from 'react'

import TableHeadCell from './HeadCell'
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

const FixedHeaderContent = ({ columns, orderDirection, orderBy, onClick }) => {
  const classes = useStyles()

  return (
    <TableRow>
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
