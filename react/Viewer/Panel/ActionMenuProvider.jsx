import React, { createContext, useContext } from 'react'

/**
 * @typedef {object} useActionMenuContextReturn
 * @property {string} information
 * @property {string} page
 */

const ActionMenuContext = createContext()

const ActionMenuProvider = ({ children, editPathByModelProps = {} }) => {
  return (
    <ActionMenuContext.Provider value={editPathByModelProps}>
      {children}
    </ActionMenuContext.Provider>
  )
}

/**
 * @returns {useActionMenuContextReturn}
 */
const useActionMenuContext = () => {
  const actionMenuContext = useContext(ActionMenuContext)
  if (!actionMenuContext) {
    throw new Error(
      'ActionMenuContext must be used within a ActionMenuProvider'
    )
  }

  return actionMenuContext
}

export default useActionMenuContext

export { ActionMenuProvider }
