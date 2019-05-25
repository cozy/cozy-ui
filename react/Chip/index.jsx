import cx from 'classnames'
import React from 'react'
import styles from './styles.styl'

class Chip extends React.PureComponent {
  static defaultProps = {
    component: 'div'
  }

  render() {
    const {
      children,
      className,
      rounded,
      component: Component,
      ...restProps
    } = this.props
    return (
      <Component
        className={cx(
          styles['c-chip'],
          'u-breakword',
          {
            [styles['c-chip--round']]: rounded
          },
          className
        )}
        {...restProps}
      >
        {children}
      </Component>
    )
  }
}

export default Chip

export const RoundChip = props => <Chip {...props} rounded />

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
