import cx from 'classnames'
import React from 'react'
import styles from './styles.styl'

class Chip extends React.PureComponent {
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

export default Chip

const disabledChipButtonStyle = styles['ChipButton--disabled']
export class ChipButton extends React.PureComponent {
  render({ children, className, disabled, ...props }) {
    return (
      <RoundChip
        className={cx(styles.ChipButton, className, {
          [disabledChipButtonStyle]: disabled
        })}
        {...props}
      >
        {children}
      </RoundChip>
    )
  }
}

Chip.Button = ChipButton
Chip.Round = RoundChip
Chip.Separator = () => <span className={styles.ChipSeparator} />
