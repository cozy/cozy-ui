import React, { forwardRef } from 'react'

import TableRowWithDnD from './DnD/TableRowWithDnD'
import TableRow from '../../TableRow'

const TableRowWrapper = forwardRef(
  (
    { dragProps, selectedItems, isSelectedItem, item, clearSelected, ...props },
    ref
  ) => {
    const isSelected = isSelectedItem(item)
    const tableRowProps = {
      ...props,
      hover: true
    }

    if (!dragProps) {
      return <TableRow {...tableRowProps} selected={isSelected} ref={ref} />
    }

    return (
      <TableRowWithDnD
        {...tableRowProps}
        dragProps={dragProps}
        clearSelected={clearSelected}
        item={item}
        selectedItems={selectedItems}
        isSelected={isSelected}
        ref={ref}
      />
    )
  }
)

export default TableRowWrapper
