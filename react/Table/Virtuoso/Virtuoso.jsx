import React, { useState } from 'react'
import { TableVirtuoso } from 'react-virtuoso'

import FixedHeaderContent from './FixedHeaderContent'
import RowContent from './RowContent'
import VirtuosoComponents from './VirtuosoComponents'
import { stableSort, getComparator } from './helpers'

const VirtualizedTable = ({
  rows,
  columns,
  defaultOrder,
  secondarySort,
  selectedItems = [],
  onSelect = () => {},
  onSelectAll = () => {},
  isSelectedItem = () => {},
  componentsProps
}) => {
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
    if (event.target.checked) {
      onSelectAll(rows)
      return
    }
    onSelectAll([])
  }

  return (
    <TableVirtuoso
      data={data}
      components={VirtuosoComponents}
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
  )
}

export default VirtualizedTable
