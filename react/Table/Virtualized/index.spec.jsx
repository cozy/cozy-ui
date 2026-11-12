import { fireEvent, render, screen } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import React from 'react'

import VirtualizedTable, { VirtuosoMockContext } from '.'
import { useKeyboardSelection } from './useKeyboardSelection'
import DemoProvider from '../../providers/DemoProvider'

const rows = [
  { id: 'a', name: 'Alice' },
  { id: 'b', name: 'Bob' },
  { id: 'c', name: 'Carol' },
  { id: 'd', name: 'Dave' }
]
const columns = [{ id: 'name', label: 'Name' }]

const Table = ({ onSelectionChange, onClick, onDoubleClick, ...props }) => (
  <DemoProvider>
    <VirtuosoMockContext.Provider
      value={{ viewportHeight: 400, itemHeight: 40 }}
    >
      <VirtualizedTable
        rows={rows}
        columns={columns}
        onSelectionChange={onSelectionChange}
        componentsProps={{ rowContent: { onClick, onDoubleClick } }}
        {...props}
      />
    </VirtuosoMockContext.Provider>
  </DemoProvider>
)

const setup = props => render(<Table {...props} />)

const getRow = name => screen.getByText(name).closest('tr')

describe('VirtualizedTable keyboard', () => {
  it('moves the focus between rows with the arrows', () => {
    setup()

    expect(getRow('Alice')).toHaveAttribute('tabindex', '0')
    expect(getRow('Bob')).toHaveAttribute('tabindex', '-1')

    fireEvent.keyDown(getRow('Alice'), { key: 'ArrowDown' })

    expect(getRow('Bob')).toHaveFocus()
    expect(getRow('Bob')).toHaveAttribute('tabindex', '0')
    expect(getRow('Alice')).toHaveAttribute('tabindex', '-1')
  })

  it('selects the rows from the anchor with Shift and the arrows', () => {
    const onSelectionChange = jest.fn()
    setup({ onSelectionChange })

    fireEvent.keyDown(getRow('Alice'), { key: 'ArrowDown' })
    fireEvent.keyDown(getRow('Bob'), { key: 'ArrowDown', shiftKey: true })
    fireEvent.keyDown(getRow('Carol'), { key: 'ArrowDown', shiftKey: true })

    expect(onSelectionChange).toHaveBeenLastCalledWith([
      rows[1],
      rows[2],
      rows[3]
    ])
  })

  it('selects the rows between the last clicked row and a Shift+click', () => {
    const onSelectionChange = jest.fn()
    const onClick = jest.fn()
    setup({ onSelectionChange, onClick })

    fireEvent.click(screen.getByText('Bob'))
    fireEvent.click(screen.getByText('Dave'), { shiftKey: true })

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onSelectionChange).toHaveBeenCalledWith([rows[1], rows[2], rows[3]])
  })

  it('starts the range on the row of a first Shift+click', () => {
    const onSelectionChange = jest.fn()
    setup({ onSelectionChange })

    fireEvent.click(screen.getByText('Carol'), { shiftKey: true })

    expect(onSelectionChange).toHaveBeenCalledWith([rows[2]])
  })

  it('selects all rows with Ctrl+A and clears the selection with Escape', () => {
    const onSelectionChange = jest.fn()
    setup({ onSelectionChange })

    fireEvent.keyDown(getRow('Alice'), { key: 'a', ctrlKey: true })
    expect(onSelectionChange).toHaveBeenLastCalledWith(rows)

    fireEvent.keyDown(getRow('Alice'), { key: 'Escape' })
    expect(onSelectionChange).toHaveBeenLastCalledWith([])
  })

  it('clicks the row with Space and opens it with Enter, without a column', () => {
    const onClick = jest.fn()
    const onDoubleClick = jest.fn()
    setup({ onClick, onDoubleClick })

    fireEvent.keyDown(getRow('Bob'), { key: ' ' })
    expect(onClick).toHaveBeenCalledWith(rows[1], null)

    fireEvent.keyDown(getRow('Bob'), { key: 'Enter' })
    expect(onDoubleClick).toHaveBeenCalledWith(rows[1], null)
  })

  it('keeps the focus on its row when the rows are sorted', () => {
    const { rerender } = setup()

    fireEvent.keyDown(getRow('Alice'), { key: 'ArrowDown' })
    rerender(<Table rows={[...rows].reverse()} />)

    expect(getRow('Bob')).toHaveAttribute('tabindex', '0')
  })

  it('keeps a row in the tab order when the focused row is removed', () => {
    const { rerender } = setup()

    fireEvent.keyDown(getRow('Alice'), { key: 'End' })
    rerender(<Table rows={rows.slice(0, 2)} />)

    expect(getRow('Bob')).toHaveAttribute('tabindex', '0')
  })

  it('leaves the keys typed in a control of the row to that control', () => {
    const onSelectionChange = jest.fn()
    setup({ onSelectionChange })

    const button = document.createElement('button')
    getRow('Alice').firstChild.appendChild(button)
    fireEvent.keyDown(button, { key: 'a', ctrlKey: true })

    expect(onSelectionChange).not.toHaveBeenCalled()
  })

  it('moves the focus to the first rendered row when the focused row scrolls out', () => {
    const { result } = renderHook(() =>
      useKeyboardSelection({
        isEnabled: true,
        rows,
        virtuosoRef: { current: null }
      })
    )

    act(() => result.current.onRangeChanged({ startIndex: 2, endIndex: 3 }))

    expect(result.current.focusedIndex).toBe(2)
  })
})
