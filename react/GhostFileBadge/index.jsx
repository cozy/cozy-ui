import React from 'react'
import cx from 'classnames'

import Badge from '../Badge'
import { withStyles } from '../styles'

const customStyles = () => ({
  ghost: {
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
