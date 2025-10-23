import cx from 'classnames'
import React, { useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

const GridItem = ({ item, context, renderItem, className }) => {
  const {
    selectedItems = [],
    itemsInDropProcess = [],
    setItemsInDropProcess = () => {},
    dragProps
  } = context || {}

  const {
    onDrop,
    canDrop: canDropProps,
    canDrag: canDragProps,
    dragId
  } = dragProps

  const isSelected = context?.isSelectedItem?.(item)
  const isDisabled = itemsInDropProcess.includes(item._id)

  const [{ isDragging }, dragRef, dragPreview] = useDrag(
    () => ({
      type: dragId,
      isDragging: monitor => {
        if (selectedItems.length > 0) {
          return selectedItems.some(sel => sel._id === item._id)
        }
        return item._id === monitor.getItem().draggedItems?.[0]._id
      },
      item: {
        draggedItems: selectedItems.length > 0 ? selectedItems : [item]
      },
      canDrag: () => {
        const defaultCanDrag = canDragProps?.(item) ?? true
        if (selectedItems.length > 0) {
          return defaultCanDrag && isSelected
        }
        return defaultCanDrag
      },
      collect: monitor => ({
        isDragging: monitor.isDragging()
      })
    }),
    [item, selectedItems]
  )

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: dragId,
      canDrop: () => (canDropProps ? canDropProps(item) : true),
      drop: async draggedItem => {
        setItemsInDropProcess(
          draggedItem.draggedItems.map(dragged => dragged._id)
        )
        await onDrop(draggedItem.draggedItems, item, selectedItems)
        setItemsInDropProcess([])
      },
      collect: monitor => ({
        isOver: monitor.isOver()
      })
    }),
    [item._id, selectedItems]
  )

  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true })
  }, [dragPreview])

  return (
    <div
      ref={node => dragRef(dropRef(node))}
      className={cx(
        className,
        isDragging ? 'virtualized u-o-50' : 'virtualized'
      )}
      style={{ opacity: isDisabled ? 0.5 : 1 }}
    >
      {renderItem(item, { isDragging, isOver, isDisabled })}
    </div>
  )
}

export default GridItem
