import React from 'react'

import Dialog from '../../Dialog'
import DialogTitle from '../../Dialog/DialogTitle'
import DialogActions from '../../Dialog/DialogActions'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDepecratedExperimentalDialog = createDepreciationLogger()

export const ExperimentalDialog = props => {
  logDepecratedExperimentalDialog(
    'ExperimentalDialog is no longer Experimental. Please change the import path to "cozy-ui/transpiled/react/Dialog"'
  )
  return <Dialog {...props} />
}

export const ExperimentalDialogTitle = props => {
  logDepecratedExperimentalDialog(
    'ExperimentalDialogTitle is no longer Experimental. Please change the import path to "cozy-ui/transpiled/react/Dialog/DialogTitle"'
  )
  return <DialogTitle {...props} />
}

export const ExperimentalDialogActions = props => {
  logDepecratedExperimentalDialog(
    'ExperimentalDialogActions is no longer Experimental. Please change the import path to "cozy-ui/transpiled/react/Dialog/DialogActions"'
  )
  return <DialogActions {...props} />
}

export default ExperimentalDialog
