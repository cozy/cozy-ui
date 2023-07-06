import React, { Component } from 'react'
import styles from './styles.styl'
import cx from 'classnames'
import omit from 'lodash/omit'
import PropTypes from 'prop-types'
import { RemoveScroll } from 'react-remove-scroll'

const ESC_KEYCODE = 27

const nonDOMProps = ['onEscape', 'children', 'className', 'innerRef']

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
    const { children, className, innerRef } = this.props
    const domProps = omit(this.props, nonDOMProps)
    // We use Overlay when opening an ActionMenu.
    // We don't want to block the scroll on Desktop if the ActionMenu
    // is displayed. So no RemoveScroll if the content is too small
    // @todo Overlay should not RemoveScroll by itself. It should
    // be done by lower component (like ActionMenu / Dialog / Modal...)
    const Wrapper = bodyTallerThanWindow() ? React.Fragment : RemoveScroll

    return (
      <div
        ref={innerRef}
        className={cx(styles['c-overlay'], className)}
        onClick={this.handleClick}
        {...domProps}
      >
        <Wrapper>{children}</Wrapper>
      </div>
    )
  }
}

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onEscape: PropTypes.func
}

export default React.forwardRef((props, ref) => (
  <Overlay innerRef={ref} {...props} />
))
