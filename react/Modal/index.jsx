import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.styl'
import Overlay from '../Overlay'
import migrateProps from '../helpers/migrateProps'

const ModalContent = ({children, className}) =>
  (<div className={classNames(styles['coz-modal-content'], className)}>
    {children}
  </div>)

const ModalSection = ({children, className}) =>
  (<div className={classNames(styles['coz-modal-content'], styles['coz-modal-section'], className)}>
    {children}
  </div>)

const ModalTitle = ({ children, className }) =>
  (
    <h2 className={classNames(styles['coz-modal-content'], styles['coz-modal-title'], className)}>
      {children}
    </h2>
  )

const ModalCross = ({ closable, secondaryAction, secondaryText }) =>
  closable &&
  (
    <button
      className={classNames(styles['coz-btn'], styles['coz-btn--close'], styles['coz-btn-modal-close'])}
      onClick={secondaryAction}
      >
      <span className={styles['coz-hidden']}>{secondaryText}</span>
    </button>
)

const ModalDescription = ({ children, className }) => (
  <div className={classNames(styles['coz-modal-content'], styles['coz-description'], className)}>
    {children}
  </div>
)

const ModalButtons = ({ secondaryText, secondaryAction, secondaryType, primaryText, primaryAction, primaryType }) => {
  const displayPrimary = primaryText && primaryAction
  const displaySecondary = secondaryText && secondaryAction
  return (displaySecondary || displayPrimary) &&
    (
      <div className={classNames(styles['coz-modal-content'], styles['coz-modal-buttons'])}>
        { displaySecondary &&
          <button className={classNames(styles['coz-btn'], styles['coz-btn--' + secondaryType])} onClick={secondaryAction}>
            {secondaryText}
          </button>
        }
        { displayPrimary &&
          <button className={classNames(styles['coz-btn'], styles['coz-btn--' + primaryType])} onClick={primaryAction}>
            {primaryText}
          </button>
        }
      </div>
    )
}

class Modal extends Component {
  handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) this.props.secondaryAction()
  }

  render () {
    const { children, description, title, closable, overflowHidden, className } = this.props
    return (
      <div className={styles['coz-modal-container']}>
        <Overlay onEscape={closable && this.props.secondaryAction}>
          <div className={styles['coz-modal-wrapper']} onClick={closable && this.handleOutsideClick}>
            <div className={classNames(styles['coz-modal'], className, { [styles['coz-modal--overflowHidden']]: overflowHidden })}>
              <ModalCross {...this.props} />
              { title && <ModalTitle>{ title }</ModalTitle> }
              { description && <ModalDescription>{ description }</ModalDescription> }
              { children }
              <ModalButtons {...this.props} />
            </div>
          </div>
        </Overlay>
      </div>
    )
  }
}

Modal.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  secondaryType: PropTypes.string,
  secondaryText: PropTypes.string,
  secondaryAction: PropTypes.func,
  primaryType: PropTypes.string,
  primaryText: PropTypes.string,
  primaryAction: PropTypes.func,
  closable: PropTypes.bool,
  overflowHidden: PropTypes.bool
}

Modal.defaultProps = {
  primaryType: 'secondary',
  secondaryType: 'regular',
  closable: true,
  overflowHidden: false
}

export default migrateProps([
  { src: 'withCross', dest: 'closable' }, // withCross -> closable
])(Modal)

// to be able to use them in Styleguidist
Object.assign(Modal, {
  ModalContent,
  ModalSection,
  ModalButtons,
  ModalTitle,
  ModalDescription
})

export {
  ModalContent,
  ModalSection,
  ModalButtons,
  ModalTitle,
  ModalDescription
}
