import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { isMobileApp } from 'cozy-device-helper'

/**
 * Customized function to get dimensions and position for a centered
 * popup window
 * @param  {string|number} w
 * @param  {string|number} h
 * @return {{w, h, top, left}}       Popup window
 */
// source https://stackoverflow.com/a/16861050
export function popupCenter(w, h) {
  // eslint-disable-next-line no-redeclare
  /* global screen */
  // Fixes dual-screen position
  //                      Most browsers      Firefox
  const dualScreenLeft = window.screenLeft || screen.left
  const dualScreenTop = window.screenTop || screen.top

  const width =
    window.innerWidth || document.documentElement.clientWidth || screen.width
  const height =
    window.innerHeight || document.documentElement.clientHeight || screen.height

  const left = width / 2 - w / 2 + dualScreenLeft
  const top = height / 2 - h / 2 + dualScreenTop
  return {
    w,
    h,
    top,
    left
  }
}

/**
 * Renders a popup and listen to popup events
 */
export class Popup extends PureComponent {
  constructor(props, context) {
    super(props, context)

    this.handleClose = this.handleClose.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleLoadStart = this.handleLoadStart.bind(this)
  }

  componentDidMount() {
    this.showPopup()
  }

  componentWillUnmount() {
    this.killPopup()
  }

  addListeners() {
    // Listen here for message FROM popup
    window.addEventListener('message', this.handleMessage)

    if (isMobileApp()) {
      this.popup.addEventListener('loadstart', this.handleLoadStart)
      this.popup.addEventListener('exit', this.handleClose)
    }
  }

  removeListeners() {
    window.removeEventListener('message', this.handleMessage)

    // rest of instructions only if popup is still opened
    if (this.popup.closed) return

    if (isMobileApp()) {
      this.popup.removeEventListener('loadstart', this.handleLoadStart)
      this.popup.removeEventListener('exit', this.handleClose)
    }
  }

  handleMessage(messageEvent) {
    const { onMessage } = this.props
    const isFromPopup = this.popup === messageEvent.source
    if (isFromPopup && typeof onMessage === 'function') onMessage(messageEvent)
  }

  handleClose() {
    this.killPopup()

    const { onClose } = this.props
    if (typeof onClose === 'function') onClose(this.popup)
  }

  showPopup() {
    const { initialUrl, height, width, title } = this.props
    const { w, h, top, left } = popupCenter(width, height)
    /**
     * ATM we also use window.open on Native App in order to open
     * InAppBrowser. But some provider (Google for instance) will
     * block us. We need to use a SafariViewController or Chrome Custom Tab.
     * So
     */
    this.popup = window.open(
      initialUrl,
      title,
      `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
    )
    // Puts focus on the newWindow
    if (this.popup.focus) {
      this.popup.focus()
    }

    this.addListeners()
    this.startMonitoringClosing()
  }

  killPopup() {
    this.removeListeners()
    this.stopMonitoringClosing()
    if (!this.popup.closed) this.popup.close()
  }

  monitorClosing() {
    if (this.popup.closed) {
      this.stopMonitoringClosing()
      return this.handleClose()
    }
  }

  /**
   * Check if window is closing every 500ms
   * @param  {Window} window
   */
  startMonitoringClosing() {
    this.checkClosedInterval = setInterval(() => this.monitorClosing(), 500)
  }

  stopMonitoringClosing() {
    clearInterval(this.checkClosedInterval)
  }

  handleLoadStart(event) {
    const { url } = event
    const { onMobileUrlChange } = this.props
    if (typeof onMobileUrlChange === 'function') onMobileUrlChange(new URL(url))
  }

  render() {
    return null
  }
}

Popup.propTypes = {
  // Dimensions
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  initialUrl: PropTypes.string.isRequired,
  // Callbacks
  /**
   * Close handler. Called after popup closing.
   */
  onClose: PropTypes.func,
  /**
   * Handler called when a message is received from `postMessage` interface.
   * @param {MessageEvent} messageEvent Received MessageEvent object.
   */
  onMessage: PropTypes.func,
  /**
   * Handler used on mobile device to detect url changes
   * @param {URL} url URL object.
   */
  onMobileUrlChange: PropTypes.func
}

Popup.defaultProps = {
  title: ''
}

export default Popup
