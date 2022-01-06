import React from 'react'
import PropTypes from 'prop-types'
import {
  checkApp,
  startApp,
  isMobileApp,
  isMobile,
  openDeeplinkOrRedirect,
  isAndroid,
  isFlagshipApp
} from 'cozy-device-helper'

import {
  generateUniversalLink,
  generateWebLink,
  getUniversalLinkDomain
} from './native'
import { NATIVE_APP_INFOS } from './native.config'
import expiringMemoize from './expiringMemoize'
import { WebviewContext, WebviewApps } from 'cozy-intent'

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
  }

  componentDidMount() {
    if (isMobileApp()) {
      this.checkAppAvailability()
    }
  }

  async checkAppAvailability() {
    const { slug } = this.props
    const appInfo = NATIVE_APP_INFOS[slug]
    if (appInfo) {
      const nativeAppIsAvailable = Boolean(await memoizedCheckApp(appInfo))
      this.setState({ nativeAppIsAvailable })
    }
  }

  getOnClickHref(props, nativeAppIsAvailable) {
    const { slug, nativePath } = props
    let href = props.href
    let onClick = null
    const usingNativeApp = isMobileApp()
    const appInfo = NATIVE_APP_INFOS[slug]

    if (isFlagshipApp()) {
      return {
        onClick: () => this.context.call('openWebview', href),
        href: '#'
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
    const { href, slug, nativePath, onAppSwitch } = props
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
    const { slug, onAppSwitch } = props
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
    const { children, slug } = this.props
    const { nativeAppIsAvailable } = this.state
    const appInfo = NATIVE_APP_INFOS[slug]
    const { href, onClick } = this.getOnClickHref(
      this.props,
      nativeAppIsAvailable
    )
    return children({ ...appInfo, onClick: onClick, href })
  }
}

AppLinker.defaultProps = {
  nativePath: '/'
}
AppLinker.propTypes = {
  // Slug of the app : drive / banks ...
  slug: PropTypes.string.isRequired,
  /*
  Full web url : Used by default on desktop browser
  Used as a fallback_uri on mobile web
  */
  href: PropTypes.string.isRequired,
  /*
    Path used for "native link"
  */
  nativePath: PropTypes.string,
  onAppSwitch: PropTypes.func
}

export default AppLinker
export {
  NATIVE_APP_INFOS,
  getUniversalLinkDomain,
  generateWebLink,
  generateUniversalLink
}
