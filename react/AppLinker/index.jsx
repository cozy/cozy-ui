import React from 'react'
import PropTypes from 'prop-types'

import { withClient } from 'cozy-client'
import {
  checkApp,
  startApp,
  isMobileApp,
  isMobile,
  openDeeplinkOrRedirect,
  isAndroid,
  isFlagshipApp
} from 'cozy-device-helper'
import { WebviewContext } from 'cozy-intent'
import logger from 'cozy-logger'

import {
  generateUniversalLink,
  generateWebLink,
  getUniversalLinkDomain
} from './native'
import { NATIVE_APP_INFOS } from './native.config'
import expiringMemoize from './expiringMemoize'

const expirationDelay = 10 * 1000
const memoizedCheckApp = expiringMemoize(
  appInfo => checkApp(appInfo).catch(() => false),
  expirationDelay,
  appInfo => appInfo.appId
)

export class AppLinker extends React.Component {
  static contextType = WebviewContext

  state = {
    nativeAppIsAvailable: null,
    isFetchingAppInfo: false
  }

  constructor(props) {
    super(props)

    this.imgRef = null
  }

  setImgRef = img => {
    this.imgRef = img
    this.setState({ imgRef: this.imgRef })
  }

  componentDidMount() {
    if (isMobileApp()) {
      this.checkAppAvailability()
    }
  }

  async checkAppAvailability() {
    const slug = AppLinker.getSlug(this.props)
    const appInfo = NATIVE_APP_INFOS[slug]
    if (appInfo) {
      const nativeAppIsAvailable = Boolean(await memoizedCheckApp(appInfo))
      this.setState({ nativeAppIsAvailable })
    }
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

  static getOnClickHref(props, nativeAppIsAvailable, context, imgRef) {
    const { app, client, nativePath } = props
    const slug = AppLinker.getSlug(props)
    let href = props.href
    let onClick = null
    const usingNativeApp = isMobileApp()
    const appInfo = NATIVE_APP_INFOS[slug]

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

    if (usingNativeApp) {
      if (nativeAppIsAvailable) {
        // If we are on the native app and the other native app is available,
        // we open the native app
        onClick = AppLinker.openNativeFromNative.bind(this, props)
        href = '#'
      } else {
        // If we are on a native app, but the other native app is not available
        // we open the web link, this is done by the href prop. We still
        // have to call the prop callback
        onClick = AppLinker.openWeb.bind(this, props)
      }
    } else if (isMobile() && appInfo) {
      // If we are on the "mobile web version", we try to open the native app
      // if it exists with an universal links. If it fails, we redirect to the web
      // version of the requested app
      // Only on iOS ATM
      if (isAndroid()) {
        onClick = AppLinker.openNativeFromWeb.bind(this, props)
      } else {
        // Since generateUniversalLink can rise an error, let's catch it to not crash
        // all the page.
        try {
          href = generateUniversalLink({ slug, nativePath, fallbackUrl: href })
        } catch (err) {
          console.error(err)
          href = '#'
        }
      }
    }

    return {
      href,
      onClick
    }
  }
  static openNativeFromWeb(props, ev) {
    const { href, nativePath, onAppSwitch } = props
    const slug = AppLinker.getSlug(props)
    const appInfo = NATIVE_APP_INFOS[slug]

    if (ev) {
      ev.preventDefault()
    }

    AppLinker.onAppSwitch(onAppSwitch)
    openDeeplinkOrRedirect(
      appInfo.uri + (nativePath === '/' ? '' : nativePath),
      function() {
        window.location.href = href
      }
    )
  }

  static onAppSwitch(onAppSwitchFn) {
    if (typeof onAppSwitchFn === 'function') {
      onAppSwitchFn()
    }
  }

  static openNativeFromNative(props, ev) {
    const { onAppSwitch } = props
    const slug = AppLinker.getSlug(props)
    if (ev) {
      ev.preventDefault()
    }
    const appInfo = NATIVE_APP_INFOS[slug]
    AppLinker.onAppSwitch(onAppSwitch)
    startApp(appInfo).catch(err => {
      console.error('AppLinker: Could not open native app', err)
    })
  }

  static openWeb(props) {
    AppLinker.onAppSwitch(props.onAppSwitch)
  }

  render() {
    const { children } = this.props
    AppLinker.deprecateSlug(this.props)
    const slug = AppLinker.getSlug(this.props)
    const { nativeAppIsAvailable } = this.state
    const appInfo = NATIVE_APP_INFOS[slug]
    const { href, onClick } = AppLinker.getOnClickHref(
      this.props,
      nativeAppIsAvailable,
      this.context,
      this.state.imgRef
    )

    return children({
      ...appInfo,
      iconRef: this.setImgRef,
      onClick: onClick,
      href
    })
  }
}

AppLinker.defaultProps = {
  nativePath: '/'
}
AppLinker.propTypes = {
  /** DEPRECATED: please use app.slug prop */
  slug: PropTypes.string,
  /*
  Full web url : Used by default on desktop browser
  Used as a fallback_uri on mobile web
  */
  href: PropTypes.string,
  /*
    Path used for "native link"
  */
  nativePath: PropTypes.string,
  onAppSwitch: PropTypes.func,
  app: PropTypes.shape({
    // Slug of the app : drive / banks ...
    slug: PropTypes.string.isRequired,
    // Information about mobile native app
    mobile: PropTypes.shape({
      schema: PropTypes.string,
      id_playstore: PropTypes.string,
      id_appstore: PropTypes.string
    })
  }).isRequired
}

export default withClient(AppLinker)
export {
  NATIVE_APP_INFOS,
  getUniversalLinkDomain,
  generateWebLink,
  generateUniversalLink
}
