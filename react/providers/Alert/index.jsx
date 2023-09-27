import React, { createContext, useState, useContext, useMemo } from 'react'

import Snackbar from '../../Snackbar'
import Alert from '../../Alert'

export const AlertContext = createContext()

export const useAlert = () => {
  const context = useContext(AlertContext)

  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider')
  }
  return context
}

const defaultState = { message: '', severity: 'primary', open: false }
const handleClose = (state, setState) => () => {
  return setState({ ...state, open: false })
}

const AlertProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)

  const value = useMemo(
    () => ({
      showAlert: (message, severity) => {
        setState({ message, severity, open: true })
      }
    }),
    []
  )

  return (
    <AlertContext.Provider value={value}>
      {children}
      <Snackbar open={state.open} onClose={handleClose(state, setState)}>
        <Alert
          variant="filled"
          elevation={6}
          severity={state.severity}
          onClose={handleClose(state, setState)}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  )
}

export default React.memo(AlertProvider)
