import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import NestedSelect, { ItemRow } from './NestedSelect'
import ListItem from '../ListItem'
import { BreakpointsProvider } from '../hooks/useBreakpoints'

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
      .find(ListItem)
      .props()
      .onClick()

  const setup = ({ canSelectParent, itemSelected, searchOptions }) => {
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

    const use = searchOptions ? render : mount
    const root = use(
      <BreakpointsProvider>
        <NestedSelect
          canSelectParent={canSelectParent}
          options={options}
          isSelected={isSelected}
          onSelect={jest.fn()}
          onCancel={jest.fn()}
          searchOptions={searchOptions}
        />
      </BreakpointsProvider>
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

  describe('when there is a search options defined', () => {
    it('should not display search input when we are in a subcategory', () => {
      const searchOptions = {
        placeholderSearch: 'Placeholder Search',
        noDataLabel: 'No Data Found',
        onSearch: () => {
          return []
        }
      }
      const { root } = setup({
        searchOptions
      })

      fireEvent.click(root.getByText('B'))
      expect(root.queryByPlaceholderText('Placeholder Search')).toBeFalsy()
    })

    it('should return no data (onSearch return [])', () => {
      const searchOptions = {
        placeholderSearch: 'Placeholder Search',
        noDataLabel: 'No Data Found',
        onSearch: () => {
          return []
        }
      }
      const { root } = setup({
        searchOptions
      })
      const searchInput = root.getByPlaceholderText('Placeholder Search')
      expect(searchInput).toBeTruthy()

      fireEvent.change(searchInput, { target: { value: 'cozy' } })
      const noData = root.getByText('No Data Found')
      expect(noData).toBeTruthy()
    })

    it('should show search results', () => {
      const data = [
        { title: 'cozy 1' },
        { title: 'cozy 2' },
        { title: 'anything' }
      ]
      const searchOptions = {
        placeholderSearch: 'Placeholder Search',
        noDataLabel: 'No Data Found',
        onSearch: value => {
          // Your custom search
          return data.filter(d => d.title.startsWith(value))
        }
      }
      const { root } = setup({
        itemSelected: { title: 'B1' },
        canSelectParent: true,
        searchOptions
      })

      const searchInput = root.getByPlaceholderText('Placeholder Search')
      expect(searchInput).toBeTruthy()

      fireEvent.change(searchInput, { target: { value: 'cozy' } })

      expect(root.queryByText('cozy 1')).toBeTruthy()
      expect(root.queryByText('cozy 1')).toBeTruthy()
      expect(root.queryByText('anything')).toBeFalsy()
    })
  })
})
