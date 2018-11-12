import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Overlay from '../Overlay'
import { Button } from '../Button'
import Icon from '../Icon'
import migrateProps from '../helpers/migrateProps'
import palette from '../palette'
import Portal from '../Portal'
import uniqueId from 'lodash/uniqueId'
import styles from './styles.styl'

class AnimatedContentHeader extends Component {
  render() {
    return this.props.children
  }
}

function _getChildrenToRender(children) {
  return React.Children.map(
    children,
    child => (child && child.nodeName !== AnimatedContentHeader ? child : null)
  )
}

function _getAnimatedHeader(children) {
  return React.Children.toArray(children).find(
    child => child && child.nodeName === AnimatedContentHeader
  )
}

class ModalContent extends Component {
  constructor(props) {
    super(props)
    const { children } = this.props
    this.refreshComputedParts(children)
    this.state = {
      displayGhostHeader: false
    }
  }

  // for preact
  // eslint-disable-next-line react/no-deprecated
  componentWillUpdate(nextProps, nextState) {
    this.UNSAFE_componentWillUpdate(nextProps, nextState)
  }

  UNSAFE_componentWillUpdate = nextProps => {
    const { children } = nextProps
    this.refreshComputedParts(children)
  }

  refreshComputedParts(children) {
    const animatedHeader = _getAnimatedHeader(children)
    this.animatedHeader = animatedHeader
    this.childrenToRender = animatedHeader
      ? _getChildrenToRender(children)
      : children
  }

  componentDidMount() {
    this.scrollingContent.addEventListener('scroll', this.handleScroll, {
      passive: true
    })
    document.body.classList.add('has-modal')
  }

  componentWillUnmount() {
    this.scrollingContent.removeEventListener('scroll', this.handleScroll)
    document.body.classList.remove('has-modal')
  }

  handleScroll = () => {
    if (!this.contentHeader) return
    const { headerHeight } = this
    if (!headerHeight && this.contentHeader.clientHeight) {
      this.headerHeight = this.contentHeader.clientHeight
      return
    }
    if (
      !this.state.displayGhostHeader &&
      this.scrollingContent.scrollTop > headerHeight - 20
    ) {
      this.setState(() => ({ displayGhostHeader: true }))
    } else if (
      this.state.displayGhostHeader &&
      this.scrollingContent.scrollTop < headerHeight - 20
    ) {
      this.setState(() => ({ displayGhostHeader: false }))
    }
  }

  render() {
    const { className } = this.props

    const { displayGhostHeader } = this.state
    const { animatedHeader, childrenToRender } = this
    return (
      <div
        className={cx(styles['c-modal-content'], className)}
        ref={div => {
          this.scrollingContent = div
        }}
      >
        {animatedHeader && (
          <div
            className={animatedHeader.attributes.className}
            ref={div => {
              this.contentHeader = div
            }}
          >
            <h2 className={styles['c-modal-illu-header']}>
              {animatedHeader.children}
            </h2>
            <div
              className={cx(
                styles['c-modal-illu-header--ghost'],
                animatedHeader.attributes.activeClassName,
                {
                  [styles['is-active']]: displayGhostHeader
                }
              )}
            >
              {animatedHeader.children}
            </div>
          </div>
        )}
        {childrenToRender}
      </div>
    )
  }
}

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

const ModalHeader = ({
  title,
  children,
  className,
  appIcon,
  appName,
  appEditor,
  style,
  id
}) => {
  const isTitle = typeof children === 'string'
  return (
    <div
      className={cx(styles['c-modal-header'], className)}
      style={style}
      id={id}
      tabIndex="-1"
    >
      {title && <h2>{title}</h2>}
      {isTitle ? <h2>{children}</h2> : children}
      {appName && (
        <h2 className={styles['c-modal-app']}>
          {appIcon && (
            <img className={styles['c-modal-app-icon']} src={appIcon} />
          )}
          {appEditor && (
            <span className={styles['c-app-editor']}>
              {appEditor}
              &nbsp;
            </span>
          )}
          {appName}
        </h2>
      )}
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
    type="button"
    label="Close"
    iconOnly
  >
    <Icon
      icon="cross"
      width="24"
      height="24"
      color={color || palette['coolGrey']}
    />
  </Button>
)

const ModalFooter = ({ children, className }) => (
  <div className={cx(styles['c-modal-footer'], className)}>{children}</div>
)

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
  <div className={cx(styles['c-modal-footer--button'], className)}>
    {children}
    {secondaryText &&
      secondaryAction && (
        <Button
          theme={secondaryType}
          onClick={secondaryAction}
          label={secondaryText}
        />
      )}
    {primaryText &&
      primaryAction && (
        <Button
          theme={primaryType}
          onClick={primaryAction}
          label={primaryText}
        />
      )}
  </div>
)

