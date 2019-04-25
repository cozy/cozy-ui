import React from 'react'
import Icon from '../Icon'

import withFileUrl from './withFileUrl'
import styles from './styles'

const AudioViewer = ({ file, url }) => (
  <div data-test-id="viewer-audio" className={styles['pho-viewer-audioviewer']}>
    <Icon icon="file-type-audio" width={160} height={140} />
    <p className={styles['pho-viewer-filename']}>{file.name}</p>
    <audio src={url} controls="controls" />
  </div>
)

export default withFileUrl(AudioViewer)
