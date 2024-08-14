import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
import Grid from '../../Grid'

const GridItem = ({ onClick, children }) => {
  return (
    <Grid
      item
      xs={3}
      sm={2}
      onClick={() => onClick && onClick()}
      className={cx(styles['gridItem-container'])}
    >
      {children}
    </Grid>
  )
}
GridItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
export default GridItem
