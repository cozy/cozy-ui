import React, { createContext, useState, useContext, useMemo } from 'react'

import { handleClose } from './helpers'
import Alert from '../../Alert'
import AlertTitle from '../../AlertTitle'
import Snackbar from '../../Snackbar'

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

const AlertProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)
  // noTimeOut and noClickAway are destructured to not being passed to the DOM through ...alertProps
  const {
    open,
    message,
    title,
    duration,
    noTimeOut, // eslint-disable-line no-unused-vars
    noClickAway, // eslint-disable-line no-unused-vars
    ...alertProps
  } = state

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
          onClose={ev => handleClose(state, setState)(ev, 'click')}
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
