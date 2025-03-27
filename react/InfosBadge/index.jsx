import cx from 'classnames'
import React from 'react'

import Badge from '../Badge'
import { isTwakeTheme } from '../helpers/isTwakeTheme'
import { makeStyles } from '../styles'

const useStyles = makeStyles({
  qualifier: {
    height: isTwakeTheme() ? '24px' : '1.125rem', // compensation of the specific border size
    minWidth: isTwakeTheme() ? '24px' : '1.125rem',
    backgroundColor: 'var(--paperBackgroundColor)',
    color: 'var(--iconTextColor)',
    border: isTwakeTheme() ? undefined : '1px solid var(--borderMainColor)',
    boxShadow: isTwakeTheme() ? 'var(--shadow3)' : undefined
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
