/**
 * Those tests are here to test previous AppLinker implementation base on
 * `slug` prop.
 * Now that AppLinkers implements `app` prop and uses `app.slug`, the old
 * `slug` prop is deprecated
 * Those tests should be kept until `slug` prop is completely removed
 */

import React from 'react'
import { shallow } from 'enzyme'
import {
  isMobileApp,
  isMobile,
  openDeeplinkOrRedirect,
  startApp,
  isAndroid
} from 'cozy-device-helper'

import AppLinker from './index'
import { generateUniversalLink } from './native'
jest.useFakeTimers()

const tMock = x => x

class DeprecatedAppItem extends React.Component {
  render() {
    const { app, onAppSwitch } = this.props
    return (
      <AppLinker
        onAppSwitch={onAppSwitch}
        slug={app.slug}
        href={'https://fake.link'}
      >
        {({ onClick, href, name }) => (
          <div>
            <a href={href} onClick={onClick}>
              Open {name}
            </a>
          </div>
        )}
      </AppLinker>
    )
  }
}
jest.mock('./native', () => ({
  ...jest.requireActual('./native'),
  generateUniversalLink: jest.fn()
}))

jest.mock('cozy-device-helper', () => ({
  ...jest.requireActual('cozy-device-helper'),
  isMobileApp: jest.fn(),
  isMobile: jest.fn(),
  openDeeplinkOrRedirect: jest.fn(),
  startApp: jest.fn().mockResolvedValue(),
  isAndroid: jest.fn()
}))

const app = {
  slug: 'drive',
  name: 'Drive'
}

describe('app icon', () => {
  let spyConsoleError, spyConsoleWarn, openNativeFromNativeSpy, appSwitchMock

  beforeEach(() => {
    isMobileApp.mockReturnValue(false)
    spyConsoleError = jest.spyOn(console, 'error')
    spyConsoleError.mockImplementation(() => {})
    spyConsoleWarn = jest.spyOn(console, 'warn')
    spyConsoleWarn.mockImplementation(() => {})
    openNativeFromNativeSpy = jest.spyOn(AppLinker, 'openNativeFromNative')
    isMobileApp.mockReturnValue(false)
    isMobile.mockReturnValue(false)
    isAndroid.mockReturnValue(false)
    appSwitchMock = jest.fn()
  })

  afterEach(() => {
    spyConsoleError.mockRestore()
    spyConsoleWarn.mockRestore()
    jest.restoreAllMocks()
  })

  it('should render correctly', () => {
    const root = shallow(<DeprecatedAppItem t={tMock} app={app} />).dive()
    expect(root.getElement()).toMatchSnapshot()
  })

  it('should work for native -> native', () => {
    const root = shallow(
      <DeprecatedAppItem t={tMock} app={app} onAppSwitch={appSwitchMock} />
    ).dive()
    root.find('a').simulate('click')
    expect(appSwitchMock).not.toHaveBeenCalled()
    isMobileApp.mockReturnValue(true)
    root.setState({ nativeAppIsAvailable: true })
    root.find('a').simulate('click')
    expect(openNativeFromNativeSpy).toHaveBeenCalled()
    expect(startApp).toHaveBeenCalledWith({
      appId: 'io.cozy.drive.mobile',
      name: 'Cozy Drive',
      uri: 'cozydrive://'
    })
    expect(appSwitchMock).toHaveBeenCalled()
  })

  it('should work for web -> native for Android (custom schema)', () => {
    isMobile.mockReturnValue(true)
    isAndroid.mockResolvedValue(true)
    const root = shallow(
      <DeprecatedAppItem t={tMock} app={app} onAppSwitch={appSwitchMock} />
    ).dive()
    root.find('a').simulate('click', { preventDefault: () => {} })
    expect(openDeeplinkOrRedirect).toHaveBeenCalledWith(
      'cozydrive://',
      expect.any(Function)
    )
    expect(appSwitchMock).toHaveBeenCalled()
  })

  it('should work for web -> native for iOS (universal link)', () => {
    isMobile.mockReturnValue(true)
    const root = shallow(
      <DeprecatedAppItem t={tMock} app={app} onAppSwitch={appSwitchMock} />
    ).dive()
    root.find('a').simulate('click', { preventDefault: () => {} })

    expect(generateUniversalLink).toHaveBeenCalled()
  })

  it('should work for native -> web', () => {
    isMobileApp.mockReturnValue(true)
    const root = shallow(
      <DeprecatedAppItem t={tMock} app={app} onAppSwitch={appSwitchMock} />
    ).dive()
    root.find('a').simulate('click')
    expect(appSwitchMock).toHaveBeenCalled()
  })

  it('should not crash if no href', () => {
    isMobileApp.mockReturnValue(true)
    const root = shallow(
      <AppLinker onAppSwitch={appSwitchMock} slug={app.slug}>
        {({ onClick, href, name }) => (
          <div>
            <a href={href} onClick={onClick}>
              Open {name}
            </a>
          </div>
        )}
      </AppLinker>
    )
    expect(root.getElement()).toMatchSnapshot()
  })
})
