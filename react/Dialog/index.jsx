import { default as MUIDialog } from '@material-ui/core/Dialog'
import React from 'react'

import { useDialogEffects } from './DialogEffects'
import { useCozyTheme } from '../providers/CozyTheme'

const Dialog = props => {
  const { type, variant } = useCozyTheme()

  useDialogEffects(props.open, props.fullScreen)

  return <MUIDialog className={`CozyTheme--${type}-${variant}`} {...props} />
}

Dialog.defaultProps = {
  disableEnforceFocus: true
}

export default Dialog

export { default as DialogActions } from './DialogActions'
export { default as DialogContent } from './DialogContent'
export { default as DialogContentText } from './DialogContentText'
export { default as DialogTitle } from './DialogTitle'
