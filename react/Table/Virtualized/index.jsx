import PropTypes from 'prop-types'
import React, { useState, forwardRef, useMemo } from 'react'
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
      isNewItem,
      ...props
    },
    ref
  ) => {
    const [orderDirection, setOrderDirection] = useState()
    const [orderBy, setOrderBy] = useState()

    const [currentOrderDirection, currentOrderBy] = useMemo(() => {
      return [
        orderDirection ?? defaultOrder?.direction,
        orderBy ?? defaultOrder?.by
      ]
    }, [orderDirection, orderBy, defaultOrder])

    const sortedData = currentOrderBy
      ? stableSort(rows, getComparator(currentOrderDirection, currentOrderBy))
      : rows
    const data = secondarySort ? secondarySort(sortedData) : sortedData
    const { groupLabels, groupCounts } = groups?.(data) || {}
    const isGroupedTable = !!groupCounts
    const _context = {
      ...context,
      ...(isGroupedTable && { data }), // we use directly `data` prop if no groupCounts
      isSelectedItem,
      selectedItems,
      isNewItem
    }

    const handleSort = property => {
      const isAsc =
        currentOrderBy === property && currentOrderDirection === 'asc'
      const newOrder = isAsc ? 'desc' : 'asc'
      setOrderDirection(newOrder)
      setOrderBy(property)
      onSortChange?.({ order: newOrder, orderBy: property })
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
            orderDirection={currentOrderDirection}
            orderBy={currentOrderBy}
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
  /** Rows to display in the table */
  rows: PropTypes.array,
  /** Column configuration */
  columns: PropTypes.array,
  /** Returned object is: PropTypes.shape({ groupLabels: PropTypes.array, groupCounts: PropTypes.array }) */
  groups: PropTypes.func,
  /** Default sorting configuration */
  defaultOrder: PropTypes.shape({
    direction: PropTypes.oneOf(['asc', 'desc']),
    by: PropTypes.string
  }),
  /** Sort files by type to put directory and trash before files */
  secondarySort: PropTypes.func,
  /** Array of selected items */
  selectedItems: PropTypes.array,
  /** Callback function when a row is selected */
  onSelect: PropTypes.func,
  /** Callback function when all rows are selected/deselected */
  onSelectAll: PropTypes.func,
  /** Function to determine if a row is selected */
  isSelectedItem: PropTypes.func,
  /** Callback called after the sort */
  onSortChange: PropTypes.func,
  /** Function to determine if a row is new */
  isNewItem: PropTypes.func
}

export default VirtualizedTable
