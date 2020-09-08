import React from 'react'
import cx from 'classnames'
import Badge from '../Badge'
import { withStyles } from '@material-ui/core/styles'

const customStyles = () => ({
  ghost: {
    top: '76%',
    right: '12%',
    backgroundColor: 'white',
    color: 'var(--coolGrey)',
    border: '1px solid var(--silver)',
    borderRadius: '6px',
    height: 'auto',
    minWidth: 'auto',
    padding: '3px'
  }
})

const GhostFileBadge = withStyles(customStyles)(({ classes, ...props }) => {
  const { ghost, ...customClasses } = classes
  return (
    <Badge
      classes={{
        badge: cx(ghost, customClasses)
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      {...props}
    />
  )
})

export default GhostFileBadge
