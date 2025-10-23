import cx from 'classnames'
import React from 'react'

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
