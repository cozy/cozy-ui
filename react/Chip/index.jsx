import cx from 'classnames'
import React from 'react'
import styles from './styles.styl'

class Chip extends React.PureComponent {
  render() {
    const { children, className, ...restProps } = this.props
    return (
      <div
        className={cx(
          styles['c-chip'],
          'u-breakword',
          className,
          this.constructor.className
        )}
        {...restProps}
      >
        {children}
      </div>
    )
  }
}

export class RoundChip extends Chip {
  static className = styles['c-chip--round']
}

export default Chip

const disabledChipButtonStyle = styles['c-chip-button--disabled']
export class ChipButton extends React.PureComponent {
  render() {
    const { children, className, disabled, ...restProps } = this.props
    return (
      <RoundChip
        className={cx(styles['c-chip-button'], className, {
          [disabledChipButtonStyle]: disabled
        })}
        {...restProps}
      >
        {children}
      </RoundChip>
    )
  }
}

Chip.Button = ChipButton
Chip.Round = RoundChip
Chip.Separator = ({ className }) => (
  <span className={cx(styles['c-chip-separator'], className)} />
)
