import React, { useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

import TableRowClassic from '../../../TableRow'

const TableRow = ({ item, context, ...props }) => {
  const {
    selectedItems,
    itemsInDropProcess,
    setItemsInDropProcess,
    dragProps
  } = context
  const {
    onDrop,
    canDrop: canDropProps,
    canDrag: canDragProps,
    dragId
  } = dragProps
  const isSelected = context?.isSelectedItem(item)
  const isDisabled = itemsInDropProcess.includes(item._id)

  const [dragCollect, dragRef, dragRefPreview] = useDrag(
    () => ({
      type: dragId,
      isDragging: monitor => {
        // put all selected items in isDragging state
        if (selectedItems.length > 0) {
          return selectedItems.some(
            selectedItem => selectedItem._id === item._id
          )
        }

        return item._id === monitor.getItem().draggedItems[0]._id
      },
      item: {
        draggedItems: selectedItems.length > 0 ? selectedItems : [item]
      },
      canDrag: () => {
        const defaultCanDrag = canDragProps?.(item) || true
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
    [item, selectedItems] // used to pass args inside returned object attributes
  )

  const [dropCollect, dropRef] = useDrop(
    () => ({
      accept: dragId,
      canDrop: () => (canDropProps ? canDropProps(item) : true),
      drop: async draggedItem => {
        setItemsInDropProcess(
          draggedItem.draggedItems.map(draggedItem => draggedItem._id)
        )
        await onDrop(draggedItem.draggedItems, item, selectedItems)
        setItemsInDropProcess([])
      },
      collect: monitor => {
        return {
          isOver: monitor.isOver()
        }
      }
    }),
    [item._id, selectedItems] // used to pass args inside returned object attributes
  )

  // Tricks for the preview image to be empty
  // https://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer
  useEffect(() => {
    dragRefPreview(getEmptyImage(), { captureDraggingState: true })
  }, [dragRefPreview])

  return (
    <TableRowClassic
      {...props}
      ref={node => dragRef(dropRef(node))}
      selected={isSelected || dropCollect.isOver}
      className={dragCollect.isDragging ? 'u-o-50' : ''}
      disabled={isDisabled}
      hover
    />
  )
}

export default TableRow
