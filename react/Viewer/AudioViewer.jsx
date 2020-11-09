import React from 'react'
import Icon from '../Icon'

import withFileUrl from './withFileUrl'
import styles from './styles.styl'

import FileTypeAudioIcon from 'cozy-ui/transpiled/react/Icons/FileTypeAudio'

const AudioViewer = ({ file, url }) => (
  <div className={styles['viewer-audioviewer']}>
    <Icon icon={FileTypeAudioIcon} width={160} height={140} />
    <p className={styles['viewer-filename']}>{file.name}</p>
    <audio src={url} controls="controls" />
  </div>
)

export default withFileUrl(AudioViewer)
