import React from 'react'
import Link from '../Link'
import FilePath from '../FilePath'

const FilePathLink = ({ children, ...props }) => (
  <Link color="textSecondary" underline="hover" {...props}>
    <FilePath>{children}</FilePath>
  </Link>
)

export default FilePathLink
