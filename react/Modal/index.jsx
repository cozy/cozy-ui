import React from 'react'
import classNames from 'classnames'

import styles from './index.styl'

const ModalTitle = ({ title }) =>
  (
    <h2 className={styles['coz-modal-title']}>{title}</h2>
  )

const ModalCross = ({ withCross, secondaryAction, secondaryText }) =>
  withCross &&
  (
    <button
      className={classNames('coz-btn', 'coz-btn--close', styles['coz-btn-modal-close'])}
      onClick={secondaryAction}
      >
      <span className='coz-hidden'>{secondaryText}</span>
    </button>
)

const ModalDescription = ({ description }) =>
  description &&
  (
    <div className={classNames(styles['coz-modal-content'], styles['coz-description'])}>
      {description}
    </div>
  )

const ModalButtons = ({ secondaryText, secondaryAction, secondaryType, primaryText, primaryAction, primaryType }) => {
  const displayPrimary = primaryText && primaryAction
  const displaySecondary = secondaryText && secondaryAction
  return (displaySecondary || displayPrimary) &&
    (
      <div className={classNames(styles['coz-modal-content'], styles['coz-modal-buttons'])}>
        { displaySecondary &&
          <button className={classNames('coz-btn', 'coz-btn--' + secondaryType)} onClick={secondaryAction}>
            {secondaryText}
          </button>
        }
        { displayPrimary &&
          <button className={classNames('coz-btn', 'coz-btn--' + primaryType)} onClick={primaryAction}>
            {primaryText}
          </button>
        }
      </div>
    )
}

const Modal = (props) => {
  props.primaryType = props.primaryType || props.validateType
  props.primaryText = props.primaryText || props.validateText
  props.primaryAction = props.primaryAction || props.validateAction
  props.secondaryType = props.secondaryType || props.cancelType
  props.secondaryText = props.secondaryText || props.cancelText
  props.secondaryAction = props.secondaryAction || props.cancelAction
  return (
    <div className={styles['coz-modal-container']}>
      <div className={styles['coz-overlay']}>
        <div className={styles['coz-modal']}>
          <ModalTitle {...props} />
          <ModalCross {...props} />
          <ModalDescription {...props} />
          { props.children }
          <ModalButtons {...props} />
        </div>
      </div>
    </div>
  )
}

function deprecated(arg) {
  console.warn(`[Modal] ${arg} is deprecated, please upgrade your Modal component.`)
}

Modal.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.node,
  secondaryType: React.PropTypes.string,
  secondaryText: React.PropTypes.string,
  secondaryAction: React.PropTypes.func,
  primaryType: React.PropTypes.string,
  primaryText: React.PropTypes.string,
  primaryAction: React.PropTypes.func,
  cancelType: deprecated('cancelType') || React.PropTypes.string,
  cancelText: deprecated('cancelText') || React.PropTypes.string,
  cancelAction: deprecated('cancelAction') || React.PropTypes.func,
  validateType: deprecated('validateType') || React.PropTypes.string,
  validateText: deprecated('validateText') || React.PropTypes.string,
  validateAction: deprecated('validateAction') || React.PropTypes.func,
  withCross: React.PropTypes.bool
}

Modal.defaultProps = {
  cancelType: 'secondary',
  primaryType: 'secondary',
  withCross: true
}

export default Modal
