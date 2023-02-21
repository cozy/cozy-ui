import React from 'react'
import PropTypes from 'prop-types'
import FileIcon from './FileIcon'
import DownloadButton from './DownloadButton'
import styles from '../ViewersByFile/styles.styl'
import { FileDoctype } from '../../proptypes'

const NoViewer = ({ file, url, renderFallbackExtraContent }) => (
  <div className={styles['viewer-noviewer']}>
    <FileIcon type={file.class} />
    <p className={styles['viewer-filename']}>{file.name}</p>
    {renderFallbackExtraContent(file, url)}
  </div>
)

NoViewer.propTypes = {
  file: FileDoctype.isRequired,
  renderFallbackExtraContent: PropTypes.func,
  url: PropTypes.string
}

NoViewer.defaultProps = {
  renderFallbackExtraContent: (file, url) => (
    <DownloadButton file={file} url={url} />
  )
}

export default NoViewer
