import MuiTableContainer from '@material-ui/core/TableContainer'
import React, { forwardRef } from 'react'

import Paper from '../Paper'

const TableContainer = forwardRef((props, ref) => {
  return (
    <MuiTableContainer
      {...props}
      ref={ref}
      component={Paper}
      style={{ zIndex: 'var(--zIndex-app)', ...props.style }}
      elevation={0}
      square
    />
  )
})

export default TableContainer
