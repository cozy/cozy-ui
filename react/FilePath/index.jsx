import React from 'react'
import MidEllipsis from '../MidEllipsis'
import styles from './styles.styl'

const FilePath = ({ children, className }) => (
  <MidEllipsis className={`${className} ${styles['c-file-path']}`}>
    {children}
  </MidEllipsis>
)

export default FilePath
