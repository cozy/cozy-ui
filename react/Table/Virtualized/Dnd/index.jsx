import React, { useState, useMemo } from 'react'

import CustomDragLayer from './CustomDrag/CustomDragLayer'
import virtuosoComponentsDnd from './virtuosoComponents'
import VirtualizedTable from '../index'
import virtuosoComponents from '../virtuosoComponents'

const _components = { ...virtuosoComponents, ...virtuosoComponentsDnd }

const VirtuosoTableDnd = ({ dragProps, context, components, ...props }) => {
  const [itemsInDropProcess, setItemsInDropProcess] = useState([]) // array of Ids, for dragndrop feature

  const _context = useMemo(
    () => ({
      ...context,
      dragProps,
      itemsInDropProcess,
      setItemsInDropProcess
    }),
    [context, dragProps, itemsInDropProcess]
  )

  return (
    <>
      <CustomDragLayer dragId={dragProps.dragId} />
      <VirtualizedTable
        components={components || _components}
        context={_context}
        {...props}
      />
    </>
  )
}

export default VirtuosoTableDnd
