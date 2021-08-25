import React from 'react'
import Link from '../Link'
import FilePath from '../FilePath'
import styles from './styles.styl'

const FilePathLink = ({ children, className, ...props }) => (
  <Link className={`${className} ${styles['c-file-path-link']}`} {...props}>
    <FilePath>{children}</FilePath>
  </Link>
)

export default FilePathLink
