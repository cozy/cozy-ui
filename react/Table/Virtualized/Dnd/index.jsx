import React, { forwardRef, useMemo } from 'react'

import CustomDragLayer from './CustomDrag/CustomDragLayer'
import DnDConfigWrapper from './DnDConfigWrapper'
import TableRowDnD from './TableRow'
import TableContainer from '../../../TableContainer'
import VirtualizedTable from '../index'
import virtuosoComponents from '../virtuosoComponents'

/**
 Be aware that context is spread to every components but should not be spread to Table components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/
const componentsDnd = {
  ...virtuosoComponents,
  // eslint-disable-next-line no-unused-vars
  Scroller: forwardRef(({ context, ...props }, ref) => (
    <DnDConfigWrapper ref={ref}>
      <TableContainer {...props} ref={ref} />
    </DnDConfigWrapper>
  )),
  TableRow: forwardRef(({ item, context, ...props }, ref) => {
    const isSelected = context?.isSelectedItem(item)
    const isDisabled = context?.itemsInDropProcess.includes(item._id)

    return (
      <TableRowDnD
        {...props}
        ref={ref}
        item={item}
        context={context}
        selected={isSelected}
        disabled={isDisabled}
        hover
      />
    )
  })
}

const VirtuosoTableDnd = ({ components, ...props }) => {
  const _components = useMemo(
    () => ({ ...components, ...componentsDnd }),
    [components]
  )

  return (
    <>
      <CustomDragLayer dragId={props.dragProps.dragId} />
      <VirtualizedTable components={_components} {...props} />
    </>
  )
}

export default VirtuosoTableDnd
