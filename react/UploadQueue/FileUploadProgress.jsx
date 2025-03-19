import LinearProgress from '@material-ui/core/LinearProgress'
import React, { useState } from 'react'
import { useIntervalWhen } from 'rooks'

import RemainingTime from './RemainingTime'
import styles from './styles.styl'
import { withStyles } from '../styles'

const FileLinearProgress = withStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius
  },
  colorPrimary: {
    backgroundColor: theme.palette.background.default
  },
  barColorPrimary: {
    backgroundColor: 'var(--emerald)'
  }
}))(LinearProgress)

const FileUploadProgress = ({ progress: progressProps }) => {
  const [progress, setProgress] = useState(progressProps)
  useIntervalWhen(
    () => {
      setProgress(progressProps)
    },
    1000,
    true,
    true
  )

  return (
    <div className={styles['upload-queue__upload-progress']}>
      <div className="u-flex-grow-1 u-pr-1">
        <FileLinearProgress
          variant="determinate"
          value={(progress.loaded / progress.total) * 100}
        />
      </div>
      <div className="u-flex-shrink">
        {progress.remainingTime ? (
          <RemainingTime durationInSec={progress.remainingTime} />
        ) : null}
      </div>
    </div>
  )
}

export default FileUploadProgress
