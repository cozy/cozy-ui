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
    const [orderDirection, setOrderDirection] = useState(
      defaultOrder?.direction ?? 'asc'
    )
    const [orderBy, setOrderBy] = useState(defaultOrder?.by ?? undefined)

    const sortedData = orderBy
      ? stableSort(rows, getComparator(orderDirection, orderBy))
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
      const isAsc = orderBy === property && orderDirection === 'asc'
      const newOrder = isAsc ? 'desc' : 'asc'
      setOrderDirection(newOrder)
      setOrderBy(property)
      onSortChange?.({ order: newOrder, orderBy: property })
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
            orderDirection={orderDirection}
            orderBy={orderBy}
            onClick={handleSort}
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
  isSelectedItem: () => {}
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
  /** Context object passed down to children and virtuoso */
  context: PropTypes.object,
  /** Props passed to child components */
  componentsProps: PropTypes.object,
  /** Custom components used by react-virtuoso */
  components: PropTypes.object,
  /** Sort files by type to put directory and trash before files */
  secondarySort: PropTypes.func,
  /** Array of selected items */
  selectedItems: PropTypes.array,
  /** Function to determine if a row is selected */
  isSelectedItem: PropTypes.func,
  /** Callback called after the sort */
  onSortChange: PropTypes.func,
  /** Function to determine if a row is new */
  isNewItem: PropTypes.func
}

export default VirtualizedTable
