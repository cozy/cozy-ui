import React, { forwardRef, useState, useMemo } from 'react'

import GridItem from './GridItem'
import VirtualizedGridList from '../'
import CustomDragLayer from '../../../utils/Dnd/CustomDrag/CustomDragLayer'
import DnDConfigWrapper from '../../../utils/Dnd/DnDConfigWrapper'

const VirtualizedGridListDnd = ({
  dragProps,
  context,
  itemRenderer,
  children,
  componentProps = {
    List: {},
    Item: {}
  },
  components,
  ...props
}) => {
  const [itemsInDropProcess, setItemsInDropProcess] = useState([])

  const _context = useMemo(
    () => ({
      ...context,
      dragProps,
      itemRenderer,
      itemsInDropProcess,
      setItemsInDropProcess,
      items: props.items
    }),
    [context, dragProps, itemRenderer, itemsInDropProcess, props.items]
  )

  return (
    <>
      <CustomDragLayer dragId={dragProps.dragId} />
      <VirtualizedGridList
        components={{
          Scroller: forwardRef(({ ...scrollerProps }, ref) => (
            <DnDConfigWrapper ref={ref}>
              <div {...scrollerProps} ref={ref} />
            </DnDConfigWrapper>
          )),
          Item: ({ context, children, ...props }) => {
            const item = context?.items?.[props['data-index']]
            return (
              <GridItem
                item={item}
                context={context}
                renderItem={() => <>{children}</>}
                {...componentProps.Item}
              />
            )
          },
          ...components
        }}
        context={_context}
        itemRenderer={itemRenderer}
        {...props}
      >
        {children}
      </VirtualizedGridList>
    </>
  )
}

export default VirtualizedGridListDnd
