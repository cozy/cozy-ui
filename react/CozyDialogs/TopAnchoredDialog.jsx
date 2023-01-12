import React from 'react'

import { withStyles } from '../styles'
import Dialog from '../Dialog'

/**
 * A Dialog that will not be centered vertically. Useful when
 * the height of the dialog can vary, for example if there are
 * tabs inside the dialog, or if there is a list that can be
 * filtered.
 *
 * Normally, the Dialog is centered vertically, and this can lead
 * to "jumps" if the content gets taller or shorter.
 */
const TopAnchoredDialog = withStyles({
  scrollPaper: {
    alignItems: 'start'
  },

  // Necessary to prevent warnings at runtime
  paper: {}
})(props => {
  return <Dialog {...props} />
})
export default TopAnchoredDialog
