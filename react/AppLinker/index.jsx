import PropTypes from 'prop-types'
import React from 'react'

import { withClient } from 'cozy-client'
import { isFlagshipApp } from 'cozy-device-helper'
import { WebviewContext } from 'cozy-intent'
import logger from 'cozy-logger'

import {
  generateUniversalLink,
  generateWebLink,
  getUniversalLinkDomain
} from './native'

export class AppLinker extends React.Component {
  static contextType = WebviewContext

  state = {}

  constructor(props) {
    super(props)

    this.imgRef = null
  }

  setImgRef = img => {
    this.imgRef = img
    this.setState({ imgRef: this.imgRef })
  }

  static getSlug(props) {
    if (props.app && props.app.slug) {
      return props.app.slug
    }

    return props.slug
  }

  static deprecateSlug(props) {
    if (props.slug) {
      console.warn(
        `AppLinker's 'slug' prop is deprecated, please use 'app.slug' instead`
      )
    }
  }

  static getOnClickHref(props, context, imgRef) {
    const { app, client } = props
    let href = props.href
    let onClick = null

    if (isFlagshipApp()) {
      const { app: currentApp } = client
        ? client.getInstanceOptions()
        : undefined

      if (currentApp === undefined || app.slug !== currentApp.slug) {
        const imgPayload =
          imgRef &&
          JSON.stringify({
            ...imgRef.getBoundingClientRect().toJSON()
          })

        return {
          onClick: event => {
            event.preventDefault()

            context
              ? context.call('openApp', href, app, imgPayload)
              : logger.error(
                  `Failed to "openApp(${app})". WebviewService has the following falsy value "${context}" in AppLinker's context.`
                )
          },
          href: '#'
        }
      }
    }

    return {
      href,
      onClick
    }
  }

  static onAppSwitch(onAppSwitchFn) {
    if (typeof onAppSwitchFn === 'function') {
      onAppSwitchFn()
    }
  }

  static openWeb(props) {
    AppLinker.onAppSwitch(props.onAppSwitch)
  }

  render() {
    const { children } = this.props

    AppLinker.deprecateSlug(this.props)

    const { href, onClick } = AppLinker.getOnClickHref(
      this.props,
      this.context,
      this.state.imgRef
    )

    return children({
      iconRef: this.setImgRef,
      onClick: onClick,
      href
    })
  }
}

AppLinker.propTypes = {
  /** DEPRECATED: please use app.slug prop */
  slug: PropTypes.string,
  /*
  Full web url : Used by default on desktop browser
  Used as a fallback_uri on mobile web
  */
  href: PropTypes.string,
  onAppSwitch: PropTypes.func,
  app: PropTypes.shape({
    // Slug of the app : drive / banks ...
    slug: PropTypes.string.isRequired
  }).isRequired
}

export default withClient(AppLinker)
export { getUniversalLinkDomain, generateWebLink, generateUniversalLink }
