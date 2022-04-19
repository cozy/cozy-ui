import React from 'react'
import Icon from '../Icon'
import FileTypeAudioIcon from '../Icons/FileTypeAudio'

import withFileUrl from './withFileUrl'
import styles from './styles.styl'

import isTesting from '../../react/helpers/isTesting'

const AudioViewer = ({ file, url }) => (
  <div className={styles['viewer-audioviewer']}>
    <Icon icon={FileTypeAudioIcon} width={160} height={140} />
    <p className={styles['viewer-filename']}>{file.name}</p>
    <audio
      src={url}
      controls="controls"
      preload={isTesting() ? 'none' : 'auto'}
    />
  </div>
)

export default withFileUrl(AudioViewer)
