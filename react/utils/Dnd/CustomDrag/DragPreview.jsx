import React from 'react'

import Badge from '../../../Badge'
import Paper from '../../../Paper'
import Typography from '../../../Typography'
import { makeStyles } from '../../../styles'

const useStyles = makeStyles({
  root: {
    width: 'fit-content'
  }
})

const DragPreview = ({ fileName, selectedCount }) => {
  const classes = useStyles()

  return (
    <>
      {selectedCount > 1 ? (
        <Badge
          badgeContent={selectedCount}
          size="large"
          color="primary"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          overlap="rectangular"
        >
          <Paper classes={classes} className="u-p-half u-maw-5">
            <Typography>{fileName}</Typography>
          </Paper>
        </Badge>
      ) : (
        <Paper classes={classes} className="u-p-half u-maw-5">
          <Typography>{fileName}</Typography>
        </Paper>
      )}
    </>
  )
}

export default React.memo(DragPreview)
