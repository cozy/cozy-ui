import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import styles from './styles.styl'

class Menu extends Component {
  state = { opened: false }

  toggle = () => this.state.opened ? this.close() : this.open()

  handleClickOutside = e => {
    const node = ReactDOM.findDOMNode(this)
    if (!node.contains(e.target)) {
      e.stopPropagation()
      this.close()
    }
  }

  handleSelect = (item, e) => {
    this.close()
  }

  open () {
    this.setState({ opened: true })
    document.addEventListener('click', this.handleClickOutside, true)
  }

  close () {
    this.setState({ opened: false })
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
    const { title, disabled, className, buttonClassName } = this.props
    const { opened } = this.state
    return (
      <div
        className={classNames(styles['c-menu-wrapper'], className)}
      >
        { title ? <button
          role='button'
          className={classNames('c-btn', styles['c-menu__btn'], buttonClassName)}
          disabled={disabled}
          onClick={this.toggle}
        >
          {title}
        </button> : null }
        <div className={classNames(
          styles['c-menu-inner'],
          { [styles['c-menu__inner--opened']]: opened }
        )}>
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

export default Menu
