import React from 'react'
import cx from 'classnames'
import Typography from '../Typography'

const EmptyMessage = props => {
  const { className, ...rest } = props

  return (
    <Typography
      className={cx('u-ta-center u-pv-2', className)}
      {...rest}
      variant="body1"
    />
  )
}

export default EmptyMessage
