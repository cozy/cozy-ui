import React from 'react'

import styles from './styles.styl'
import withFileUrl from '../hoc/withFileUrl'

const VideoViewer = ({ file, url }) => (
  <div className={styles['viewer-videoviewer']}>
    <video src={url} controls="controls" />
    <p className={styles['viewer-filename']}>{file.name}</p>
  </div>
)

export default withFileUrl(VideoViewer)
