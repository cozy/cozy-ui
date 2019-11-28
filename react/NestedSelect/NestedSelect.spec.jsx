import React from 'react'
import NestedSelect, { ItemRow } from './NestedSelect'
import CompositeRow from '../CompositeRow'

describe('NestedSelect', () => {
  const options = {
    children: [
      { title: 'A' },
      { title: 'B', children: [{ title: 'B1' }, { title: 'B2' }] },
      { title: 'C' }
    ]
  }

  const findSelectedRow = root => {
    return root.findWhere(n => {
      if (n.type() != ItemRow) {
        return false
      }
      return n.props().isSelected
    })
  }

  const simulateClick = row =>
    row
      .find(CompositeRow)
      .props()
      .onClick()

  const setup = ({ canSelectParent, itemSelected }) => {
    // Very crude notion of parenting
    const isParent = (item, childItem) => {
      return childItem && childItem.title.includes(item.title)
    }

    const isSelected = (item, level) => {
      if (level === 0 && isParent(item, itemSelected)) {
        return true
      } else if (itemSelected && itemSelected.title === item.title) {
        return true
      } else {
        return false
      }
    }

    const root = mount(
      <NestedSelect
        canSelectParent={canSelectParent}
        options={options}
        isSelected={isSelected}
        onSelect={jest.fn()}
        onCancel={jest.fn()}
      />
    )
    return { root }
  }

  describe('when selecting a normal category', () => {
    it('should show only one selected item', () => {
      const { root } = setup({
        itemSelected: { title: 'B1' }
      })
      const selectedRow = findSelectedRow(root)
      expect(selectedRow.length).toBe(1)
      expect(selectedRow.text()).toBe('B')
      simulateClick(selectedRow)
      root.update()

      const selectedRow2 = findSelectedRow(root)
      expect(selectedRow2.length).toBe(1)
      expect(selectedRow2.text()).toBe('B1')
    })
  })

  describe('when allowing parent to be selected', () => {
    it('should show a line for the parent inside the category', () => {
      const { root } = setup({
        itemSelected: { title: 'B1' },
        canSelectParent: true
      })
      const selectedRow = findSelectedRow(root)
      expect(selectedRow.length).toBe(1)
      simulateClick(selectedRow)
      root.update()

      expect(root.find(ItemRow).length).toBe(3)
    })
  })
})
