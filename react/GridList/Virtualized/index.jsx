import React, { forwardRef } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'

import virtuosoComponents from './virtuosoComponents'

const VirtualizedGridList = forwardRef(
  ({ items, components, context, ...props }, ref) => {
    return (
      <VirtuosoGrid
        ref={ref}
        components={components || virtuosoComponents}
        context={context}
        style={{ height: '100%' }}
        totalCount={items.length}
        {...props}
      />
    )
  }
)

VirtualizedGridList.defaultProps = {
  items: []
}

VirtualizedGridList.displayName = 'VirtualizedGridList'

export default VirtualizedGridList
