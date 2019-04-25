import React from 'react'
import PropTypes from 'prop-types'
import { translate } from '../../I18n'
import Button from '../../Button'
import FileIcon from './FileIcon'

import styles from '../styles.styl'

const DownloadButton = ({ t, file }, { client }) => (
  <Button
    className={styles['pho-viewer-noviewer-download']}
    onClick={() => client.collection('io.cozy.files').download(file)}
    label={t('Viewer.noviewer.download')}
  />
)

DownloadButton.contextTypes = {
  client: PropTypes.object.isRequired
}

class NoViewer extends React.Component {
  state = {
    error: null
  }
  render() {
    const { t, file, fallbackUrl = false } = this.props
    return (
      <div
        data-test-id="viewer-noviewer"
        className={styles['pho-viewer-noviewer']}
      >
        <FileIcon type={file.class} />
        <p className={styles['pho-viewer-filename']}>{file.name}</p>
        <DownloadButton t={t} file={file} />
      </div>
    )
  }
}

export default translate()(NoViewer)
