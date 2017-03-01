import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './index.styl'

const DEFAULT_AUTOCLOSE_DELAY = 3500

class Alerter extends Component {

  constructor (props) {
    super()
    this.state = {
      hidden: true
    }
    this.shouldAutoClose = !props.buttonText
    this.closeTimer = null
  }

  componentDidMount () {
    if (this.shouldAutoClose) {
      const closeDelay = this.props.duration ? parseInt(this.props.duration) : DEFAULT_AUTOCLOSE_DELAY

      this.closeTimer = setTimeout(() => {
        this.setState({ hidden: true })
        if (this.props.onClose && typeof this.props.onClose === 'function') this.props.onClose()
      }, closeDelay)
    }
    // Delay to trigger CSS transition after the first render.
    // Totally open for a better way to achieve this.
    setTimeout(() => {
      this.setState({ hidden: false })
    }, 20)
  }

  componentWillUnmount () {
    this.setState({ hidden: false })
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
    }
  }

  render () {
    const { message, type, buttonText, buttonAction } = this.props
    const { hidden } = this.state

    return (<div className={styles['coz-alerter']}>
      <div
        className={classNames(
          styles['coz-alert'],
          styles[`coz-alert--${type}`],
          hidden ? styles['coz-alert--hidden'] : ''
        )}
      >
        <p>{message}</p>
        {buttonText &&
          <button onClick={buttonAction} className={classNames('coz-btn', `coz-btn--alert-${type}`)}>
            {buttonText}
          </button>
        }
      </div>
    </div>)
  }
}

export default Alerter
