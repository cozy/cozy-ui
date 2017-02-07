import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './index.styl'

const AUTOCLOSE_DELAY = 2000

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
      this.closeTimer = setTimeout(() => {
        this.setState({ hidden: true })
      }, AUTOCLOSE_DELAY)
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
