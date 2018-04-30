import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Portal from 'preact-portal'
import Button from '../Button'

import styles from './styles.styl'
import classNames from 'classnames'

const MINIMUM_ALERT_DURATION = 2000

const createStore = () => {
  const notifications = []
  const listeners = []

  const dispatch = notification => {
    notification.id = notifications.length
    notifications.push(notification)
    listeners.forEach(listener => listener(notification))
  }

  const subscribe = listener => {
    listeners.push(listener)
  }

  return { dispatch, subscribe }
}

const store = createStore()

class Alert extends Component {
  state = {
    hidden: true
  }

  computeDuration() {
    const words = this.props.message.split(/\W/).filter(Boolean)
    return Math.max(MINIMUM_ALERT_DURATION, words.length / 3 * 1000)
  }

  componentDidMount() {
    this.closeTimer = setTimeout(() => {
      this.beginClosing()
    }, this.props.duration === 'auto' ? this.computeDuration() : this.props.duration)
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

  render() {
    const { message, type, buttonText, buttonAction } = this.props
    const { hidden } = this.state
    return (
      <div
        className={classNames(
          styles['c-alert'],
          hidden ? styles['c-alert--hidden'] : ''
        )}
      >
        <div
          className={classNames(
            styles['c-alert-wrapper'],
            styles[`c-alert--${type}`]
          )}
        >
          <p>{message}</p>
          {buttonText && (
            <Button
              onClick={buttonAction}
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

class Alerter extends Component {
  state = {
    notifications: []
  }

  /**
   * @param {string} message
   * @param {object} options
   * @public
   * @static
   */
  static info(msg, options) {
    store.dispatch({ type: 'info', msg, options })
  }

  /**
   * @param {string} msg
   * @param {object} options
   * @public
   * @static
   */
  static success(msg, options) {
    store.dispatch({ type: 'success', msg, options })
  }

  /**
   * @param {string} msg
   * @param {object} options
   * @public
   * @static
   */
  static error(msg, options) {
    store.dispatch({ type: 'error', msg, options })
  }

  componentDidMount() {
    this.setState({ mounted: true })
    store.subscribe(this.notify)
  }

  notify = notification => {
    this.setState({
      notifications: [...this.state.notifications, notification]
    })
  }

  handleClose = id => {
    let idx = this.state.notifications.findIndex(n => n.id === id)
    this.setState({
      notifications: [
        ...this.state.notifications.slice(0, idx),
        ...this.state.notifications.slice(idx + 1)
      ]
    })
  }

  render() {
    const { t, into } = this.props
    const { notifications } = this.state
    return (
      <Portal into={into}>
        {notifications.map(notif => (
          <Alert
            type={notif.type}
            key={notif.id}
            message={t ? t(notif.msg, notif.options) : notif.msg}
            onClose={() => this.handleClose(notif.id)}
            buttonText={notif.options && notif.options.buttonText}
            buttonAction={notif.options && notif.options.buttonAction}
            duration={notif.options && notif.options.duration}
          />
        ))}
      </Portal>
    )
  }
}

Alerter.propTypes = {
  /** A translation function. If ommited, messages are left intact */
  t: PropTypes.func,
  /** A selector to target a DOM node where alerts will be rendered */
  into: PropTypes.string
}

Alerter.defaultProps = {
  into: 'body'
}

export default Alerter
