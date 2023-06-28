import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import styles from './styles.styl'
import cx from 'classnames'

export class Alert extends Component {
  state = {
    hidden: true
  }

  computeDuration() {
    const words = this.props.message.split(/\W/).filter(Boolean)
    const minDuration = this.props.minDuration
    return Math.max(minDuration, (words.length / 3) * 1000)
  }

  componentDidMount() {
    if (this.props.duration !== Infinity) {
      this.closeTimer = setTimeout(
        () => {
          this.beginClosing()
        },
        this.props.duration === 'auto'
          ? this.computeDuration()
          : this.props.duration
      )
    }
    // Delay to trigger CSS transition after the first render.
    // Totally open for a better way to achieve this.
    setTimeout(() => {
      this.setState({ hidden: false })
    }, 20)
  }

  beginClosing() {
    this.base.addEventListener('transitionend', this.notifyClosed, false)
    this.setState({ hidden: true })
  }

  notifyClosed = () => {
    this.props.onClose()
  }

  componentWillUnmount() {
    this.base.removeEventListener('transitionend', this.notifyClosed, false)
    this.setState({ hidden: false })
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
    }
  }

  close = () => {
    if (this.closeTimer) clearTimeout(this.closeTimer)
    this.beginClosing()
  }

  buttonAction = () => {
    const { buttonAction } = this.props
    // pass a way to dismiss the alerter from the button
    if (typeof buttonAction === 'function') buttonAction(this.close)
  }

  render() {
    const { message, type, buttonText } = this.props
    const { hidden } = this.state
    return (
      <div
        ref={c => (this.base = c)}
        className={cx(
          styles['c-alert'],
          hidden ? styles['c-alert--hidden'] : ''
        )}
        role="alert"
      >
        <div
          className={cx(styles['c-alert-wrapper'], styles[`c-alert--${type}`])}
        >
          <p>{message}</p>
          {buttonText && (
            <Button
              onClick={this.buttonAction}
              className={styles[`c-btn--alert-${type}`]}
              label={buttonText}
              size="tiny"
            />
          )}
        </div>
      </div>
    )
  }
}

Alert.propTypes = {
  /** @type string - Controls the style of the error */
  type: PropTypes.oneOf(['success', 'info', 'error']),
  /** @type {string} - Message to display */
  message: PropTypes.string.isRequired,
  /** @type {function} - Callback when is dismissed */
  onClose: PropTypes.func,
  /** @type {function} - Text of the button, if absent, no button is displayed */
  buttonText: PropTypes.string,
  /** @type {function} - Callback when clicking on the button */
  buttonAction: PropTypes.func
}

Alert.defaultProps = {
  type: 'info',
  onClose: () => {},
  buttonText: undefined,
  buttonAction: () => {},
  duration: 'auto'
}

export default Alert
