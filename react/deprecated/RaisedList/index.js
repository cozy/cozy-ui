import React from 'react'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'

import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logRaisedListDepecrated = createDepreciationLogger()

/**
 * @deprecated Please use a combination of List & Paper : <Paper elevation={4}><List /></Paper>
 */
export default props => {
  logRaisedListDepecrated(
    'RaisedList is deprecated, please use a combination of List & Paper : <Paper elevation={4}><List /></Paper>'
  )
  return (
    <Paper elevation={2}>
      <List {...props} />
    </Paper>
  )
}
