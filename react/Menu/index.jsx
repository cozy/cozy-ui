import React, { Component } from 'react'

import styles from './styles.styl'
import cx from 'classnames'
import MenuButton from './Button'
import PropTypes from 'prop-types'
import { Media, Bd, Img } from '../Media'
import Popover from '../Popover'
import migrateProps from '../helpers/migrateProps'
import createDepreciationLogger from '../helpers/createDepreciationLogger'

class MenuItem extends Component {
  render() {
    const { disabled, className, children, icon, ...props } = this.props
    return (
      <div
        {...props}
        className={cx(
          styles['c-menu__item'],
          {
            [styles['c-menu__item--disabled']]: disabled
          },
          className
        )}
      >
        {!icon ? (
          children
        ) : (
          <Media align="top">
            <Img className={styles['c-menu__item-icon']}>{icon}</Img>
            <Bd>{children}</Bd>
          </Media>
        )}
      </div>
    )
  }
}

const logMenuDepecrated = createDepreciationLogger()

/**
 * @deprecated This component is deprecated, please use ActionMenu instead. See styleguide > Menu for more information on how to migrate.
 */
class Menu extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      opened: props.initialOpen
    }

    logMenuDepecrated(
      'The Menu component has been deprecated and should be replaced by ActionMenu. More infos: https://docs.cozy.io/cozy-ui/react/#!/Menu'
    )
  }

  toggle = () => (this.state.opened ? this.close() : this.open())

  handleClickOutside = e => {
    if (!this.container.contains(e.target)) {
      e.stopPropagation()
      this.close()
    }
  }

  handleClick = item => {
    const isDisabled = item.props.disabled
    const itemHandler = isDisabled ? null : item.props.onSelect
    const handler =
      itemHandler || this.props[!isDisabled ? 'onSelect' : 'onSelectDisabled']
    if (handler) {
      const res = handler(item.props.data)
      if (res !== false) {
        this.close()
      }
    } else if (!isDisabled) {
      this.close()
    }
  }
  open() {
    this.setState({
      opened: true
    })
    document.addEventListener('click', this.handleClickOutside, true)
  }

  close() {
    this.setState({ opened: false })
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }
  renderItems() {
    return React.Children.map(this.props.children, item => {
      if (!item) return item
      // ideally here, we should rely on React's type property and verify that
      // type === Item, but for some reason, preact vnodes don't have this property
      if (item.nodeName !== 'hr') {
        return React.cloneElement(item, {
          onClick: this.handleClick.bind(this, item)
        })
      }
      return item
    })
  }

  render() {
    const {
      label,
      disabled,
      className,
      buttonClassName,
      position,
      component,
      itemsStyle,
      popover,
      // destructure some props to avoid to pass them to div
      /* eslint-disable no-unused-vars */
      onSelect,
      onSelectDisabled,
      initialOpen,
      /* eslint-enable no-unused-vars */
      ...restProps
    } = this.props
    const { opened } = this.state
    const Tag = popover === true ? Popover : 'div'

    return (
      <div
        className={cx(
          styles['c-menu'],
          {
            [styles['c-menu--left']]: position === 'left',
            [styles['c-menu--right']]: position === 'right'
          },
          className
        )}
        ref={ref => {
          this.container = ref
        }}
        {...restProps}
      >
        {!component ? (
          <MenuButton
            disabled={disabled}
            onClick={this.toggle}
            text={label}
            buttonClassName={buttonClassName}
          />
        ) : (
          React.cloneElement(component, { disabled, onClick: this.toggle })
        )}
        {opened && (
          <Tag
            className={cx(
              styles['c-menu__inner'],
              styles['c-menu__inner--opened']
            )}
            style={{ ...itemsStyle }}
          >
            {this.renderItems()}
          </Tag>
        )}
      </div>
    )
  }
}

Menu.defaultProps = {
  position: 'left',
  disabled: false,
  component: null,
  onSelect: null,
  onSelectDisabled: null,
  itemsStyle: {},
  popover: false,
  initialOpen: false
}

Menu.propTypes = {
  /** Use position='right' to display the menu to the right. Use left to display it to the left.
   */
  position: PropTypes.string,
  /** Disables the menu */
  disabled: PropTypes.bool,
  /** Specifies a custom component for the opener */
  component: PropTypes.element,
  /** `onClick` handler for non disabled items */
  onSelect: PropTypes.func,
  /** `onClick` handler for disabled items */
  onSelectDisabled: PropTypes.func,
  /** Global Styles for MenuItems */
  itemsStyle: PropTypes.object,
  /** If you need fixed menu */
  popover: PropTypes.bool,
  /** Whether the menu should be initially opened */
  initialOpen: PropTypes.bool,
  /** Text inside the button */
  label: PropTypes.string
}

Menu.MenuItem = MenuItem
Menu.MenuButton = MenuButton
export default migrateProps([{ src: 'text', dest: 'label' }])(Menu)

export { MenuItem, MenuButton }
