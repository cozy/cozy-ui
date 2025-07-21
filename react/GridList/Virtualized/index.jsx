import React, { forwardRef } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'

const VirtualizedGridList = forwardRef(
  ({ items = [], itemRenderer, components, context, ...props }, ref) => {
    return (
      <VirtuosoGrid
        ref={ref}
        components={components}
        context={context}
        style={{ height: '100%' }}
        totalCount={items.length}
        itemContent={index => itemRenderer(items[index])}
        {...props}
      />
    )
  }
)

VirtualizedGridList.displayName = 'VirtualizedGridList'

export default VirtualizedGridList
