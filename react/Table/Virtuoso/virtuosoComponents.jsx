import React, { forwardRef } from 'react'

import TableContainerWrapper from './TableContainerWrapper'
import TableRowWrapper from './TableRowWrapper'
import Table from '..'
import Paper from '../../Paper'
import TableBody from '../../TableBody'
import TableContainer from '../../TableContainer'
import TableHead from '../../TableHead'

const virtuosoComponents = ({
  isSelectedItem,
  selectedItems,
  dragProps,
  clearSelected
}) => {
  return {
    Scroller: forwardRef((props, ref) => (
      <TableContainerWrapper dragProps={dragProps} ref={ref}>
        <TableContainer component={Paper} {...props} ref={ref} />
      </TableContainerWrapper>
    )),
    Table: forwardRef((props, ref) => <Table {...props} ref={ref} />),
    TableHead: forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow: forwardRef((props, ref) => {
      return (
        <TableRowWrapper
          {...props}
          dragProps={dragProps}
          selectedItems={selectedItems}
          isSelectedItem={isSelectedItem}
          clearSelected={clearSelected}
          ref={ref}
        />
      )
    }),
    TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />)
  }
}

export default virtuosoComponents
