import React, { forwardRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { ItemTypes } from './helpers'
import Table from '..'
import Paper from '../../Paper'
import TableBody from '../../TableBody'
import TableContainer from '../../TableContainer'
import TableHead from '../../TableHead'
import TableRow from '../../TableRow'

const getStyle = isDragging => ({
  opacity: isDragging ? 0.5 : 1,
  ':active': {
    backgroundColor: isDragging ? 'red' : 'green'
  }
})

// const createPreview = rows => {
//   const canvas = document.createElement('canvas')
//   const ctx = canvas.getContext('2d')
//   canvas.width = 200
//   canvas.height = rows.length * 30

//   ctx.fillStyle = '#333'
//   ctx.fillRect(0, 0, canvas.width, canvas.height)
//   ctx.fillStyle = '#eee'
//   ctx.font = '16px Arial'

//   rows.forEach((row, index) => {
//     ctx.fillText(row.name, 10, 20 + index * 30)
//   })

//   return canvas.toDataURL()
// }

const VirtuosoComponents = ({ findItem, moveItems, selected }) => ({
  Scroller: forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: forwardRef((props, ref) => <Table {...props} ref={ref} />),
  TableHead: forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow: ({ item, ...props }) => {
    const isSelected = selected.some(
      selectedItem => selectedItem.id === item.id
    )

    const [{ isDragging }, dragRef] = useDrag(
      () => ({
        type: ItemTypes.ITEM,
        isDragging: monitor => {
          return selected.length > 0
            ? selected.some(selectedItem => selectedItem.id === item.id)
            : item.id === monitor.getItem().selectedItems[0].id
        },
        item: {
          selectedItems: isSelected ? selected : [item]
        },
        canDrag: () => !item.isFolder,
        collect: monitor => {
          return {
            isDragging: monitor.isDragging()
          }
        }
      }),
      [item, selected]
    )

    const [, drop] = useDrop(
      () => ({
        accept: ItemTypes.ITEM,
        drop: ({ selectedItems }) => {
          if (selectedItems.some(({ id }) => id !== item.id) && item.isFolder) {
            const { index: overIndex } = findItem(item.id)
            moveItems(selectedItems, overIndex)
          }
        }
      }),
      [findItem, moveItems, item.id]
    )

    // const rows = selected.length > 0 ? selected : [item]

    return (
      <>
        {/* <DragPreviewImage connect={preview} src={createPreview(rows)} /> */}
        <TableRow
          {...props}
          data-selected={isSelected || undefined}
          selected={isSelected}
          ref={node => dragRef(drop(node))}
          hover
          style={getStyle(isDragging)}
        />
      </>
    )
  },
  TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />)
})

export default VirtuosoComponents
