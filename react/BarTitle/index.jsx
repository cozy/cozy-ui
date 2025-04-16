import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
import Typography from '../Typography'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

const BarTitle = ({ noWrap, children }) => {
  return (
    <div className={styles.BarTitle}>
      <Typography
        variant={isTwakeTheme() ? 'h4' : 'h5'}
        component="h1"
        noWrap={noWrap}
      >
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
