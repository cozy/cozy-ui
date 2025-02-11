import React, { useState } from 'react'
import { DndProvider, useDrop, useDragDropManager } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TableVirtuoso } from 'react-virtuoso'

import FixedHeaderContent from './FixedHeaderContent'
import RowContent from './RowContent'
import VirtuosoComponents from './VirtuosoComponents'
import { stableSort, getComparator, ItemTypes } from './helpers'

const VirtualizedTable = ({ rows, columns, defaultOrder, componentsProps }) => {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(defaultOrder)
  const [selected, setSelected] = useState([])
  const [items, setItems] = useState(rows)
  const a = useDragDropManager()
  console.log('==========')
  console.log('useDragDropManager : ', a)
  console.log('==========')

  const data = stableSort(items, getComparator(order, orderBy))

  const handleSort = property => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAll = event => {
    if (event.target.checked) {
      setSelected(items)
      return
    }
    setSelected([])
  }

  const handleSelect = rowId => {
    const itemSelected = items.filter(c => c.id === rowId)[0]
    const newSelected = selected.some(item => item.id === rowId)
      ? selected.filter(item => item.id !== rowId)
      : [...selected, itemSelected]

    setSelected(newSelected)
  }

  const findItem = React.useCallback(
    id => {
      const item = items.filter(c => c.id === id)[0]
      return {
        item,
        index: items.findIndex(c => c.id === id)
      }
    },
    [items]
  )

  const moveItems = React.useCallback(
    (itemsMoved, atIndex) => {
      console.log('==========')
      console.log('itemsMoved : ', itemsMoved)
      // const { item: dragItem } = findItem(id)
      const dragItems = items.filter(c =>
        itemsMoved.some(itemMoved => c.id === itemMoved.id)
      )
      console.log('dragItems : ', dragItems)
      const { item: recipientItem } = findItem(atIndex)
      recipientItem.children =
        dragItems.length > 0
          ? [...recipientItem.children, ...dragItems]
          : recipientItem.children
      console.log('dragItems : ', dragItems)
      console.log('==========')
      const res = items.filter(c => dragItems.every(d => d.id !== c.id))
      setItems(res)
      setSelected([])
    },
    [findItem, items, setItems]
  )

  const [, drop] = useDrop(() => ({ accept: ItemTypes.ITEM }))
  const components = VirtuosoComponents({ moveItems, findItem, selected })

  return (
    <TableVirtuoso
      data={data}
      scrollerRef={drop}
      components={components}
      fixedHeaderContent={() => (
        <FixedHeaderContent
          columns={columns}
          rowCount={items.length}
          selectedCount={selected.length}
          order={order}
          orderBy={orderBy}
          onClick={handleSort}
          onSelectAllClick={handleSelectAll}
        />
      )}
      itemContent={(_index, row) => (
        <RowContent
          index={_index}
          row={row}
          columns={columns}
          selected={selected}
          onSelectClick={handleSelect}
        >
          {componentsProps?.rowContent?.children}
        </RowContent>
      )}
      rowSpan={2}
      overscan={{ main: 5, reverse: 5 }}
    />
  )
}

const VirtuosoTableWrapper = ({ rows, defaultOrder }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <VirtualizedTable rows={rows} defaultOrder={defaultOrder} />
    </DndProvider>
  )
}

export default VirtuosoTableWrapper
