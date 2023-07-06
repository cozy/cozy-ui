import React from 'react'
import cx from 'classnames'

import Button from '../deprecated/Button'
import Icon from '../Icon'
import CloudIcon from '../Icons/Cloud'
import Input from '../Input'
import Typography from '../Typography'

import styles from './styles.styl'

export const Wizard = ({ children, tag, ...props }) => {
  const Component = tag || 'div'
  return (
    <Component className={styles['wizard']} {...props}>
      {children}
    </Component>
  )
}

export const WizardWrapper = ({ children, align }) => {
  return (
    <div
      className={cx(
        styles['wizard-wrapper'],
        align == 'center' ? styles['wizard-wrapper--center'] : null
      )}
    >
      {children}
    </div>
  )
}

export const WizardFooter = ({ children, className }) => {
  return (
    <footer className={cx(styles['wizard-footer'], className)}>
      {children}
    </footer>
  )
}

export const WizardHeader = ({ children, className }) => {
  return (
    <header className={cx(styles['wizard-header'], className)}>
      {children}
    </header>
  )
}

export const WizardMain = ({ children }) => {
  return <div className={styles['wizard-main']}>{children}</div>
}

export const WizardDescription = ({ children }) => {
  return <p className={styles['wizard-desc']}>{children}</p>
}

export const WizardTitle = ({ children, tag, className }) => {
  return (
    <Typography
      variant={tag || 'h3'}
      className={cx(styles['wizard-title'], className)}
    >
      {children}
    </Typography>
  )
}

export const WizardLogo = ({ src, badgeIcon, badgeColor }) => (
  <div className={styles['wizard-logo']}>
    <img
      className={styles['wizard-logo-img']}
      src={src}
      alt=""
      aria-hidden="true"
      focusable="false"
    />
    <div className={styles['wizard-logo-badge']}>
      <Icon icon={CloudIcon} width={badgeIcon} height="20" color={badgeColor} />
    </div>
  </div>
)

export const WizardNextButton = ({ children, ...props }) => {
  return (
    <Button className={styles['wizard-next']} {...props}>
      {children}
    </Button>
  )
}

export const WizardPreviousButton = ({ children, ...props }) => {
  return (
    <Button className={styles['wizard-previous']} {...props}>
      {children}
    </Button>
  )
}

export const WizardProtocol = ({ children }) => {
  return <div className={styles['wizard-protocol']}>{children}</div>
}

export const WizardSelect = ({ children, narrow, medium, ...props }) => {
  return (
    <select
      className={cx(styles['wizard-select'], {
        [styles['wizard-select--narrow']]: narrow,
        [styles['wizard-select--medium']]: medium
      })}
      {...props}
    >
      {children}
    </select>
  )
}

export const WizardDualField = ({ children, hasFocus, hasError }) => {
  return (
    <div
      className={cx(
        styles['wizard-dualfield'],
        hasFocus ? styles['wizard-dualfield--focus'] : null,
        {
          [styles['wizard-dualfield--error']]: hasError
        }
      )}
    >
      {children}
    </div>
  )
}

export const WizardDualFieldWrapper = ({ children }) => {
  return <div className={styles['wizard-dualfield-wrapper']}>{children}</div>
}

export const WizardDualFieldInput = ({ className, ...props }) => {
  return (
    <Input
      className={cx(styles['wizard-dualfield-input'], className)}
      {...props}
    />
  )
}

export const WizardNotice = ({
  children,
  className,
  tag: Component,
  variant,
  ...props
}) => {
  return (
    <Component
      className={cx(
        styles['wizard-notice'],
        variant === 'lost' ? styles['wizard-notice--lost'] : null,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export const WizardErrors = ({
  children,
  className,
  tag: Component,
  ...props
}) => {
  return (
    <Component
      className={cx(styles['wizard-errors'], 'u-error', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
