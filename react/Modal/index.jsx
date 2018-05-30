import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.styl'
import Overlay from '../Overlay'
import { Button } from '../Button'
import Icon from '../Icon'
import migrateProps from '../helpers/migrateProps'
import palette from '../../stylus/settings/palette.json'
import Portal from 'preact-portal'

const ModalContent = ({ children, className }) => (
  <div className={cx(styles['c-modal-content'], className)}>{children}</div>
)

const ModalDescription = ModalContent

const ModalSection = ({ children, className }) => (
  <div
    className={cx(
      styles['c-modal-content'],
      styles['c-modal-section'],
      className
    )}
  >
    {children}
  </div>
)

const ModalBrandedHeader = ({ logo, bg, className, style = {} }) => (
  <h2
    className={cx(styles['c-modal-header--branded'], className)}
    style={{ background: bg, ...style }}
  >
    <img src={logo} alt="" />
  </h2>
)

const ModalHeader = ({ title, children, className, style }) => {
  const isTitle = typeof children === 'string'
  return (
    <div className={cx(styles['c-modal-header'], className)} style={style}>
      {title && <h2>{title}</h2>}
      {isTitle ? <h2>{children}</h2> : children}
    </div>
  )
}

const ModalTitle = props => {
  console.log('ModalTitle is a deprecated component, use ModalHeader instead')
  return <ModalHeader {...props} />
}

const ModalCross = ({ onClick, color, className }) => (
  <Button
    theme="close"
    className={cx(styles['c-modal-close'], className)}
    onClick={onClick}
    extension="narrow"
  >
    <Icon
      icon="cross"
      width="24"
      height="24"
      color={color || palette['coolGrey']}
    />
  </Button>
)

const ModalFooter = ({
  secondaryText,
  secondaryAction,
  secondaryType,
  primaryText,
  primaryAction,
  primaryType,
  children,
  className
}) => {
  const displayPrimary = primaryText && primaryAction
  const displaySecondary = secondaryText && secondaryAction
  return (
    <div
      className={cx(
        styles['c-modal-footer'],
        {
          [styles['c-modal-footer--button']]: displayPrimary || displaySecondary
        },
        className
      )}
    >
      {children}
      {displaySecondary && (
        <Button
          theme={secondaryType}
          onClick={secondaryAction}
          label={secondaryText}
        />
      )}
      {displayPrimary && (
        <Button
          theme={primaryType}
          onClick={primaryAction}
          label={primaryText}
        />
      )}
    </div>
  )
}

const ModalButtons = props => {
  console.log('ModalButtons is a deprecated component, use ModalFooter instead')
  return <ModalFooter {...props} />
}

class Modal extends Component {
  handleOutsideClick = e => {
    if (e.target === e.currentTarget) this.props.dismissAction()
  }

  render() {
    const {
      children,
      description,
      title,
      closable,
      dismissAction,
      overflowHidden,
      className,
      crossClassName,
      crossColor,
      into,
      size,
      spacing,
      mobileFullscreen,
      overlayClassName,
      wrapperClassName
    } = this.props
    const {
      primaryText,
      primaryAction,
      primaryType,
      secondaryText,
      secondaryAction,
      secondaryType
    } = this.props
    const maybeWrapInPortal = children =>
      into ? <Portal into={into}>{children}</Portal> : children
    return maybeWrapInPortal(
      <div className={styles['c-modal-container']}>
        <Overlay
          onEscape={closable && dismissAction}
          className={overlayClassName}
        >
          <div
            className={cx(
              styles['c-modal-wrapper'],
              {
                [styles['c-modal-wrapper--fullscreen']]: mobileFullscreen
              },
              wrapperClassName
            )}
            onClick={closable && this.handleOutsideClick}
          >
            <div
              className={cx(
                styles['c-modal'],
                styles[`c-modal--${size}`],
                className,
                {
                  [styles['c-modal--overflowHidden']]: overflowHidden,
                  [styles[`c-modal--${spacing}-spacing`]]: spacing,
                  [styles['c-modal--fullscreen']]: mobileFullscreen,
                  [styles['c-modal--closable']]: closable
                }
              )}
            >
              {closable && (
                <ModalCross
                  className={crossClassName}
                  onClick={dismissAction}
                  color={crossColor}
                />
              )}
              {title && <ModalHeader title={title} />}
              {description && (
                <ModalDescription>{description}</ModalDescription>
              )}
              {children}
              {(primaryText && primaryAction) ||
              (secondaryText && secondaryAction) ? (
                <ModalFooter
                  primaryText={primaryText}
                  primaryAction={primaryAction}
                  primaryType={primaryType}
                  secondaryText={secondaryText}
                  secondaryAction={secondaryAction}
                  secondaryType={secondaryType}
                />
              ) : null}
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
  /** Secondary button text */
  secondaryText: PropTypes.string,
  /** Secondary button callback */
  secondaryAction: PropTypes.func,
  /** Primary button type */
  primaryType: PropTypes.string,
  /** Primary button text */
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
  spacing: PropTypes.oneOf(['small', 'large']),
  /** If you want your modal taking all the screen on mobile */
  mobileFullscreen: PropTypes.bool,
  /** className to apply to Overlay component */
  overlayClassName: PropTypes.string,
  /** className to apply to wrapper element */
  wrapperClassName: PropTypes.string
}

Modal.defaultProps = {
  primaryType: 'regular',
  secondaryType: 'secondary',
  closable: true,
  overflowHidden: false,
  size: 'small',
  mobileFullscreen: false
}

ModalBrandedHeader.propTypes = {
  /** `bg` can be any type of color Hexa, RGB(A), HSL(A), gradient… anything that CSS allows for a color really */
  bg: PropTypes.string.isRequired,
  /** `logo` should be a path to any type of image file supported by browsers */
  logo: PropTypes.string.isRequired
}

const EnhancedModal = migrateProps([
  { src: 'withCross', dest: 'closable' }, // withCross -> closable
  {
    fn: props => {
      let msg = null
      if (!props.into) {
        msg =
          'In the future, `into` default value will be "body" : Modals will be rendered inside a <Portal />. Try to render your Modal with into=`body`'
      }
      return [props, msg]
    }
  },
  {
    fn: props => {
      let newProps
      if (props.secondaryAction && !props.dismissAction) {
        newProps = { ...props }
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

EnhancedModal.propTypes = Modal.propTypes
EnhancedModal.defaultProps = Modal.defaultProps

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
  ModalTitle,
  ModalButtons,
  ModalBrandedHeader,
  ModalDescription
}
