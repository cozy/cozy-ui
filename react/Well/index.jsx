import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Card from '../Card'

const Well = props => {
  console.log('Well is a deprecated component, use Card instead')
  const { className, ...rest } = props
  return <Card inset className={cx('u-bg-paleGrey', className)} {...rest} />
}

Well.propTypes = {
  className: PropTypes.string
}

export default Well
