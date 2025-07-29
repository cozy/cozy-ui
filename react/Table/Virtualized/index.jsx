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
      selectedItems,
      onSelect,
      onSelectAll,
      isSelectedItem,
      componentsProps,
      context,
      components,
      ...props
    },
    ref
  ) => {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState(defaultOrder)

    const sortedData = stableSort(rows, getComparator(order, orderBy))
    const data = secondarySort ? secondarySort(sortedData) : sortedData
    const _context = {
      ...context,
      isSelectedItem,
      selectedItems
    }

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

    return (
      <TableVirtuoso
        {...props}
        ref={ref}
        data={data}
        context={_context}
        components={components || virtuosoComponents}
        fixedHeaderContent={() => (
          <FixedHeaderContent
            {...componentsProps?.fixedHeaderContent}
            columns={columns}
            rowCount={rows.length}
            context={_context}
            order={order}
            orderBy={orderBy}
            onClick={handleSort}
            onSelectAllClick={handleSelectAll}
          />
        )}
        itemContent={(_index, row, context) => (
          <RowContent
            {...componentsProps?.rowContent}
            index={_index}
            row={row}
            columns={columns}
            context={context}
            onSelectClick={onSelect}
          >
            {componentsProps?.rowContent?.children}
          </RowContent>
        )}
        rowSpan={2}
      />
    )
  }
)

VirtualizedTable.displayName = 'VirtualizedTable'

VirtualizedTable.defaultProps = {
  selectedItems: [],
  isSelectedItem: () => {},
  onSelect: () => {},
  onSelectAll: () => {}
}

export default VirtualizedTable
