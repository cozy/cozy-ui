import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Portal from 'preact-portal'

import styles from './styles.styl'
import classNames from 'classnames'

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

  componentDidMount() {
    this.closeTimer = setTimeout(() => {
      this.beginClosing()
    }, 2000)
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
      <div className={styles['coz-alerter']}>
        <div
          className={classNames(
            styles['coz-alert'],
            styles[`coz-alert--${type}`],
            hidden ? styles['coz-alert--hidden'] : ''
          )}
        >
          <p>{message}</p>
          {buttonText && (
            <button
              onClick={buttonAction}
              className={classNames(
                styles['coz-btn'],
                styles[`coz-btn--alert-${type}`]
              )}
            >
              <span>
                {buttonText}
              </span>
            </button>
          )}
        </div>
        {type === 'error' && (
          <div
            className={classNames(
              styles['coz-overlay'],
              hidden ? styles['coz-overlay--hidden'] : ''
            )}
          />
        )}
      </div>
    )
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func
}

Alert.defaultProps = {
  type: 'info',
  message: '',
  onClose: () => {},
  buttonText: undefined,
  buttonAction: () => {}
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

  handleClose = (id) => {
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
