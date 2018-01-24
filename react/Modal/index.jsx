import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.styl'
import Overlay from '../Overlay'
import Icon from '../Icon'
import migrateProps from '../helpers/migrateProps'
import palette from '../../stylus/settings/palette.json'
import Portal from 'preact-portal'

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

const ModalCross = ({ onClick, className }) => (
  <button
    className={classNames(styles['c-btn'], styles['c-btn--close'], styles['coz-btn-modal-close'], className)}
    onClick={onClick}
    >
    <Icon icon='cross' width='24' height='24' color={palette['coolGrey']} />
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
          <button className={classNames(styles['c-btn'], styles['c-btn--' + secondaryType])} onClick={secondaryAction}>
            {secondaryText}
          </button>
        }
        { displayPrimary &&
          <button className={classNames(styles['c-btn'], styles['c-btn--' + primaryType])} onClick={primaryAction}>
            {primaryText}
          </button>
        }
      </div>
    )
}

class Modal extends Component {
  handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) this.props.dismissAction()
  }

  render () {
    const { children, description, title, closable, dismissAction, overflowHidden, className, crossClassName, into } = this.props
    const maybeWrapInPortal = children => into ? <Portal into={into}>{ children }</Portal> : children
    return maybeWrapInPortal(
      <div className={styles['coz-modal-container']}>
        <Overlay onEscape={closable && dismissAction}>
          <div className={styles['coz-modal-wrapper']} onClick={closable && this.handleOutsideClick}>
            <div className={classNames(styles['coz-modal'], className, { [styles['coz-modal--overflowHidden']]: overflowHidden })}>
              { closable && <ModalCross className={crossClassName} onClick={dismissAction} /> }
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
  /** Modal title */
  title: PropTypes.node,
  /** Content for simple modals */
  description: PropTypes.node,
  /** Secondary button type */
  secondaryType: PropTypes.string,
  /** Secondary button text*/
  secondaryText: PropTypes.string,
  /** Secondary button callback */
  secondaryAction: PropTypes.func,
  /** Primary button type */
  primaryType: PropTypes.string,
  /** Primary button text*/
  primaryText: PropTypes.string,
  /** Primary button callback */
  primaryAction: PropTypes.func,
  /** Display the cross and enable click outside and escape key to close */
  closable: PropTypes.bool,
  /** Use overflowHidden when your content may overflow of your modal */
  overflowHidden: PropTypes.bool,
  /** `className` used on the modal, useful if you want to custom its CSS */
  className: PropTypes.string,
  /** `className` used on the cross, useful if you want to custom its CSS */
  crossClassName: PropTypes.string,
  /** If has a value, the modal will be rendered inside a portal and its value will be passed to Portal
  to control the rendering destination of the Modal */
  into: PropTypes.string
}

Modal.defaultProps = {
  primaryType: 'regular',
  secondaryType: 'secondary',
  closable: true,
  overflowHidden: false
}

export default migrateProps([
  { src: 'withCross', dest: 'closable' }, // withCross -> closable
  {
    fn: props => {
      let msg = null
      if (!props.into) {
        msg = 'In the future, `into` default value will be "body" : Modals will be rendered inside a <Portal />. Try to render your Modal with into=`body`'
      }
      return [props, msg]
    }
  },
  {
    fn: props => {
      let newProps
      if (props.secondaryAction && !props.dismissAction) {
        newProps = {...props}
        newProps.dismissAction = props.secondaryAction
        const msg =
          'In the future, `secondaryAction` will not be bound to closing actions (clicking on cross, clicking outside), please use `dismissAction` for that'
        return [newProps, msg]
      } else {
        return [props, null]
      }
    }
  }
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
