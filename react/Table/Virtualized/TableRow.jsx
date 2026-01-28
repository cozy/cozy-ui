import cx from 'classnames'
import React from 'react'

import TableRowClassic from '../../TableRow'

const TableRow = ({ item, context, className, ...props }) => {
  const _item = item || context.data[props['data-item-index']]
  const isSelected = context.isSelectedItem(_item)

  const handleClick = () => {
    if (!context.withCheckbox && _item) {
      const index = props['data-item-index']
      context.onSelect?.(_item, null, index)
    }
  }

  return (
    <TableRowClassic
      {...props}
      className={cx(className, 'virtualized')}
      selected={isSelected}
      hover
      onClick={!context.withCheckbox ? handleClick : props.onClick}
    />
  )
}

export default TableRow
