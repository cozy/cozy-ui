import isEqual from 'lodash/isEqual'
import React, { createContext, useContext, useState } from 'react'

const SelectionContext = createContext()

export const useSelection = () => {
  const context = useContext(SelectionContext)

  if (!context) {
    throw new Error('useSelection must be used within a SelectionProvider')
  }
  return context
}

/**
 * This provider allows you to manage item selection
 */
const SelectionProvider = ({ children }) => {
  const [selectedItemsId, setSelectedItemsId] = useState([])

  const isSelectedItem = itemId => {
    return selectedItemsId.some(selectedItemId => selectedItemId === itemId)
  }

  const isSelectionEnabled = selectedItemsId.length > 0

  const addSelectedItem = itemId => {
    setSelectedItemsId(prev => [...prev, itemId])
  }

  const removeSelectedItem = itemId => {
    setSelectedItemsId(prev => prev.filter(el => el !== itemId))
  }

  const toggleSelectedItem = itemId => {
    if (isSelectedItem(itemId)) {
      removeSelectedItem(itemId)
    } else {
      addSelectedItem(itemId)
    }
  }

  const selectAll = itemsId => {
    setSelectedItemsId(itemsId)
  }

  const unselectAll = () => {
    setSelectedItemsId([])
  }

  const isSelectedAllItems = itemsId => {
    const a = selectedItemsId.sort()
    const b = itemsId.sort()
    return isEqual(a, b)
  }

  const toggleSelectAllItems = itemsId => {
    if (isSelectedAllItems(itemsId)) {
      unselectAll()
    } else {
      selectAll(itemsId)
    }
  }

  return (
    <SelectionContext.Provider
      value={{
        selectedItemsId,
        addSelectedItem,
        removeSelectedItem,
        toggleSelectedItem,
        selectAll,
        toggleSelectAllItems,
        isSelectedItem,
        isSelectionEnabled,
        isSelectedAllItems
      }}
    >
      {children}
    </SelectionContext.Provider>
  )
}

export default React.memo(SelectionProvider)
