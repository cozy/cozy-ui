import { useRef, useState } from 'react'

const ROW_KEY_ACTIONS = {
  ArrowDown: 'next',
  ArrowUp: 'previous',
  Home: 'first',
  End: 'last',
  ' ': 'click',
  Enter: 'open',
  Escape: 'clear'
}

const getRowKeyAction = event => {
  const isSelectAll =
    (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a'
  if (isSelectAll) return 'selectAll'
  return ROW_KEY_ACTIONS[event.key] ?? null
}

const computeTargetIndex = ({ action, index, rowsCount }) => {
  if (action === 'next') return Math.min(index + 1, rowsCount - 1)
  if (action === 'previous') return Math.max(index - 1, 0)
  if (action === 'first') return 0
  if (action === 'last') return rowsCount - 1
  return null
}

const rowsBetween = (rows, from, to) =>
  rows.slice(Math.min(from, to), Math.max(from, to) + 1)

/**
 * Moves a focused row with the keyboard, and selects rows like a file manager
 * when the table reports its selection changes
 *
 * @param {object} params
 * @param {boolean} params.isEnabled - False when the table renders its own rows
 * @param {Array} params.rows - Rows in their displayed order
 * @param {Function} [params.onSelectionChange] - Receives the rows the selection must become
 * @param {object} params.virtuosoRef - Ref to the virtuoso handle, to scroll to the focused row
 * @returns {object|null} What the rows need, null when disabled
 */
export const useKeyboardSelection = ({
  isEnabled,
  rows,
  onSelectionChange,
  rowContent,
  virtuosoRef
}) => {
  // rows, not indexes, so the focus and the range survive a sort or a change of rows
  const [focus, setFocus] = useState({ row: null, index: 0 })
  const anchorRow = useRef(null)
  // the focused row may not be rendered yet, so it takes the focus once it is
  const isFocusPending = useRef(false)

  if (!isEnabled) return null

  const clamp = index => Math.max(0, Math.min(rows.length - 1, index))
  const foundIndex = rows.indexOf(focus.row)
  const focusedIndex = foundIndex === -1 ? clamp(focus.index) : foundIndex

  const focusRow = index => {
    // the same index does not re-render, so a pending focus would fire on some later render
    if (index !== focusedIndex) {
      isFocusPending.current = true
      setFocus({ row: rows[index], index })
    }
    virtuosoRef.current?.scrollIntoView({ index })
  }

  const extendSelection = (index, fallbackAnchorIndex) => {
    if (!rows.includes(anchorRow.current)) {
      anchorRow.current = rows[fallbackAnchorIndex]
    }
    onSelectionChange(rowsBetween(rows, rows.indexOf(anchorRow.current), index))
  }

  const moveFocus = (index, isExtending) => {
    if (isExtending && onSelectionChange) {
      extendSelection(index, focusedIndex)
    } else {
      anchorRow.current = rows[index]
    }
    focusRow(index)
  }

  const onRowKeyDown = (event, index) => {
    // keys typed in a control inside the row belong to that control
    if (event.target !== event.currentTarget) return

    const row = rows[index]
    const action = getRowKeyAction(event)
    const targetIndex = computeTargetIndex({
      action,
      index,
      rowsCount: rows.length
    })

    if (targetIndex !== null) {
      event.preventDefault()
      moveFocus(targetIndex, event.shiftKey)
      return
    }

    const actionHandlers = {
      click: () => {
        anchorRow.current = row
        rowContent?.onClick?.(row, null)
      },
      open: () =>
        (rowContent?.onDoubleClick ?? rowContent?.onClick)?.(row, null),
      clear: onSelectionChange ? () => onSelectionChange([]) : null,
      selectAll: onSelectionChange ? () => onSelectionChange(rows) : null
    }
    const runAction = actionHandlers[action]
    if (!runAction) return

    event.preventDefault()
    runAction()
  }

  const onRowFocus = (event, index) => {
    if (event.target === event.currentTarget) {
      setFocus({ row: rows[index], index })
    }
  }

  const onRowClick = index => {
    anchorRow.current = rows[index]
  }

  const onRowShiftClick = index => {
    extendSelection(index, index)
    focusRow(index)
  }

  // a scroll can unmount the focused row, and the table must stay in the tab order
  const onRangeChanged = ({ startIndex, endIndex }) => {
    const isFocusedRowRendered =
      focusedIndex >= startIndex && focusedIndex <= endIndex
    if (!isFocusedRowRendered && !isFocusPending.current) {
      setFocus({ row: rows[startIndex], index: startIndex })
    }
  }

  return {
    focusedIndex,
    isFocusPending,
    onRowKeyDown,
    onRowFocus,
    onRowClick,
    onRowShiftClick: onSelectionChange ? onRowShiftClick : null,
    onRangeChanged
  }
}
