import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.styl'

import Icon from '../Icon'

import appDefaultIcon from '../../assets/icons/ui/cube.svg'
import { getPreloaded, preload } from './Preloader'

const DONE = 'done'
const ERRORED = 'errored'
const FETCHING = 'fetching'

export class AppIcon extends Component {
  constructor(props, context) {
    super(props, context)
    const { app, domain, secure } = props
    const preloaded = getPreloaded(app, domain, secure)
    this.state = {
      error: null,
      icon: preloaded,
      status: preloaded ? DONE : FETCHING
    }
  }

  componentDidMount() {
    this.load()
  }

  async load() {
    const { app, domain, fetchIcon, onReady, secure } = this.props
    const loadFn = fetchIcon || preload
    let loadedUrl
    let loadError
    try {
      loadedUrl = await loadFn(app, domain, secure)
    } catch (error) {
      loadError = error
    }

    this.setState({
      error: loadError,
      icon: loadedUrl,
      status: loadError ? ERRORED : DONE
    })

    if (typeof onReady === 'function') {
      onReady()
    }
  }

  render() {
    const { alt, className } = this.props
    const { icon, status } = this.state
    switch (status) {
      case FETCHING:
        return (
          <div
            className={cx(
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
            className={cx(styles['c-app-icon'], className)}
            src={icon}
          />
        )
      case ERRORED:
      default:
        return (
          <Icon
            className={cx(
              styles['c-app-icon'],
              styles['c-app-icon-default'],
              className
            )}
            height="100%"
            icon={appDefaultIcon}
            width="100%"
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
  secure: PropTypes.bool
}

export default AppIcon
