import cx from 'classnames'
import React from 'react'

import styles from './styles.styl'
import PercentageLine from '../PercentageLine'

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
