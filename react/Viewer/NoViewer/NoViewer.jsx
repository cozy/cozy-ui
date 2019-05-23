import React from 'react'
import PropTypes from 'prop-types'
import FileIcon from './FileIcon'
import DownloadButton from './DownloadButton'
import styles from '../styles.styl'
import { FileDoctype } from '../../proptypes'

const NoViewer = ({ file, renderFallbackExtraContent }) => (
  <div className={styles['viewer-noviewer']}>
    <FileIcon type={file.class} />
    <p className={styles['viewer-filename']}>{file.name}</p>
    {renderFallbackExtraContent(file)}
  </div>
)

NoViewer.propTypes = {
  file: FileDoctype.isRequired,
  renderFallbackExtraContent: PropTypes.func
}

NoViewer.defaultProps = {
  renderFallbackExtraContent: file => <DownloadButton file={file} />
}

export default NoViewer
