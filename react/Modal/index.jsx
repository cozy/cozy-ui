import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.styl'
import Overlay from '../Overlay'
import { Button } from '../Button'
import Icon from '../Icon'
import migrateProps from '../helpers/migrateProps'
import palette from '../../stylus/settings/palette.json'
import Portal from 'preact-portal'

const ModalContent = ({children, className}) =>
  (<div className={classNames(styles['c-modal-content'], className)}>
    {children}
  </div>)

const ModalSection = ({children, className}) =>
  (<div className={classNames(styles['c-modal-content'], styles['c-modal-section'], className)}>
    {children}
  </div>)

const ModalBrandedHeader = ({ logo, bg, className }) =>
  (
    <h2
      className={classNames(
        styles['c-modal-header--branded'],
        className
      )}
      style={`background: ${bg}`}
      >
      <img src={logo} alt="" />
    </h2>
  )

const ModalHeader = ({ children, className }) =>
  (
    <h2 className={classNames(styles['c-modal-header'], className)}>
      {children}
    </h2>
  )

const ModalTitle = () => {
  console.log('ModalTitle is a deprecated component, use ModalHeader instead')
  return <ModalHeader {...props } />
}

const ModalCross = ({ onClick, color, className }) => (
  <Button
    theme="close"
    className={classNames(styles['c-modal-close'], className)}
    onClick={onClick}
    extension='narrow'
    >
    <Icon icon='cross' width='24' height='24' color={color || palette['coolGrey']} />
  </Button>
)

const ModalDescription = ({ children, className }) => (
  <div className={classNames(styles['c-modal-content'], className)}>
    {children}
  </div>
)

const ModalFooter = ({ secondaryText, secondaryAction, secondaryType, primaryText, primaryAction, primaryType }) => {
  const displayPrimary = primaryText && primaryAction
  const displaySecondary = secondaryText && secondaryAction
  return (displaySecondary || displayPrimary) &&
    (
      <div className={classNames(styles['c-modal-footer'])}>
        { displaySecondary &&
          <Button theme={secondaryType} onClick={secondaryAction} label={secondaryText} />
        }
        { displayPrimary &&
          <Button theme={primaryType} onClick={primaryAction} label={primaryText} />
        }
      </div>
    )
}

const ModalButtons = () => {
  console.log('ModalButtons is a deprecated component, use Modalfooter instead')
  return <ModalFooter {...props } />
}

class Modal extends Component {
  handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) this.props.dismissAction()
  }

  render () {
    const { children, description, title, closable, dismissAction, overflowHidden, className, crossClassName, crossColor, into, size, spacing } = this.props
    const maybeWrapInPortal = children => into ? <Portal into={into}>{ children }</Portal> : children
    return maybeWrapInPortal(
      <div className={styles['c-modal-container']}>
        <Overlay onEscape={closable && dismissAction}>
          <div className={styles['c-modal-wrapper']} onClick={closable && this.handleOutsideClick}>
            <div className={
              classNames(
                styles['c-modal'],
                styles[`c-modal--${size}`],
                className,
                {
                  [styles['c-modal--overflowHidden']]: overflowHidden,
                  [styles[`c-modal--${spacing}-spacing`]]: spacing
                }
              )}>
              { closable && <ModalCross className={crossClassName} onClick={dismissAction} color={crossColor} /> }
              { title && <ModalHeader>{title}</ModalHeader> }
              { description && <ModalDescription>{ description }</ModalDescription> }
              {children}
              <ModalFooter {...this.props} />
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
  /** `crossColor` to overwrite the default color of the cross button */
  crossColor: PropTypes.string,
  /** If has a value, the modal will be rendered inside a portal and its value will be passed to Portal
  to control the rendering destination of the Modal */
  into: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge']),
  spacing: PropTypes.oneOf(['small', 'large'])
}

Modal.defaultProps = {
  primaryType: 'regular',
  secondaryType: 'secondary',
  closable: true,
  overflowHidden: false,
  size: 'small',
}

ModalBrandedHeader.propTypes = {
  /** `bg` can be any type of color Hexa, RGB(A), HSL(A), gradient… anything that CSS allows for a color really */
  bg: PropTypes.string.required,
  /** `logo` should be a path to any type of image file supported by browsers */
  logo: PropTypes.string.required
}

const EnhancedModal = migrateProps([
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
Object.assign(EnhancedModal, {
  ModalContent,
  ModalSection,
  ModalFooter,
  ModalHeader,
  ModalBrandedHeader,
  ModalDescription
})

export default EnhancedModal

export {
  ModalContent,
  ModalSection,
  ModalFooter,
  ModalHeader,
  ModalBrandedHeader,
  ModalDescription
}
