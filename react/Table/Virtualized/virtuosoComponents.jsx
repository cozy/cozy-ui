import React, { forwardRef } from 'react'

import Table from '..'
import Paper from '../../Paper'
import TableBody from '../../TableBody'
import TableContainer from '../../TableContainer'
import TableFooter from '../../TableFooter'
import TableHead from '../../TableHead'
import TableRow from '../../TableRow'

const DnDConfigWrapper = React.lazy(() => import('./Dnd/DnDConfigWrapper'))
const TableRowDnD = React.lazy(() => import('./Dnd/TableRow'))

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
    } else {
      return (
        <React.Suspense>
          <DnDConfigWrapper ref={ref}>
            <_TableContainer {...props} ref={ref} />
          </DnDConfigWrapper>
        </React.Suspense>
      )
    }
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
    } else {
      return (
        <React.Suspense>
          <TableRowDnD
            {...props}
            item={item}
            context={context}
            selected={isSelected}
            disabled={isDisabled}
            hover
          />
        </React.Suspense>
      )
    }
  })
}

export default virtuosoComponents
