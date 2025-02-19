import React, { useEffect, useState } from 'react'
import { useDragLayer } from 'react-dnd'

import DragPreview from './DragPreview'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

const getItemStyles = mousePosition => {
  let { x, y } = mousePosition
  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

const DragPreviewWrapper = ({
  itemType,
  item,
  initialOffset,
  currentOffset,
  dragId
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('dragover', handleMouseMove)

    return () => {
      window.removeEventListener('dragover', handleMouseMove)
    }
  }, [])

  if (!initialOffset || !currentOffset) {
    return null
  }

  const Component =
    itemType === dragId ? (
      <DragPreview
        fileName={item.selectedItems[0].name}
        selectedCount={item.selectedItems.length}
      />
    ) : null

  return <div style={getItemStyles(mousePosition)}>{Component}</div>
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
        itemType={itemType}
        isDragging={isDragging}
        item={item}
        initialOffset={initialOffset}
        currentOffset={currentOffset}
        dragId={dragId}
      />
    </div>
  )
}

export default CustomDragLayer
