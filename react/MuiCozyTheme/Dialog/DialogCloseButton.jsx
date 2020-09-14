import React from 'react'
import DialogCloseButton from '../../Dialog/DialogCloseButton'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDepecratedMUIDialog = createDepreciationLogger()

const DeprecatedDialogCloseButton = props => {
  logDepecratedMUIDialog(
    'DialogCloseButton is now exported from the cozy-ui Dialog folder. Please change the import path to "cozy-ui/transpiled/react/Dialog/DialogCloseButton"'
  )
  return <DialogCloseButton {...props} />
}

export default DeprecatedDialogCloseButton
