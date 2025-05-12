import cx from 'classnames'
import React from 'react'

import Badge from '../Badge'
import { makeStyles } from '../styles'

const useStyles = makeStyles({
  qualifier: {
    height: '24px', // compensation of the specific border size
    minWidth: '24px',
    backgroundColor: 'var(--paperBackgroundColor)',
    color: 'var(--iconTextColor)',
    boxShadow: 'var(--shadow3)'
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
