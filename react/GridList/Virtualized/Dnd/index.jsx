import React, { useState, useMemo } from 'react'

import virtuosoComponents from './virtuosoComponents'
import VirtualizedGridList from '../'
import CustomDragLayer from '../../../utils/Dnd/CustomDrag/CustomDragLayer'

const VirtualizedGridListDnd = ({
  items,
  dragProps,
  context,
  itemRenderer,
  children,
  componentProps,
  components,
  ...props
}) => {
  const [itemsInDropProcess, setItemsInDropProcess] = useState([])

  const _components = useMemo(
    () => ({ ...virtuosoComponents, ...components }),
    [components]
  )

  const _context = useMemo(
    () => ({
      ...context,
      dragProps,
      itemRenderer,
      itemsInDropProcess,
      componentProps,
      setItemsInDropProcess,
      items
    }),
    [
      context,
      dragProps,
      itemRenderer,
      itemsInDropProcess,
      componentProps,
      items
    ]
  )

  return (
    <>
      <CustomDragLayer dragId={dragProps.dragId} />
      <VirtualizedGridList
        items={items}
        components={_components}
        context={_context}
        {...props}
      >
        {children}
      </VirtualizedGridList>
    </>
  )
}

export default VirtualizedGridListDnd
