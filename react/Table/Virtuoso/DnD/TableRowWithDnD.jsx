import React, { useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

import TableRow from '../../../TableRow'

export const ItemTypes = {
  ITEM: 'item'
}

const TableRowWithDnD = ({
  isSelected,
  selectedItems,
  item: file,
  dragProps,
  clearSelected,
  ...props
}) => {
  const {
    onDrop,
    canDrop: canDropProps,
    canDrag: canDragProps,
    isDragging: isDraggingProps,
    dragId
  } = dragProps

  const [{ isDragging }, dragRef, dragRefPreview] = useDrag(
    () => ({
      type: dragId,
      ...(isDraggingProps
        ? {
            isDragging: monitor => {
              return isDraggingProps(monitor, file)
            }
          }
        : {}),
      item: {
        selectedItems: isSelected ? selectedItems : [file]
      },
      canDrag: () => {
        let defaultCanDrag = true
        if (canDragProps) {
          defaultCanDrag = canDragProps(file)
        }
        // if selectedItems is not empty, only the selected items can be dragged
        if (selectedItems.length > 0) {
          return defaultCanDrag && isSelected
        }
        return defaultCanDrag
      },
      collect: monitor => {
        return {
          isDragging: monitor.isDragging()
        }
      }
    }),
    [file, selectedItems]
  )

  // Tricks for the preview image to be empty
  // https://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer
  useEffect(() => {
    dragRefPreview(getEmptyImage(), { captureDraggingState: true })
  }, [dragRefPreview])

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: dragId,
      canDrop: () => (canDropProps ? canDropProps(file) : true),
      drop: ({ selectedItems }) => {
        clearSelected()
        onDrop(selectedItems, file)
      },
      collect: monitor => ({
        isOver: monitor.isOver()
      })
    }),
    [file.id]
  )

  return (
    <TableRow
      {...props}
      ref={node => dragRef(drop(node))}
      selected={isSelected || isOver}
      className={isDragging ? 'u-o-50' : ''}
    />
  )
}

export default TableRowWithDnD
