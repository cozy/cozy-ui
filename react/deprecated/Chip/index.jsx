import cx from 'classnames'
import React from 'react'
import styles from './styles.styl'

class Chip extends React.PureComponent {
  static defaultProps = {
    component: 'div',
    size: 'normal',
    variant: 'normal',
    theme: 'normal'
  }

  render() {
    const {
      children,
      className,
      rounded,
      component: Component,
      onClick,
      disabled,
      size,
      variant,
      theme,
      ...restProps
    } = this.props

    return (
      <Component
        className={cx(
          styles['c-chip'],
          styles[`c-chip--${size}Size`],
          styles[`c-chip--${variant}Variant`],
          styles[`c-chip--${theme}Theme`],
          'u-breakword',
          {
            [styles['c-chip--outlinedNormalTheme']]:
              variant === 'outlined' && theme === 'normal',
            [styles['c-chip--hoverableNormalTheme']]:
              variant !== 'normal' && theme === 'normal',
            [styles['c-chip--hoverablePrimaryTheme']]:
              variant !== 'normal' && theme === 'primary',
            [styles['c-chip--normalPrimaryTheme']]:
              variant === 'normal' && theme === 'primary',
            [styles['c-chip--hoverableErrorTheme']]:
              variant !== 'normal' && theme === 'error',
            [styles['c-chip--round']]: rounded,
            [styles['c-chip--clickable']]: onClick && !disabled,
            [styles['c-chip-button--disabled']]: onClick && disabled
          },
          className
        )}
        onClick={onClick}
        disabled={disabled}
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
