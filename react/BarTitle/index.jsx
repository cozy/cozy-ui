import React from 'react'
import Typography from '../Typography'
import styles from './styles.styl'

const BarTitle = ({ children }) => {
  return (
    <Typography variant="h5" component="h1" className={styles.BarTitle}>
      {children}
    </Typography>
  )
}

export default BarTitle
