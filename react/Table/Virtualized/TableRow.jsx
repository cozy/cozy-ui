import cx from 'classnames'
import React, { useEffect, useRef } from 'react'

import TableRowClassic from '../../TableRow'

const useKeyboardRowProps = (keyboard, index) => {
  const ref = useRef()
  const isFocused = keyboard?.focusedIndex === index

  useEffect(() => {
    if (isFocused && keyboard.isFocusPending.current) {
      keyboard.isFocusPending.current = false
      ref.current?.focus()
    }
  })

  if (!keyboard) return {}

  return {
    ref,
    tabIndex: isFocused ? 0 : -1,
    onKeyDown: event => keyboard.onRowKeyDown(event, index),
    onFocus: event => keyboard.onRowFocus(event, index),
    onClick: () => keyboard.onRowClick(index),
    ...(keyboard.onRowShiftClick && {
      // Shift+click selects rows, not the text between them, and clicks no cell
      onMouseDown: event => event.shiftKey && event.preventDefault(),
      onClickCapture: event => {
        if (!event.shiftKey) return
        event.stopPropagation()
        keyboard.onRowShiftClick(index)
      }
    })
  }
}

const TableRow = ({ item, context, className, ...props }) => {
  const index = props['data-item-index']
  const _item = item || context.data[index]
  const isSelected = context.isSelectedItem(_item)
  const keyboardProps = useKeyboardRowProps(context.keyboard, index)

  return (
    <TableRowClassic
      {...props}
      {...keyboardProps}
      className={cx(className, 'virtualized')}
      selected={isSelected}
      hover
    />
  )
}

export default TableRow
