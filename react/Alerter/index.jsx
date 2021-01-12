import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Portal from '../Portal'
import Alert from './Alert'

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
            minDuration={MINIMUM_ALERT_DURATION}
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