class Modal extends Component {
  constructor(props) {
    super(props)
    this.titleID = uniqueId('modal_')
  }

  handleOutsideClick = e => {
    if (e.target === e.currentTarget) this.props.dismissAction()
  }

  componentDidMount() {
    if (!this.props.title) {
      console.warn(
        'If your modal has not label you should add an invisible one with `aria-label` props for a11y purposes.'
      )
    }
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
      closeBtnClassName,
      closeBtnColor,
      into,
      size,
      height,
      width,
      spacing,
      mobileFullscreen,
      overlayClassName,
      wrapperClassName,
      primaryText,
      primaryAction,
      primaryType,
      secondaryText,
      secondaryAction,
      secondaryType,
      containerClassName,
      ...restProps
    } = this.props
    const { titleID } = this
    const style = Object.assign({}, height && { height }, width && { width })
    const maybeWrapInPortal = children =>
      into ? <Portal into={into}>{children}</Portal> : children
    return maybeWrapInPortal(
      <div className={cx(styles['c-modal-container'], containerClassName)}>
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
            style={style}
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
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? titleID : null}
              {...restProps}
            >
              {closable && (
                <ModalCross
                  className={cx(closeBtnClassName, {
                    [styles['c-modal-close--notitle']]: !title
                  })}
                  onClick={dismissAction}
                  color={closeBtnColor}
                />
              )}
              {title && <ModalHeader title={title} id={titleID} />}
              {description && (
                <ModalDescription>{description}</ModalDescription>
              )}
              {children}
              {(primaryText && primaryAction) ||
              (secondaryText && secondaryAction) ? (
                <ModalFooter>
                  <ModalButtons
                    primaryText={primaryText}
                    primaryAction={primaryAction}
                    primaryType={primaryType}
                    secondaryText={secondaryText}
                    secondaryAction={secondaryAction}
                    secondaryType={secondaryType}
                  />
                </ModalFooter>
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
  closeBtnClassName: PropTypes.string,
  /** `closeBtnColor` to overwrite the default color of the cross button */
  closeBtnColor: PropTypes.string,
  /** If has a value, the modal will be rendered inside a portal and its value will be passed to Portal
   to control the rendering destination of the Modal */
  into: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge']),
  height: PropTypes.string,
  width: PropTypes.string,
  spacing: PropTypes.oneOf(['small', 'large']),
  /** If you want your modal taking all the screen on mobile */
  mobileFullscreen: PropTypes.bool,
  /** className to apply to Overlay component */
  overlayClassName: PropTypes.string,
  /** className to apply to wrapper element */
  wrapperClassName: PropTypes.string,
  /** className to apply to the container element */
  containerClassName: PropTypes.string
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

ModalHeader.propTypes = {
  appIcon: PropTypes.string,
  appEditor: PropTypes.string,
  appName: PropTypes.string
}

ModalContent.propTypes = {
  iconSrc: PropTypes.node,
  iconDest: PropTypes.node
}

const EnhancedModal = migrateProps([
  { src: 'withCross', dest: 'closable' }, // withCross -> closable
  { src: 'crossClassName', dest: 'closeBtnClassName' }, // crossClassName -> closeBtnClassName
  { src: 'crossColor', dest: 'closeBtnColor' }, // crossColor -> closeBtnColor
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
  AnimatedContentHeader,
  ModalBrandedHeader,
  ModalDescription
})

export default EnhancedModal

export {
  ModalContent,
  ModalSection,
  ModalFooter,
  ModalHeader,
  AnimatedContentHeader,
  ModalTitle,
  ModalButtons,
  ModalBrandedHeader,
  ModalDescription
}
