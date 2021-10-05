import React from 'react'
import cx from 'classnames'
import Badge from '../Badge'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  qualifier: {
    top: ({ overlap }) => (overlap ? '80%' : undefined),
    right: ({ overlap }) => (overlap ? '12%' : undefined),
    backgroundColor: 'white',
    color: 'var(--slateGrey)',
    border: '1px solid var(--silver)'
  }
}))

const InfosBadge = ({ classes, ...props }) => {
  const { qualifier } = useStyles(props)
  return (
    <Badge
      classes={{
        badge: cx(qualifier, classes)
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      {...props}
    />
  )
}

export default InfosBadge
