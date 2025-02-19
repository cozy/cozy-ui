import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TableVirtuoso } from 'react-virtuoso'

import CustomDragLayer from './DnD/CustomDragLayer'
import { ItemTypes } from './DnD/TableRowWithDnD'
import FixedHeaderContent from './FixedHeaderContent'
import RowContent from './RowContent'
import { stableSort, getComparator } from './helpers'
import virtuosoComponents from './virtuosoComponents'

const VirtualizedTable = ({
  rows,
  columns,
  defaultOrder,
  secondarySort,
  selectedItems = [],
  onSelect = () => {},
  onSelectAll = () => {},
  isSelectedItem = () => {},
  componentsProps,
  dragProps
}) => {
  const ensureDragPropsWithId = {
    dragId: ItemTypes.ITEM,
    ...dragProps
  }
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(defaultOrder)

  const sortedData = stableSort(rows, getComparator(order, orderBy))
  const data = secondarySort ? secondarySort(sortedData) : sortedData

  const handleSort = property => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAll = event => {
    if (event?.target?.checked) {
      onSelectAll(rows)
      return
    }
    onSelectAll([])
  }

  const components = virtuosoComponents({
    isSelectedItem,
    selectedItems,
    dragProps: ensureDragPropsWithId,
    clearSelected: handleSelectAll
  })

  return (
    <>
      {/* CustomDragLayer must be here for smooth movement  */}
      <CustomDragLayer dragId={ensureDragPropsWithId.dragId} />
      <TableVirtuoso
        data={data}
        components={components}
        fixedHeaderContent={() => (
          <FixedHeaderContent
            columns={columns}
            rowCount={rows.length}
            selectedCount={selectedItems.length}
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
            isSelectedItem={isSelectedItem}
            onSelectClick={onSelect}
          >
            {componentsProps?.rowContent?.children}
          </RowContent>
        )}
        rowSpan={2}
        overscan={{ main: 5, reverse: 5 }}
      />
    </>
  )
}

const VirtuosoTableWrapper = props => {
  if (!props.dragProps) {
    return <VirtualizedTable {...props} />
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <VirtualizedTable {...props} />
    </DndProvider>
  )
}

export default VirtuosoTableWrapper
