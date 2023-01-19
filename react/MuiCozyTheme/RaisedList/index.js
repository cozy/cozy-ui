import React from 'react'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
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
