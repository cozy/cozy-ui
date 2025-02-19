import React, { memo } from 'react'

import Badge from '../../../Badge'
import Paper from '../../../Paper'
import Typography from '../../../Typography'

const DragPreview = ({ fileName, selectedCount }) => {
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
        >
          <Paper style={{ padding: '10px', width: 'fit-content' }}>
            <Typography>{fileName}</Typography>
          </Paper>
        </Badge>
      ) : (
        <Paper style={{ padding: '10px', width: 'fit-content' }}>
          <Typography>{fileName}</Typography>
        </Paper>
      )}
    </>
  )
}

export default memo(DragPreview)
