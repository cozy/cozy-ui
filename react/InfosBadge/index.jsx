import React from 'react'
import cx from 'classnames'

import Badge from '../Badge'
import { withStyles } from '../styles'

const customStyles = () => ({
  qualifier: {
    height: '1.125rem', // compensation of the specific border size
    minWidth: '1.125rem',
    backgroundColor: 'var(--paperBackgroundColor)',
    color: 'var(--iconTextColor)',
    border: '1px solid var(--borderMainColor)'
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
