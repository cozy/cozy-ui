import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.styl'

import Icon from '../Icon'
import palette from '../palette'

import { getPreloaded, preload } from './Preloader'

const DONE = 'done'
const ERRORED = 'errored'
const FETCHING = 'fetching'

export class AppIcon extends Component {
  constructor(props, context) {
    super(props, context)
    const { app, domain, secure } = props
    const preloaded = getPreloaded(app, domain, secure)
    this.state = this.buildState(preloaded)
  }

  async componentDidMount() {
    const { onReady } = this.props
    const { status } = this.state
    if (status !== DONE) {
      await this.load()
    }
    if (typeof onReady === 'function') onReady()
  }

  // When nested into a list of component, an AppIcon may update,
  // and we must then update the state
  async componentDidUpdate(prevProps) {
    const { app, domain, onUpdate, secure } = this.props

    if (app.slug === prevProps.app.slug) return

    const preloaded = getPreloaded(app, domain, secure)

    if (preloaded) {
      this.setIcon(preloaded)
    } else {
      await this.load()
    }
    if (typeof onUpdate === 'function') onUpdate()
  }

  async load() {
    const { app, domain, fetchIcon, secure } = this.props
    const loadFn = fetchIcon || preload
    let loadedUrl
    let loadError
    try {
      loadedUrl = await loadFn(app, domain, secure)
    } catch (error) {
      loadError = error
    }

    this.setIcon(loadedUrl, loadError)
  }

  buildState(icon, error = null) {
    return {
      error,
      icon,
      status: error ? ERRORED : icon ? DONE : FETCHING
    }
  }

  setIcon(icon, error) {
    this.setState(this.buildState(icon, error))
  }

  render() {
    const { alt, className } = this.props
    const { icon, status } = this.state
    switch (status) {
      case FETCHING:
        return (
          <div
            className={classNames(
              styles['c-loading-placeholder'],
              styles['c-app-icon'],
              className
            )}
          />
        )
      case DONE:
        return (
          <img
            alt={alt}
            className={classNames(styles['c-app-icon'], className)}
            src={icon}
          />
        )
      case ERRORED:
      default:
        return (
          <Icon
            className={classNames(
              styles['c-app-icon'],
              styles['c-app-icon-default'],
              className
            )}
            height="100%"
            icon="cube"
            width="100%"
            color={palette['coolGrey']}
          />
        )
    }
  }
}

AppIcon.propTypes = {
  alt: PropTypes.string,
  app: PropTypes.object,
  className: PropTypes.string,
  domain: PropTypes.string,
  fetchIcon: PropTypes.func,
  onReady: PropTypes.func,
  onUpdate: PropTypes.func,
  secure: PropTypes.bool
}

export default AppIcon
