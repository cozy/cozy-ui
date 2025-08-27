import PropTypes from 'prop-types'
import React, { useState, forwardRef } from 'react'
import { TableVirtuoso, GroupedTableVirtuoso } from 'react-virtuoso'

import FixedHeaderContent from './FixedHeaderContent'
import RowContent from './RowContent'
import { stableSort, getComparator } from './helpers'
import virtuosoComponents from './virtuosoComponents'
import TableCell from '../../TableCell'

const VirtualizedTable = forwardRef(
  (
    {
      rows,
      columns,
      groups,
      defaultOrder,
      secondarySort,
      selectedItems,
      onSelect,
      onSelectAll,
      isSelectedItem,
      componentsProps,
      context,
      components,
      onSortChange,
      ...props
    },
    ref
  ) => {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState(defaultOrder)

    const sortedData = stableSort(rows, getComparator(order, orderBy))
    const data = secondarySort ? secondarySort(sortedData) : sortedData
    const { groupLabels, groupCounts } = groups?.(data) || {}
    const isGroupedTable = !!groupCounts
    const _context = {
      ...context,
      ...(isGroupedTable && { data }), // we use directly `data` prop if no groupCounts
      isSelectedItem,
      selectedItems
    }

    const handleSort = property => {
      const isAsc = orderBy === property && order === 'asc'
      const newOrder = isAsc ? 'desc' : 'asc'
      setOrder(newOrder)
      setOrderBy(property)
      onSortChange({ order: newOrder, orderBy: property })
    }

    const handleSelectAll = event => {
      if (event?.target?.checked) {
        onSelectAll(rows)
        return
      }
      onSelectAll([])
    }

    const Component = isGroupedTable ? GroupedTableVirtuoso : TableVirtuoso

    return (
      <Component
        {...props}
        ref={ref}
        data={!isGroupedTable ? data : undefined}
        groupCounts={isGroupedTable ? groupCounts : []}
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
        {...(isGroupedTable && {
          groupContent: index => (
            <TableCell colSpan={columns.length + 1} size="small">
              {groupLabels[index]}
            </TableCell>
          )
        })}
        itemContent={index => (
          <RowContent
            {...componentsProps?.rowContent}
            index={index}
            row={data[index]}
            columns={columns}
            context={_context}
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

VirtualizedTable.propTypes = {
  /**
     Returned object is: PropTypes.shape({ groupLabels: PropTypes.array, groupCounts: PropTypes.array })
  */
  groups: PropTypes.func
}

export default VirtualizedTable
