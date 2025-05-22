import React, { forwardRef } from 'react'

import DnDConfigWrapper from './Dnd/DnDConfigWrapper'
import TableRowDnD from './Dnd/TableRow'
import Table from '..'
import Paper from '../../Paper'
import TableBody from '../../TableBody'
import TableContainer from '../../TableContainer'
import TableFooter from '../../TableFooter'
import TableHead from '../../TableHead'
import TableRow from '../../TableRow'

const _TableContainer = forwardRef((props, ref) => (
  <TableContainer
    {...props}
    ref={ref}
    component={Paper}
    style={{ zIndex: 'var(--zIndex-app)', ...props.style }}
    elevation={0}
  />
))
_TableContainer.displayName = '_TableContainer'

const virtuosoComponents = {
  Scroller: forwardRef(({ context, ...props }, ref) => {
    if (!context.dragProps?.enabled) {
      return <_TableContainer {...props} ref={ref} />
    }

    return (
      <DnDConfigWrapper ref={ref}>
        <_TableContainer {...props} ref={ref} />
      </DnDConfigWrapper>
    )
  }),
  Table: forwardRef((props, ref) => <Table {...props} ref={ref} />),
  TableHead: forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  TableFooter: forwardRef((props, ref) => <TableFooter {...props} ref={ref} />),
  TableRow: forwardRef(({ item, context, ...props }, ref) => {
    const isSelected = context?.isSelectedItem(item)
    const isDisabled = context?.itemsInDropProcess.includes(item._id)

    if (!context.dragProps?.enabled) {
      return <TableRow {...props} ref={ref} selected={isSelected} hover />
    }

    return (
      <TableRowDnD
        {...props}
        item={item}
        context={context}
        selected={isSelected}
        disabled={isDisabled}
        hover
      />
    )
  })
}

export default virtuosoComponents
