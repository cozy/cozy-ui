import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ count, max }) => (
  <span>{count > max ? `${max}+` : count}</span>
)

Counter.propTypes = {
  count: PropTypes.number,
  max: PropTypes.number
}

Counter.defaultProps = {
  count: 0,
  max: 99
}

export default Counter
