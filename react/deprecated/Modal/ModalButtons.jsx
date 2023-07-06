import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import Button from '../Button'

const ModalButtons = ({
  secondaryText,
  secondaryAction,
  secondaryType,
  primaryText,
  primaryAction,
  primaryType,
  children,
  className
}) => (
  <div
    className={cx(
      'u-flex',
      'u-flex-wrap-reverse',
      'u-flex-justify-end',
      styles['c-modal-footer--button'],
      className
    )}
  >
    {children}
    {secondaryText && secondaryAction && (
      <Button
        theme={secondaryType}
        onClick={secondaryAction}
        label={secondaryText}
        className="u-flex-auto-s"
      />
    )}
    {primaryText && primaryAction && (
      <Button
        theme={primaryType}
        onClick={primaryAction}
        label={primaryText}
        className="u-flex-auto-s"
      />
    )}
  </div>
)

ModalButtons.defaultProps = {
  primaryType: 'regular',
  secondaryType: 'secondary'
}

export default ModalButtons
