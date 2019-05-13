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
import { generateUniversalLink } from 'cozy-ui/transpiled/react/AppLinker/native'
jest.useFakeTimers()

const tMock = x => x

class AppItem extends React.Component {
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
jest.mock('cozy-ui/transpiled/react/AppLinker/native', () => ({
  ...require.requireActual('cozy-ui/transpiled/react/AppLinker/native'),
  generateUniversalLink: jest.fn()
}))

jest.mock('cozy-device-helper', () => ({
  ...require.requireActual('cozy-device-helper'),
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
  let spyConsoleError, openNativeFromNativeSpy, appSwitchMock

  beforeEach(() => {
    global.__TARGET__ = 'browser'
    spyConsoleError = jest.spyOn(console, 'error')
    spyConsoleError.mockImplementation(message => {
      if (message.lastIndexOf('Warning: Failed prop type:') === 0) {
        throw new Error(message)
      }
    })
    openNativeFromNativeSpy = jest.spyOn(AppLinker, 'openNativeFromNative')
    isMobileApp.mockReturnValue(false)
    isMobile.mockReturnValue(false)
    isAndroid.mockReturnValue(false)
    appSwitchMock = jest.fn()
  })

  afterEach(() => {
    spyConsoleError.mockRestore()
    jest.restoreAllMocks()
  })

  it('should render correctly', () => {
    const root = shallow(<AppItem t={tMock} app={app} />).dive()
    expect(root.getElement()).toMatchSnapshot()
  })

  it('should work for native -> native', () => {
    const root = shallow(
      <AppItem t={tMock} app={app} onAppSwitch={appSwitchMock} />
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

  it('should work for web -> native for Android (custom schema) ', () => {
    isMobile.mockReturnValue(true)
    isAndroid.mockResolvedValue(true)
    const root = shallow(
      <AppItem t={tMock} app={app} onAppSwitch={appSwitchMock} />
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
      <AppItem t={tMock} app={app} onAppSwitch={appSwitchMock} />
    ).dive()
    root.find('a').simulate('click', { preventDefault: () => {} })

    expect(generateUniversalLink).toHaveBeenCalled()
  })

  it('should work for native -> web', () => {
    isMobileApp.mockReturnValue(true)
    const root = shallow(
      <AppItem t={tMock} app={app} onAppSwitch={appSwitchMock} />
    ).dive()
    root.find('a').simulate('click')
    expect(appSwitchMock).toHaveBeenCalled()
  })
})
