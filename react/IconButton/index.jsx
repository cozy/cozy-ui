import React from 'react'
import cx from 'classnames'
import styles from './styles.styl'
import { withStyles } from '@material-ui/core/styles'

const IconButton = ({ classes, className, ...props }) => (
  <button
    className={cx(styles.IconButton, classes.root, className)}
    {...props}
  />
)

export default withStyles(theme => ({
  root: {
    color: theme.palette.text.secondary
  }
}))(IconButton)
