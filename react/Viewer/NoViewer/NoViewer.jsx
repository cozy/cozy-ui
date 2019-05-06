import React from 'react'
import PropTypes from 'prop-types'
import FileIcon from './FileIcon'
import DownloadButton from './DownloadButton'
import styles from '../styles.styl'

const NoViewer = ({ file, renderFallbackExtraContent }) => (
  <div className={styles['viewer-noviewer']}>
    <FileIcon type={file.class} />
    <p className={styles['viewer-filename']}>{file.name}</p>
    {renderFallbackExtraContent(file)}
  </div>
)

NoViewer.propTypes = {
  file: PropTypes.shape({
    _id: PropTypes.string,
    class: PropTypes.string,
    mime: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  renderFallbackExtraContent: PropTypes.func
}

NoViewer.defaultProps = {
  renderFallbackExtraContent: file => <DownloadButton file={file} />
}

export default NoViewer
