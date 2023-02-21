import React from 'react'
import DialogContent from '../../Dialog/DialogContent'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDepecratedMUIDialog = createDepreciationLogger()

const OldDialogContent = props => {
  logDepecratedMUIDialog(
    'DialogContent is now exported from the cozy-ui Dialog folder. Please change the import path to "cozy-ui/transpiled/react/Dialog/DialogContent"'
  )
  return <DialogContent {...props} />
}

export default OldDialogContent
