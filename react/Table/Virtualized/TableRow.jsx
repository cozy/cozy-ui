import cx from 'classnames'
import React from 'react'

import TableRowClassic from '../../TableRow'

const TableRow = ({ item, context, className, ...props }) => {
  const _item = item || context.data[props['data-item-index']]
  const isSelected = context.isSelectedItem(_item)

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
