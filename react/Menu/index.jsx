import React, { Component } from 'react'

import styles from './styles.styl'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Media, Bd, Img } from '../Media'
import Popover from '../Popover'
import ActionMenu from '../ActionMenu'
import withBreakpoints from '../helpers/withBreakpoints'
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
          <Media>
            <Img className={styles['c-menu__item-icon']}>{icon}</Img>
            <Bd>{children}</Bd>
          </Media>
        )}
      </div>
    )
  }
}

class Menu extends Component {
  state = { opened: false }

  toggle = () => (this.state.opened ? this.close() : this.open())

  handleClickOutside = e => {
    if (!this.container.contains(e.target)) {
      e.stopPropagation()
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
  handleClick = item => {
    const isDisabled = item.props.disabled
    const itemHandler = isDisabled ? null : item.props.onSelect
    const handler =
      itemHandler || this.props[!isDisabled ? 'onSelect' : 'onSelectDisabled']
    if (handler) {
      const res = handler(item.props.data)
      if (res !== false) {
        this.props.close()
      }
    } else if (!isDisabled) {
      this.props.close()
    }
  }
  render() {
    const {
      text,
      disabled,
      className,
      buttonClassName,
      position,
      component,
      itemsStyle,
      popover,
      shouldConvertToActionMenu
    } = this.props
    const { opened } = this.state
    return (
      <div
        className={cx(styles['c-menu'], className, {
          [styles['c-menu--left']]: position === 'left',
          [styles['c-menu--right']]: position === 'right'
        })}
        ref={ref => {
          this.container = ref
        }}
      >
        {!component ? (
          <button
            role="button"
            className={cx('c-btn', styles['c-menu__btn'], buttonClassName)}
            disabled={disabled}
            onClick={this.toggle}
          >
            {text}
          </button>
        ) : (
          React.cloneElement(component, { disabled, onClick: this.toggle })
        )}
        {opened && (
          <InternalItemWithBreakPoints
            popover={popover}
            itemsStyle={itemsStyle}
            shouldConvertToActionMenu={shouldConvertToActionMenu}
            onClose={this.close.bind(this)}
          >
            {this.renderItems()}
          </InternalItemWithBreakPoints>
        )}
      </div>
    )
  }
}

const InternalItem = ({
  popover,
  children,
  itemsStyle,
  breakpoints: { isMobile },
  shouldConvertToActionMenu,
  onClose
}) => {
  return isMobile && shouldConvertToActionMenu ? (
    <ActionMenu onClose={onClose}>{children}</ActionMenu>
  ) : popover === true ? (
    <Popover
      className={cx(styles['c-menu__inner'], styles['c-menu__inner--opened'])}
      style={{ ...itemsStyle }}
    >
      {children}
    </Popover>
  ) : (
    <div
      className={cx(styles['c-menu__inner'], styles['c-menu__inner--opened'])}
      style={{ ...itemsStyle }}
    >
      {children}
    </div>
  )
}
const InternalItemWithBreakPoints = withBreakpoints()(InternalItem)

Menu.defaultProps = {
  position: 'left',
  disabled: false,
  component: null,
  onSelect: null,
  onSelectDisabled: null,
  itemsStyle: {},
  popover: false
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
  /** itemsStyle : Some global Styles for MenuItems */
  itemsStyle: PropTypes.object,
  /** popOver: if you need fixed menu */
  popOver: PropTypes.bool
}

Menu.MenuItem = MenuItem
export default Menu

export { MenuItem }
