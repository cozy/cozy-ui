import React, { Component } from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import omit from 'lodash/omit'
import PropTypes from 'prop-types'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

const ESC_KEYCODE = 27

const nonDOMProps = ['onEscape', 'children', 'className']

const bodyTallerThanWindow = () => {
  return document.body.getBoundingClientRect().height > window.innerHeight
}

/**
 * Display a black overlay on the screen. Stops
 * scrolling on the html/body while displayed.
 *
 * Can react to Escape key
 */
class Overlay extends Component {
  componentDidMount() {
    if (bodyTallerThanWindow()) {
      disableBodyScroll(document.body)
      disableBodyScroll(document.body.parentNode)
    }
    if (this.props.onEscape) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  }

  handleKeydown = e => {
    if (e.keyCode === ESC_KEYCODE) {
      this.props.onEscape()
    }
  }

  componentWillUnmount() {
    // restauration function can be undefined if there was
    // an error during mounting/rendering
    clearAllBodyScrollLocks()
    if (this.props.onEscape) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }

  handleClick = e => {
    if (this.props.onClick && e.target === e.currentTarget) {
      this.props.onClick()
    }
  }

  render() {
    const { children, className } = this.props
    const domProps = omit(this.props, nonDOMProps)
    return (
      <div
        onClick={this.handleClick}
        className={cx(styles['c-overlay'], className)}
        {...domProps}
      >
        {children}
      </div>
    )
  }
}

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onEscape: PropTypes.func
}

export default Overlay
