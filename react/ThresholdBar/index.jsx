import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.styl'

/**
 * Shows a bar indicating if a value has exceeded a threshold
 *
 * - While the threshold has not been exceeded, a green bar is shown
 * on a grey background
 * - Otherwise, the bar is red an a tick indicates the threshold amount
 *   so that we see how far the threshold has been exceeded
 */
function ThresholdBar({ threshold, value, className }) {
  const sup = value > threshold
  return (
    <div
      className={cx(
        styles.ThresholdBar,
        {
          [styles['ThresholdBar--exceeded']]: sup
        },
        className
      )}
    >
      <div className={styles.ThresholdBar__bg}>
        <div
          style={{
            width: (sup ? threshold / value : value / threshold) * 100 + '%'
          }}
          className={styles.ThresholdBar__inner}
        />
      </div>
      {sup ? (
        <div
          className={styles.ThresholdBar__tick}
          style={{
            left: (threshold / value) * 100 + '%'
          }}
        />
      ) : null}
    </div>
  )
}

ThresholdBar.propTypes = {
  /** Current value to be shown */
  value: PropTypes.number.isRequired,
  /** Threshold that should be exceeded */
  threshold: PropTypes.number.isRequired
}

export default React.memo(ThresholdBar)
