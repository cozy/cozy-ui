import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.styl'

import Icon from '../Icon'
import palette from '../palette'
import { iconPropType } from '../Icon'

import { getPreloaded } from './Preloader'
import { getAppIconURL } from './utils'

import { AppDoctype } from '../proptypes'
import memoize from 'lodash/memoize'

const LoadingIcon = ({ className }) => {
  return (
    <div
      className={cx(
        styles['c-loading-placeholder'],
        styles['c-app-icon'],
        className
      )}
    />
  )
}

const ErrorIcon = ({ fallbackIcon, className }) => {
  return (
    <Icon
      className={cx(
        styles['c-app-icon'],
        styles['c-app-icon-default'],
        className
      )}
      height="100%"
      icon={fallbackIcon || 'cube'}
      width="100%"
      color={palette['coolGrey']}
    />
  )
}

const memoizedLoaders = {}

export class AppIcon extends Component {
  constructor(props, context) {
    super(props, context)
    const { app, domain, secure } = props
    this.state = {
      error: null,
      icon: null
    }
    this.isUnmounting = false
    this.handleError = this.handleError.bind(this)
  }

  componentWillUnmount() {
    this.isUnmounting = true
  }

  componentDidMount() {
    this.load()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.app !== prevProps.app ||
      this.props.domain !== prevProps.domain ||
      this.props.fetchIcon !== prevProps.fetchIcon
    ) {
      this.load()
    }
  }

  async load() {
    const { app, domain, fetchIcon, onReady, secure, loadFn } = this.props
    let loadedUrl, loadError
    try {
      loadedUrl = 'null'
      // loadedUrl = await loadFn(app, domain, secure)
    } catch (error) {
      loadError = error
    }
    if (!this.isUnmounting) {
      this.setState({
        error: loadError,
        icon: loadedUrl
      })
      if (typeof onReady === 'function') {
        console.log('fetched icon')
        onReady()
      }
    }
  }

  handleError() {
    this.setState({ error: new Error('Image could not be loaded') })
  }

  render() {
    const { alt, className, fallbackIcon } = this.props

    const { icon, error } = this.state

    if (!icon && !error) {
      return <LoadingIcon className={className} />
    }

    if (error) {
      return <ErrorIcon fallbackIcon={fallbackIcon} className={className} />
    }

    if (icon) {
      return (
        <img
          alt={alt}
          className={cx(styles['c-app-icon'], className)}
          src={icon}
          onError={this.handleError}
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
  className: PropTypes.string,
  domain: PropTypes.string,
  onReady: PropTypes.func,
  secure: PropTypes.bool
}

AppIcon.defaultProps = {
  fetchIcon: getAppIconURL
}

export default AppIcon
