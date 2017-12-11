import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './styles.styl'
import cx from 'classnames'
import PropTypes from 'prop-types'

class MenuItem extends Component {
  render ({ disabled, className, onClick, children }) {
    return (
      <div
          className={
            cx(styles['c-menu__item'], {
              [styles['c-menu__item--disabled']]: disabled
            }, className)
          }
          onClick={onClick}>
        {children}
      </div>
    )
  }
}

class Menu extends Component {
  state = { opened: false }

  toggle = () => this.state.opened ? this.close() : this.open()

  handleClickOutside = e => {
    if (!this.container.contains(e.target)) {
      e.stopPropagation()
      this.close()
    }
  }

  handleSelect = (item, e) => {
    const isDisabled = item.props.disabled
    const handler = this.props[!isDisabled ? 'onSelect' : 'onSelectDisabled']
    if (handler) {
      const res = handler(item.props.data)
      if (res !== false) {
        this.close()
      }
    } else if (!isDisabled) {
      this.close()
    }
  }

  open () {
    this.setState({ opened: true })
    document.addEventListener('click', this.handleClickOutside, true)
  }

  close () {
    this.setState({ opened: false })
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  renderItems () {
    return React.Children.map(this.props.children, item => {
      if (!item) return item
      // ideally here, we should rely on React's type property and verify that
      // type === Item, but for some reason, preact vnodes don't have this property
      if (item.nodeName !== 'hr') {
        return React.cloneElement(item, {
          onClick: this.handleSelect.bind(this, item)
        })
      }
      return React.cloneElement(item)
    })
  }

  render () {
    const { text, disabled, className, buttonClassName, position, component } = this.props
    const { opened } = this.state
    return (
      <div
        className={classNames(styles['c-menu'], className, {
          [styles['c-menu--left']]: position == 'left',
          [styles['c-menu--right']]: position == 'right'
        })}
        ref={ref => { this.container = ref }}
      >
        { !component ? <button
          role='button'
          className={classNames('c-btn', styles['c-menu__btn'], buttonClassName)}
          disabled={disabled}
          onClick={this.toggle}
        >
          {text}
        </button> : React.cloneElement(component, { disabled, onClick: this.toggle}) }
        { opened ? <div className={classNames(
          styles['c-menu__inner'],
          { [styles['c-menu__inner--opened']]: opened }
        )}>
          {this.renderItems()}
        </div> : null }
      </div>
    )
  }
}

Menu.defaultProps = {
  position: 'left',
  disabled: false,
  component: null,
  onSelect: null,
  onSelectDisabled: null
}

Menu.propTypes = {
  /** Use position='right' to display the menu to the right */
  position: PropTypes.string,
  /** Disables the menu */
  disabled: PropTypes.bool,
  /** Specifies a custom component for the opener */
  component: PropTypes.element,
  /** `onClick` handler for non disabled items */
  onSelect: PropTypes.func,
  /** `onClick` handler for disabled items */
  onSelectDisabled: PropTypes.func,
}

Menu.MenuItem = MenuItem
export default Menu

export { MenuItem }
