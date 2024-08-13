import React, { createContext, useState, useContext, useMemo } from 'react'

import Snackbar from '../../Snackbar'
import Alert from '../../Alert'
import AlertTitle from '../../AlertTitle'

/**
 * @typedef {import('../../Alert').AlertProps & { message: string, title: string }} ShowAlertArgs
 */
/**
 * @typedef {object} UseAlertReturn
 * @property {(args: ShowAlertArgs) => void} showAlert
 */

export const AlertContext = createContext()

/**
 * @returns {UseAlertReturn}
 */
export const useAlert = () => {
  const context = useContext(AlertContext)

  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider')
  }
  return context
}

const defaultState = {
  title: '',
  message: '',
  duration: null,
  open: false
}
const handleClose = (state, setState) => () => {
  return setState({ ...state, open: false })
}

const AlertProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)
  const { open, message, title, duration, ...alertProps } = state

  const value = useMemo(
    () => ({
      /**
       * @param {ShowAlertArgs} args
       */
      showAlert: args => {
        setState({ open: true, ...args })
      }
    }),
    []
  )

  return (
    <AlertContext.Provider value={value}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose(state, setState)}
      >
        <Alert
          variant="filled"
          elevation={6}
          onClose={handleClose(state, setState)}
          {...alertProps}
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  )
}

export default React.memo(AlertProvider)
