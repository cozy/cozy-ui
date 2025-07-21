import React, { useEffect, useState } from 'react'

import DragPreview from './DragPreview'

const makeStyles = ({ x, y }) => {
  if (!x || !y) {
    return { display: 'none' }
  }

  const transform = `translate(${x}px, ${y}px)`

  return {
    transform,
    WebkitTransform: transform
  }
}

const DragPreviewWrapper = ({
  item,
  itemType,
  dragId,
  initialOffset,
  currentOffset
}) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('dragover', handleMouseMove)
    return () => {
      window.removeEventListener('dragover', handleMouseMove)
    }
  }, [])

  if (!initialOffset || !currentOffset || itemType !== dragId) {
    return null
  }

  return (
    <div style={makeStyles(mousePosition)}>
      <DragPreview
        fileName={item.draggedItems[0].name}
        selectedCount={item.draggedItems.length}
      />
    </div>
  )
}

export default DragPreviewWrapper
