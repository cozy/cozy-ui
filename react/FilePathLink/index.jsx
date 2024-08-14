import React from 'react'

import FilePath from '../FilePath'
import Link from '../Link'

const FilePathLink = ({ children, ...props }) => (
  <Link color="textSecondary" underline="hover" {...props}>
    <FilePath>{children}</FilePath>
  </Link>
)

export default FilePathLink
