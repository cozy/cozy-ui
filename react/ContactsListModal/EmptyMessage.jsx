import React from 'react'
import styles from './EmptyMessage.styl'
import cx from 'classnames'
import Typography from 'cozy-ui/transpiled/react/Typography'

const EmptyMessage = props => {
  const { className, ...rest } = props

  return (
    <Typography
      className={cx(styles.EmptyMessage, className)}
      {...rest}
      variant="body1"
    />
  )
}

export default EmptyMessage
