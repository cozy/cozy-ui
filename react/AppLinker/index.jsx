/* global __TARGET__ */

import React from 'react'
import PropTypes from 'prop-types'
import {
  checkApp,
  startApp,
  isMobileApp,
  isMobile,
  openDeeplinkOrRedirect,
  isAndroid
} from 'cozy-device-helper'
import { generateUniversalLink, getUniversalLinkDomain } from './native'

import { NATIVE_APP_INFOS } from 'cozy-ui/transpiled/react/AppLinker/native.config'
import expiringMemoize from './expiringMemoize'

const expirationDelay = 10 * 1000
const memoizedCheckApp = expiringMemoize(
  checkApp,
  expirationDelay,
  appInfo => appInfo.appId
)

export class AppLinker extends React.Component {
  state = {
    nativeAppIsAvailable: null,
    isFetchingAppInfo: false
  }

  constructor(props) {
    super(props)
    this.openWeb = this.openWeb.bind(this)
    this.openNativeFromNative = this.openNativeFromNative.bind(this)
    this.openNativeFromWeb = this.openNativeFromWeb.bind(this)
  }

  componentDidMount() {
    if (__TARGET__ === 'mobile') {
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

  onAppSwitch() {
    const { onAppSwitch } = this.props
    if (typeof onAppSwitch === 'function') {
      onAppSwitch()
    }
  }

  openNativeFromNative(ev) {
    if (ev) {
      ev.preventDefault()
    }
    const { slug } = this.props
    const appInfo = NATIVE_APP_INFOS[slug]
    this.onAppSwitch()
    startApp(appInfo).catch(err => {
      console.error('AppLinker: Could not open native app', err)
    })
  }

  //Will be removed soon when Android universallink will be tested
  openNativeFromWeb(ev) {
    if (ev) {
      ev.preventDefault()
    }

    const { href, slug, nativePath } = this.props
    const appInfo = NATIVE_APP_INFOS[slug]

    this.onAppSwitch()

    openDeeplinkOrRedirect(
      appInfo.uri + (nativePath === '/' ? '' : nativePath),
      function() {
        window.location.href = href
      }
    )
  }

  openWeb() {
    this.onAppSwitch()
  }

  render() {
    const { children, slug, nativePath } = this.props
    const { nativeAppIsAvailable } = this.state

    const appInfo = NATIVE_APP_INFOS[slug]
    let href = this.props.href
    let onClick = null
    const usingNativeApp = isMobileApp()

    if (usingNativeApp) {
      if (nativeAppIsAvailable) {
        // If we are on the native app and the other native app is available,
        // we open the native app
        onClick = this.openNativeFromNative
        href = '#'
      } else {
        // If we are on a native app, but the other native app is not available
        // we open the web link, this is done by the href prop. We still
        // have to call the prop callback
        onClick = this.openWeb
      }
    } else if (isMobile() && appInfo) {
      // If we are on the "mobile web version", we try to open the native app
      // if it exists with an universal links. If it fails, we redirect to the web
      // version of the requested app
      // Only on iOS ATM
      if (isAndroid()) {
        onClick = this.openNativeFromWeb
      } else {
        href = generateUniversalLink({ slug, nativePath, fallbackUrl: href })
      }
    }

    return children({ ...appInfo, onClick: onClick, href })
  }
}

AppLinker.defaultProps = {
  nativePath: '/'
}
AppLinker.propTypes = {
  //Slug of the app : drive / banks ...
  slug: PropTypes.string.isRequired,
  /*
  Full web url : Used by default on desktop browser
  Used as a fallback_uri on mobile web 
  */
  href: PropTypes.string.isRequired,
  /*
    Path used for "native link"
  */
  nativePath: PropTypes.string
}

export default AppLinker
export { NATIVE_APP_INFOS, getUniversalLinkDomain, generateUniversalLink }
