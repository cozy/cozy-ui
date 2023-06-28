import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Portal from '../../Portal'
import Alert from './Alert'

const MINIMUM_ALERT_DURATION = 2000

let currentId = 0

const createStore = () => {
  let state = []
  const listeners = []

  const emit = () => {
    listeners.forEach(listener => listener(state))
  }

  const addNotification = notification => {
    notification.id = currentId++
    state = [...state, notification]
    emit()
    return notification
  }

  const removeNotification = notification => {
    const id = notification.id
    const idx = state.findIndex(n => n.id === id)
    if (idx === -1) {
      return
    }
    const removed = state[idx]
    state = [...state.slice(0, idx), ...state.slice(idx + 1)]
    emit()
    return removed
  }

  const subscribe = listener => {
    listeners.push(listener)
  }

  const reset = () => {
    state = []
    emit()
  }

  return { addNotification, removeNotification, subscribe, reset }
}

const store = createStore()

class Alerter extends Component {
  state = {
    notifications: []
  }

  static reset() {
    store.reset()
  }

  /**
   * @param {string} message
   * @param {object} options
   * @public
   * @static
   */
  static info(msg, options) {
    return store.addNotification({ type: 'info', msg, options })
  }

  /**
   * @param {string} msg
   * @param {object} options
   * @public
   * @static
   */
  static success(msg, options) {
    return store.addNotification({ type: 'success', msg, options })
  }

  /**
   * @param {string} msg
   * @param {object} options
   * @public
   * @static
   */
  static error(msg, options) {
    return store.addNotification({ type: 'error', msg, options })
  }

  /**
   * Remove notification by id
   */
  static removeNotification(notification) {
    return store.removeNotification(notification)
  }

  componentDidMount() {
    this.setState({ mounted: true })
    store.subscribe(this.onStoreEvent)
  }

  onStoreEvent = newNotifications => {
    this.setState({
      notifications: newNotifications
    })
  }

  handleClose = id => {
    store.removeNotification(id)
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
            onClose={() => this.handleClose(notif)}
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
