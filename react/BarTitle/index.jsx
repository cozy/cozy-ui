import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'

import styles from './styles.styl'

const BarTitle = ({ noWrap, children }) => {
  return (
    <div className={styles.BarTitle}>
      <Typography variant="h5" component="h1" noWrap={noWrap}>
        {children}
      </Typography>
    </div>
  )
}

BarTitle.defaultProps = {
  noWrap: false
}

BarTitle.propTypes = {
  /** Add an ellipsis like `noWrap` prop on Typography component does */
  noWrap: PropTypes.bool
}

export default BarTitle
