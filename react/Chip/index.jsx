import cx from 'classnames'
import React from 'react'
import styles from './styles.styl'

class Chip extends React.Component {
  render() {
    const { children, className, ...props } = this.props
    return (
      <div
        className={cx(styles.Chip, className, this.constructor.className)}
        {...props}
      >
        {children}
      </div>
    )
  }
}

export class RoundChip extends Chip {
  static className = styles.RoundChip
}

Chip.Round = RoundChip
Chip.Separator = () => <span className={styles.ChipSeparator} />

export default Chip
