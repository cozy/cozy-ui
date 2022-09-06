import React from 'react'

import Snackbar from '../../Snackbar'
import Alert from '../../Alert'
import useViewerSnackbar from './ViewerSnackbarProvider'

const ViewerSnackbar = () => {
  const {
    isViewerSnackbarOpen,
    viewerSnackbarMessage,
    viewerSnackbarSeverity,
    hideViewerSnackbar
  } = useViewerSnackbar()

  return (
    <Snackbar open={isViewerSnackbarOpen} onClose={hideViewerSnackbar}>
      <Alert
        variant="filled"
        elevation={6}
        onClose={hideViewerSnackbar}
        severity={viewerSnackbarSeverity}
        icon={false}
      >
        {viewerSnackbarMessage}
      </Alert>
    </Snackbar>
  )
}

export default ViewerSnackbar
