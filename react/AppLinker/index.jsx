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

  state = {
    imgRef: null
  }

  constructor(props) {
    super(props)
  }

  setImgRef = img => {
    this.imgRef = img
    this.setState({ imgRef: this.imgRef })
  }

  static getSlug(props) {
    return props.app.slug
  }

  static getOnClickHref(props, context, imgRef) {
    const { app, client, onAppSwitch } = props

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

            onAppSwitch?.()

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

  render() {
    const { children } = this.props

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
