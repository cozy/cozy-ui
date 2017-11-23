import React, { Component } from 'react'
import styles from './styles'

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
      document.addEventListener('keydown', this.props.onEscape)
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
      document.removeEventListener('keydown', this.props.onEscape)
    }
  }

  render () {
    const { children, ...rest } = this.props
    return (
      <div className={styles['c-overlay']} {...rest}>
        { children }
      </div>
    )
  }
}

export default Overlay
