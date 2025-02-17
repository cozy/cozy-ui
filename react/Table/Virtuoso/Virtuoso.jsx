import React, { useState, forwardRef } from 'react'
import { TableVirtuoso } from 'react-virtuoso'

import FixedHeaderContent from './FixedHeaderContent'
import RowContent from './RowContent'
import { stableSort, getComparator } from './helpers'
import virtuosoComponents from './virtuosoComponents'

const VirtualizedTable = forwardRef(
  (
    {
      rows,
      columns,
      defaultOrder,
      secondarySort,
      selectedItems = [],
      onSelect = () => {},
      onSelectAll = () => {},
      isSelectedItem = () => {},
      componentsProps,
      ...props
    },
    ref
  ) => {
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
        {...props}
        ref={ref}
        data={data}
        context={{ isSelectedItem }}
        components={virtuosoComponents}
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
        // overscan={{ main: 500, reverse: 500 }}
        // increaseViewportBy={500}
      />
    )
  }
)

export default React.memo(VirtualizedTable)
