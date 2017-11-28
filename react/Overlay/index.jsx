import React, { Component } from 'react'
import styles from './styles'
import cx from 'classnames'

const disableScroll = node => {
  const previousOverflow = node.style.overflow
  node.style.overflow = 'hidden'
  return () => {
    node.style.overflow = previousOverflow
  }
}

const ESC_KEYCODE = 27

/**
 * Display a black overlay on the screen. Stops
 * scrolling on the html/body while displayed.
 *
 * Can react to Escape key
 */
class Overlay extends Component {
  componentDidMount () {
    this.restoreScrollBody = disableScroll(document.body)
    this.restoreScrollHtml = disableScroll(document.body.parentNode)
    if (this.props.onEscape) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  }

  handleKeydown = (e) => {
    if (e.keyCode === ESC_KEYCODE) {
      this.props.onEscape()
    }
  }

  componentWillUnmount () {
    this.restoreScrollBody()
    this.restoreScrollHtml()
    if (this.props.onEscape) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }

  handleClick = e => {
    if (this.props.onClick && e.target === e.currentTarget) {
      this.props.onClick()
    }
  }

  render () {
    const { children, className, onClick, ...rest } = this.props

    return (
      <div onClick={this.handleClick} className={cx(styles['c-overlay'], className)} {...rest}>
        { children }
      </div>
    )
  }
}

export default Overlay
