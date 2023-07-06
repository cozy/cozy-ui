import React from 'react'
import PercentageLine from '../PercentageLine'
import styles from './styles.styl'
import cx from 'classnames'

const PercentageBar = props => {
  const { value, color, className, ...rest } = props

  return (
    <div className={cx(styles.PercentageBar, className)} {...rest}>
      <PercentageLine
        value={value}
        color={color}
        className={styles.PercentageBar__line}
      />
    </div>
  )
}

export default PercentageBar
