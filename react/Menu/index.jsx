import React, { Component } from 'react'

import styles from './styles.styl'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Media, Bd, Img } from '../Media'
import ReactDOM from 'react-dom'
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
  // Sum the scrollTop between the element and all the tree up
  getScrollParent(element) {
    let el = element
    let scrollTop = 0

    while (el && el.parentNode !== document) {
      scrollTop += el.scrollTop
      el = el.parentNode
    }
    return scrollTop
  }
  open() {
    // eslint-disable-next-line
    const MenuElement = ReactDOM.findDOMNode(this.container)
    const coordinates = MenuElement.getBoundingClientRect()
    const scrollTop = this.getScrollParent(MenuElement)
    this.setState({
      opened: true,
      coordinates,
      scrollTop
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
      itemsStyle
    } = this.props
    const { opened, coordinates, scrollTop } = this.state
    return (
      <div
        className={cx(styles['c-menu'], className, {
          [styles['c-menu--left']]: position === 'left',
          [styles['c-menu--right']]: position === 'right',
          [styles['c-menu--fixed']]: position === 'fixed'
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
        {opened && position === 'fixed' ? (
          <IternalMenuItem
            coordinates={coordinates}
            close={this.close}
            itemsStyle={itemsStyle}
            scrollTop={scrollTop}
            renderItems={this.renderItems.bind(this)}
          >
            {this.props.children}
          </IternalMenuItem>
        ) : null}
        {open && position !== 'fixed' ? (
          <div
            className={cx(styles['c-menu__inner'], {
              [styles['c-menu__inner--opened']]: opened
            })}
          >
            {this.renderItems()}
          </div>
        ) : null}
      </div>
    )
  }
}

class IternalMenuItem extends Component {
  constructor() {
    super()
    this.element = ''
    this.state = {
      style: { display: 'block', visibility: 'hidden', position: 'fixed' }
    }
  }
  //When the component is ready, than let's do some Maths
  componentDidMount() {
    this.handleDisplay()
  }

  handleDisplay() {
    const { coordinates, itemsStyle, scrollTop } = this.props
    //Find me & give me my coordinates
    // eslint-disable-next-line
    const domItem = ReactDOM.findDOMNode(this.element)
    const domItemCoordinates = domItem.getBoundingClientRect()
    //If we have don't have enough space => maths
    const hasEnoughNotSpace =
      domItemCoordinates.bottom - scrollTop > window.innerHeight
    this.setState(
      {
        style: {
          ...itemsStyle,
          top: hasEnoughNotSpace
            ? coordinates.top - domItemCoordinates.height
            : coordinates.top + coordinates.height,
          left: coordinates.left + coordinates.width - domItemCoordinates.width,
          visibility: 'hidden',
          position: 'fixed',
          display: 'block'
        }
      },
      () => {
        /* We need callback here, because sometimes, getBoundingClient() 
            doesn't return the right style... 
          */
        const updatedItem = domItem.getBoundingClientRect()

        this.setState({
          style: {
            ...itemsStyle,
            ...this.state.style,
            top: hasEnoughNotSpace
              ? coordinates.top - updatedItem.height
              : coordinates.top + coordinates.height,
            left: coordinates.left + coordinates.width - updatedItem.width,
            visibility: 'visible'
          }
        })
      }
    )
  }

  render() {
    return (
      <div
        className={cx(styles['c-menu__inner'], styles['c-menu__inner--opened'])}
        ref={element => {
          if (element !== null && element !== this.element) {
            this.element = element
          }
        }}
        style={({ ...this.props.itemsStyle }, { ...this.state.style })}
      >
        {this.props.renderItems()}
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
  itemsStyle: {}
}

Menu.propTypes = {
  /** Use position='right' to display the menu to the right. Use left to display it to the left.
   * Use position='fixed' to let it choose if it has enough space to be displayed at bottom.
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
  itemsStyle: PropTypes.object
}

Menu.MenuItem = MenuItem
export default Menu

export { MenuItem }
