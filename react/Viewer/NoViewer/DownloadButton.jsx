import React from 'react'
import PropTypes from 'prop-types'
import { withClient } from 'cozy-client'
import { translate } from '../../I18n'
import Button from '../../Button'
import styles from '../styles.styl'
import { FileDoctype } from '../../proptypes'

const DownloadButton = ({ t, client, file }) => (
  <Button
    className={styles['viewer-noviewer-download']}
    onClick={() => client.collection('io.cozy.files').download(file)}
    label={t('Viewer.download')}
  />
)

DownloadButton.propTypes = {
  t: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
  file: FileDoctype
}

export default translate()(withClient(DownloadButton))
