import React from 'react'
import cx from 'classnames'
import styles from './PercentageLine.styl'
import PropTypes from 'prop-types'

/**
 * @deprecated Use [Progress](#/Progress)
 */
const PercentageLine = ({ value, color, className, style }) => (
  <div
    className={cx(className, styles.PercentageLine)}
    style={{
      transform: `scaleX(${value / 100})`,
      backgroundColor: color,
      ...style
    }}
  />
)

PercentageLine.propTypes = {
  /** @type Value in percent */
  value: PropTypes.number.isRequired,
  /** @type CSS color or CSS variable */
  color: PropTypes.string.isRequired,
  /** @type Additional className */
  className: PropTypes.string,
  /** @type Custom style */
  style: PropTypes.object
}

export default PercentageLine
