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

  const isSelectedItem = item => {
    return selectedItemsId.some(selectedItemId => selectedItemId === item._id)
  }

  const isSelectionEnabled = selectedItemsId.length > 0

  const addSelectedItem = item => {
    setSelectedItemsId(prev => [...prev, item._id])
  }

  const removeSelectedItem = item => {
    setSelectedItemsId(prev => prev.filter(el => el !== item._id))
  }

  const toggleSelectedItem = item => {
    if (isSelectedItem(item)) {
      removeSelectedItem(item)
    } else {
      addSelectedItem(item)
    }
  }

  const selectAll = items => {
    const ids = items.map(item => item._id)
    setSelectedItemsId(ids)
  }

  const unselectAll = () => {
    setSelectedItemsId([])
  }

  const isSelectedAllItems = items => {
    const a = selectedItemsId.sort()
    const b = items.map(item => item._id).sort()
    return isEqual(a, b)
  }

  const toggleSelectAllItems = items => {
    if (isSelectedAllItems(items)) {
      unselectAll()
    } else {
      selectAll(items)
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
