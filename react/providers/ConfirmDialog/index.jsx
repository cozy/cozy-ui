import React, { createContext, useState, useContext, useMemo } from 'react'

import { ConfirmDialog } from '../../CozyDialogs'

export const ConfirmDialogContext = createContext()

export const useConfirmDialog = () => {
  const context = useContext(ConfirmDialogContext)

  if (!context) {
    throw new Error(
      'useConfirmDialog must be used within a ConfirmDialogProvider'
    )
  }
  return context
}

const defaultState = {
  title: '',
  content: '',
  actions: null,
  open: false
}

const handleClose = (state, setState) => () => {
  return setState({ ...state, open: false })
}

const ConfirmDialogProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)
  const { open, title, content, actions, ...confirmDialogProps } = state

  const value = useMemo(
    () => ({
      showConfirmDialog: args => {
        setState({ open: true, ...args })
      },
      closeConfirmDialog: handleClose(state, setState)
    }),
    [state]
  )

  return (
    <ConfirmDialogContext.Provider value={value}>
      {children}
      {open && (
        <ConfirmDialog
          open
          title={title}
          content={content}
          actions={actions}
          onClose={handleClose(state, setState)}
          {...confirmDialogProps}
        />
      )}
    </ConfirmDialogContext.Provider>
  )
}

export default React.memo(ConfirmDialogProvider)
