import React, { Component } from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import omit from 'lodash/omit'
import PropTypes from 'prop-types'
import { RemoveScroll } from 'react-remove-scroll'

const ESC_KEYCODE = 27

const nonDOMProps = ['onEscape', 'children', 'className']

/**
 * Display a black overlay on the screen. Stops
 * scrolling on the html/body while displayed.
 *
 * Can react to Escape key
 */
class Overlay extends Component {
  componentDidMount() {
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
        <RemoveScroll>{children}</RemoveScroll>
      </div>
    )
  }
}

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onEscape: PropTypes.func
}

export default Overlay
