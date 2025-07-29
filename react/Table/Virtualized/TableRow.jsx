import cx from 'classnames'
import React from 'react'

import TableRowClassic from '../../TableRow'

const TableRow = ({ item, context, className, ...props }) => {
  const isSelected = context?.isSelectedItem(item)

  return (
    <TableRowClassic
      {...props}
      className={cx(className, 'virtualized')}
      selected={isSelected}
      hover
    />
  )
}

export default TableRow
