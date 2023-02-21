import React from 'react'

import withFileUrl from '../hoc/withFileUrl'

import styles from './styles.styl'

const VideoViewer = ({ file, url }) => (
  <div className={styles['viewer-videoviewer']}>
    <video src={url} controls="controls" />
    <p className={styles['viewer-filename']}>{file.name}</p>
  </div>
)

export default withFileUrl(VideoViewer)
