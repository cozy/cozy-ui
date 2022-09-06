import React, { createContext, useContext, useState } from 'react'

/**
 * @typedef {('primary'|'secondary'|'success'|'error'|'warning'|'info')} enumSeverity
 */
/**
 * @typedef {object} useViewerSnackbarReturn
 * @property {boolean} isViewerSnackbarOpen
 * @property {string} viewerSnackbarMessage
 * @property {enumSeverity} viewerSnackbarSeverity
 * @property {(severity: enumSeverity, message: string) => void} showViewerSnackbar
 * @property {(message: string) => void} hideViewerSnackbar
 */

const ViewerSnackbarContext = createContext()

const ViewerSnackbarProvider = ({ children }) => {
  const [isViewerSnackbarOpen, setIsViewerSnackbarOpen] = useState(false)
  const [viewerSnackbarMessage, setViewerSnackbarMessage] = useState('')
  const [viewerSnackbarSeverity, setViewerSnackbarSeverity] = useState(
    'primary'
  )

  const showViewerSnackbar = (severity, message) => {
    setIsViewerSnackbarOpen(true)
    setViewerSnackbarMessage(message)
    setViewerSnackbarSeverity(severity)
  }
  const hideViewerSnackbar = () => {
    setIsViewerSnackbarOpen(false)
  }

  const result = {
    isViewerSnackbarOpen,
    viewerSnackbarMessage,
    viewerSnackbarSeverity,
    showViewerSnackbar,
    hideViewerSnackbar
  }

  return (
    <ViewerSnackbarContext.Provider value={result}>
      {children}
    </ViewerSnackbarContext.Provider>
  )
}

/**
 * @returns {useViewerSnackbarReturn}
 */
const useViewerSnackbar = () => {
  const viewerSnackbar = useContext(ViewerSnackbarContext)
  if (!viewerSnackbar) {
    throw new Error(
      'ViewerSnackbarContext must be used within a ViewerSnackbarProvider'
    )
  }

  return viewerSnackbar
}

export default useViewerSnackbar

export { ViewerSnackbarProvider }
