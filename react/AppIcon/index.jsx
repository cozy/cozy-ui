import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withClient } from 'cozy-client'
import styles from './styles.styl'

import Icon, { iconPropType } from '../Icon'
import CubeIcon from '../Icons/Cube'

import palette from '../palette'

import { AppDoctype } from '../proptypes'

const DONE = 'done'
const ERRORED = 'errored'
const FETCHING = 'fetching'

export class AppIcon extends Component {
  constructor(props, context) {
    super(props, context)
    this.isUnmounting = false
    this.handleError = this.handleError.bind(this)
    this.fetchIcon = this.fetchIcon.bind(this)
  }

  state = {
    error: null,
    icon: null,
    status: this.props.client ? FETCHING : ERRORED
  }

  componentWillUnmount() {
    this.isUnmounting = true
  }
  componentDidMount() {
    this.isUnmounting = false
    this.load()
  }

  componentDidUpdate(prevProps) {
    if (this.props.fetchIcon !== prevProps.fetchIcon) {
      this.load()
    }
  }

  fetchIcon() {
    const { app, type, priority, client } = this.props

    return client.getStackClient().getIconURL({
      type,
      slug: app.slug || app,
      appData: app,
      priority
    })
  }

  handleError() {
    this.setState({ status: ERRORED })
  }

  async load() {
    const { app, fetchIcon, onReady, client } = this.props

    const loadFn = fetchIcon || this.fetchIcon
    let loadedUrl
    let loadError
    let domain
    let secure

    try {
      if (client) {
        const cozyURL = new URL(client.getStackClient().uri)
        domain = cozyURL.host
        secure = cozyURL.protocol === 'https:'
      }
      loadedUrl = await loadFn(app, domain, secure)
    } catch (error) {
      loadError = error
    }

    if (!this.isUnmounting) {
      this.setState({
        error: loadError,
        icon: loadedUrl,
        status: loadError ? ERRORED : DONE
      })
      if (typeof onReady === 'function') {
        onReady()
      }
    }
  }

  render() {
    const { alt, className, fallbackIcon } = this.props
    const { icon, status } = this.state

    switch (status) {
      case FETCHING:
        return (
          <div
            role="progressbar"
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
            onError={this.handleError}
            ref={this.props.iconRef}
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
            icon={fallbackIcon || CubeIcon}
            width="100%"
            color={palette['coolGrey']}
            iconRef={this.props.iconRef}
          />
        )
    }
  }
}

AppIcon.propTypes = {
  alt: PropTypes.string,
  /** Required if fetchIcon is not provided */
  app: PropTypes.oneOfType([AppDoctype, PropTypes.string]),
  /** Icon to fallback on error (optional), default cube icon */
  fallbackIcon: iconPropType,
  /** Custom implementation of how to fetch icon */
  fetchIcon: PropTypes.func,
  client: PropTypes.object.isRequired,
  className: PropTypes.string,
  onReady: PropTypes.func,
  /** Type of application */
  type: PropTypes.oneOf(['app', 'konnector']),
  /** First source to fetch the icon. If nothing is found, there is a second try with the other source */
  priority: PropTypes.oneOf(['stack', 'registry'])
}

AppIcon.defaultProps = {
  type: 'app',
  priority: 'stack'
}

export default withClient(AppIcon)
