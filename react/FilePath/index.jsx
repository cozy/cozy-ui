import React from 'react'

import styles from './styles.styl'
import MidEllipsis from '../MidEllipsis'

const FilePath = ({ children, className }) => (
  <MidEllipsis className={`${className} ${styles['c-file-path']}`}>
    {children}
  </MidEllipsis>
)

export default FilePath
