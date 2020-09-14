import React from 'react'
import DialogContentText from '../../Dialog/DialogContentText'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDepecratedMUIDialog = createDepreciationLogger()

const OldDialogContentText = props => {
  logDepecratedMUIDialog(
    'DialogContentText is now exported from the cozy-ui Dialog folder. Please change the import path to "cozy-ui/transpiled/react/Dialog/DialogContentText"'
  )
  return <DialogContentText {...props} />
}

export default OldDialogContentText
