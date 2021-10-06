import React from 'react'
import cx from 'classnames'
import Badge from '../Badge'
import { withStyles } from '@material-ui/core/styles'

const customStyles = () => ({
  qualifier: {
    backgroundColor: 'white',
    color: 'var(--slateGrey)',
    border: '1px solid var(--silver)'
  }
})

const InfosBadge = withStyles(customStyles)(({ classes, ...props }) => {
  const { qualifier, ...customClasses } = classes
  return (
    <Badge
      classes={{
        badge: cx(qualifier, customClasses)
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      {...props}
    />
  )
})

export default InfosBadge
