import cx from 'classnames'
import React from 'react'

import Badge from '../Badge'
import { makeStyles } from '../styles'

const useStyles = makeStyles({
  qualifier: {
    height: '1.125rem', // compensation of the specific border size
    minWidth: '1.125rem',
    backgroundColor: 'var(--paperBackgroundColor)',
    color: 'var(--iconTextColor)',
    border: '1px solid var(--borderMainColor)'
  }
})

const InfosBadge = ({ classes, ...props }) => {
  const _classes = useStyles()

  return (
    <Badge
      classes={{
        badge: cx(_classes.qualifier, classes)
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      {...props}
    />
  )
}

export default InfosBadge
