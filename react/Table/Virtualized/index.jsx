import PropTypes from 'prop-types'
import React, {
  useMemo,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react'
import { TableVirtuoso, GroupedTableVirtuoso } from 'react-virtuoso'

export { VirtuosoMockContext } from 'react-virtuoso'

import FixedHeaderContent from './FixedHeaderContent'
import RowContent from './RowContent'
import { stableSort, getComparator } from './helpers'
import { useKeyboardSelection } from './useKeyboardSelection'
import virtuosoComponents from './virtuosoComponents'
import TableCell from '../../TableCell'

const VirtualizedTable = forwardRef(
  (
    {
      rows,
      columns,
      groups,
      defaultOrder,
      sortingMode,
      selectedItems,
      isSelectedItem,
      componentsProps,
      context,
      components,
      onSortChange,
      isNewItem,
      onSelectionChange,
      ...props
    },
    ref
  ) => {
    const virtuosoRef = useRef()
    useImperativeHandle(ref, () => virtuosoRef.current)

    const [orderDirection, setOrderDirection] = useState(
      defaultOrder?.direction ?? 'asc'
    )
    const [orderBy, setOrderBy] = useState(defaultOrder?.by ?? undefined)

    const data = useMemo(
      () =>
        orderBy && sortingMode === 'client'
          ? stableSort(rows, getComparator(orderDirection, orderBy))
          : rows,
      [rows, orderBy, orderDirection, sortingMode]
    )
    const { groupLabels, groupCounts } = groups?.(data) || {}
    const isGroupedTable = !!groupCounts
    const keyboard = useKeyboardSelection({
      // custom rows do not read the keyboard props from the context
      isEnabled: !components || components === virtuosoComponents,
      rows: data,
      onSelectionChange,
      rowContent: componentsProps?.rowContent,
      virtuosoRef
    })
    const _context = {
      ...context,
      ...(isGroupedTable && { data }), // we use directly `data` prop if no groupCounts
      isSelectedItem,
      selectedItems,
      isNewItem,
      keyboard
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
        ref={virtuosoRef}
        data={!isGroupedTable ? data : undefined}
        groupCounts={isGroupedTable ? groupCounts : []}
        context={_context}
        components={components || virtuosoComponents}
        {...(keyboard && {
          rangeChanged: range => {
            keyboard.onRangeChanged(range)
            props.rangeChanged?.(range)
          }
        })}
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
            <TableCell colSpan={columns.length} size="small">
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
      />
    )
  }
)

VirtualizedTable.displayName = 'VirtualizedTable'

VirtualizedTable.defaultProps = {
  sortingMode: 'client',
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
  /** Column sorted at first: without it, no column is sorted until one is clicked */
  defaultOrder: PropTypes.shape({
    direction: PropTypes.oneOf(['asc', 'desc']),
    by: PropTypes.string
  }),
  /** Who sorts the rows. 'server': the table keeps the given order, its headers changing the sort and calling onSortChange for the caller to sort them, e.g. on its server. 'client': the table sorts them by the sorted column */
  sortingMode: PropTypes.oneOf(['client', 'server']),
  /** Context object passed down to children and virtuoso */
  context: PropTypes.object,
  /** Props passed to child components. With the default `components`, the keyboard reaches the rows: arrows, Home and End move the focus, Space calls `rowContent.onClick` and Enter `rowContent.onDoubleClick`, with `column` set to `null` */
  componentsProps: PropTypes.object,
  /** Custom components used by react-virtuoso. They opt out of the keyboard support */
  components: PropTypes.object,
  /** Array of selected items */
  selectedItems: PropTypes.array,
  /** Function to determine if a row is selected */
  isSelectedItem: PropTypes.func,
  /** Callback called after the sort */
  onSortChange: PropTypes.func,
  /** Function to determine if a row is new */
  isNewItem: PropTypes.func,
  /** Called with the row objects (not their ids) the selection must become. With the default `components`, it adds range selection (Shift+arrows, Shift+click), select all (Ctrl/Cmd+A) and clear (Escape) */
  onSelectionChange: PropTypes.func
}

export default VirtualizedTable
