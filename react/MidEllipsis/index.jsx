import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const MidEllipsis = props => {
  const { text, className } = props
  const partLength = Math.round(text.length / 2)
  const firstPart = text.substr(0, partLength)
  const lastPart = text.substr(partLength, text.length)

  return (
    <div className={cx('u-midellipsis', className)}>
      <span>{firstPart}</span>
      <span>{lastPart}</span>
    </div>
  )
}

MidEllipsis.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default MidEllipsis
