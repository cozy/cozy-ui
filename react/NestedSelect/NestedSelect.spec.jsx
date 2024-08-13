import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'

import NestedSelect from './NestedSelect'
import { BreakpointsProvider } from '../providers/Breakpoints'

describe('NestedSelect', () => {
  const makeOption = text => ({
    id: text,
    key: text,
    title: text
  })
  const makeOptions = itemSelected => ({
    focusedId: itemSelected?.title,
    children: [
      makeOption('A'),
      {
        ...makeOption('B'),
        children: [makeOption('B1'), makeOption('B2')]
      },
      makeOption('C')
    ]
  })

  const setup = ({
    canSelectParent,
    itemSelected,
    searchOptions,
    onSelect = jest.fn(),
    onCancel = jest.fn()
  } = {}) => {
    const isSelected = item => {
      if (!itemSelected) {
        return false
      }
      return item.title === itemSelected.title
    }

    const options = makeOptions(itemSelected)

    return render(
      <BreakpointsProvider>
        <NestedSelect
          canSelectParent={canSelectParent}
          options={options}
          isSelected={isSelected}
          onSelect={onSelect}
          onCancel={onCancel}
          searchOptions={searchOptions}
        />
      </BreakpointsProvider>
    )
  }

  describe('when no item is already selected', () => {
    it('should show only children items after click on parent', () => {
      const { queryByText } = setup()
      const selectedRow = queryByText('B')
      expect(selectedRow).toBeInTheDocument()
      fireEvent.click(selectedRow)

      const selectedRowB = queryByText('B')
      const selectedRowB1 = queryByText('B1')
      const selectedRowB2 = queryByText('B2')

      expect(selectedRowB).toBeNull()
      expect(selectedRowB1).toBeInTheDocument()
      expect(selectedRowB2).toBeInTheDocument()
    })

    it('should show parent item & children items after click on parent', () => {
      const { queryByText } = setup({ canSelectParent: true })
      const selectedRow = queryByText('B')
      expect(selectedRow).toBeInTheDocument()
      fireEvent.click(selectedRow)

      const selectedRowB = queryByText('B')
      const selectedRowB1 = queryByText('B1')
      const selectedRowB2 = queryByText('B2')
      expect(selectedRowB).toBeInTheDocument()
      expect(selectedRowB1).toBeInTheDocument()
      expect(selectedRowB2).toBeInTheDocument()
    })
  })

  describe('when item is already selected', () => {
    it('should show the selected item', () => {
      const { queryByText } = setup({ itemSelected: { title: 'B1' } })

      const selectedRowB = queryByText('B')
      const selectedRowB1 = queryByText('B1')
      const selectedRowB2 = queryByText('B2')

      expect(selectedRowB).toBeNull()
      expect(selectedRowB1).toBeInTheDocument()
      expect(selectedRowB2).toBeInTheDocument()
    })
    it('should show the selected item (with parent)', () => {
      const { queryByText } = setup({
        itemSelected: { title: 'B1', id: 'B1' },
        canSelectParent: true
      })

      const selectedRowB = queryByText('B')
      const selectedRowB1 = queryByText('B1')
      const selectedRowB2 = queryByText('B2')

      expect(selectedRowB).toBeInTheDocument()
      expect(selectedRowB1).toBeInTheDocument()
      expect(selectedRowB2).toBeInTheDocument()
    })
  })

  describe('when clicking on an item', () => {
    it("should call onSelect with the selected item (who doesn't have children)", () => {
      const onSelect = jest.fn()
      const { queryByText } = setup({ onSelect })
      const selectedRowB = queryByText('B')
      fireEvent.click(selectedRowB)

      expect(onSelect).not.toHaveBeenCalled()

      const selectedRowB1 = queryByText('B1')
      fireEvent.click(selectedRowB1)

      expect(onSelect).toHaveBeenCalledWith(makeOption('B1'))
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
      const { getByText, queryByPlaceholderText } = setup({
        searchOptions
      })

      fireEvent.click(getByText('B'))
      expect(queryByPlaceholderText('Placeholder Search')).toBeFalsy()
    })

    it('should return no data (onSearch return [])', () => {
      const searchOptions = {
        placeholderSearch: 'Placeholder Search',
        noDataLabel: 'No Data Found',
        onSearch: () => {
          return []
        }
      }
      const { getByPlaceholderText, getByText } = setup({
        searchOptions
      })
      const searchInput = getByPlaceholderText('Placeholder Search')
      expect(searchInput).toBeTruthy()

      fireEvent.change(searchInput, { target: { value: 'cozy' } })
      const noData = getByText('No Data Found')
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
      const { getByPlaceholderText, queryByText } = setup({
        canSelectParent: true,
        searchOptions
      })

      const searchInput = getByPlaceholderText('Placeholder Search')
      expect(searchInput).toBeTruthy()

      fireEvent.change(searchInput, { target: { value: 'cozy' } })

      expect(queryByText('cozy 1')).toBeTruthy()
      expect(queryByText('cozy 1')).toBeTruthy()
      expect(queryByText('anything')).toBeFalsy()
    })
  })
})
