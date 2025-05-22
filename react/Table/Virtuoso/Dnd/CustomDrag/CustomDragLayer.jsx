import React from 'react'
import { useDragLayer } from 'react-dnd'

import DragPreviewWrapper from './DragPreviewWrapper'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

// Example find in the official documentation
// https://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer
export const CustomDragLayer = ({ dragId }) => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer(monitor => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging()
    }))

  if (!isDragging) {
    return null
  }

  return (
    <div style={layerStyles}>
      <DragPreviewWrapper
        item={item}
        itemType={itemType}
        dragId={dragId}
        initialOffset={initialOffset}
        currentOffset={currentOffset}
      />
    </div>
  )
}

export default CustomDragLayer
