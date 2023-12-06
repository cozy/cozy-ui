import React from 'react'
import { default as MUIDialog } from '@material-ui/core/Dialog'

import { useCozyTheme } from '../providers/CozyTheme'
import { useDialogEffects } from './DialogEffects'

const Dialog = props => {
  const variant = useCozyTheme()

  useDialogEffects(props.open, props.fullScreen)

  return <MUIDialog className={`CozyTheme--light-${variant}`} {...props} />
}
export default Dialog

export { default as DialogActions } from './DialogActions'
export { default as DialogContent } from './DialogContent'
export { default as DialogContentText } from './DialogContentText'
export { default as DialogTitle } from './DialogTitle'
