import React from 'react'
import PropTypes from 'prop-types'
import { withClient } from 'cozy-client'
import { translate } from '../../I18n'
import Button from '../../Button'
import styles from '../styles.styl'

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
  file: PropTypes.shape({
    _id: PropTypes.string,
    class: PropTypes.string,
    mime: PropTypes.string,
    name: PropTypes.string
  })
}

export default translate()(withClient(DownloadButton))
