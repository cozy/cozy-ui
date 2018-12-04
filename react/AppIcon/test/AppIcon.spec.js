'use strict'
/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import AppIcon from '../'

describe('AppIcon component', () => {
  const app = { slug: 'test-app' }
  const domain = 'cozy.tools'
  const secure = true
  const iconURL = 'http://cozy.tools/apps/test/icon'

  let PreloaderMock

  beforeEach(() => {
    jest.unmock('../Preloader')
    jest.resetModules()

    jest.mock('../Preloader')
    PreloaderMock = require('../Preloader')
    PreloaderMock.preload.mockReset()
    PreloaderMock.getPreloaded.mockReset()
  })

  it(`renders as loading`, () => {
    const wrapper = shallow(
      <AppIcon app={app} domain={domain} secure={secure} />
    )

    const component = wrapper.getElement()
    expect(component).toMatchSnapshot()
  })

  it(`renders correctly`, async done => {
    PreloaderMock.preload = jest.fn().mockReturnValueOnce(iconURL)
    const AppIcon = require('../').default

    const wrapper = shallow(
      <AppIcon
        app={app}
        domain={domain}
        onReady={() => {
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          done()
        }}
        secure={secure}
      />
    )
  })

  it(`renders default when fetch error occurs`, async done => {
    const failureFetchIcon = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('Mocked error')))

    const wrapper = shallow(
      <AppIcon
        app={app}
        fetchIcon={failureFetchIcon}
        onReady={() => {
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          expect(failureFetchIcon).toHaveBeenCalledWith(app, undefined, secure)
          done()
        }}
        secure={secure}
      />
    )
  })

  it(`uses fetchIcon method when provided`, async done => {
    const AppIcon = require('../').default
    const successFetchIcon = jest.fn().mockResolvedValue(iconURL)

    shallow(
      <AppIcon
        app={app}
        fetchIcon={successFetchIcon}
        onReady={() => {
          expect(successFetchIcon).toHaveBeenCalledWith(app, undefined, secure)
          done()
        }}
        secure={secure}
      />
    )
  })

  it(`renders immediately when icon is alredy preloaded`, () => {
    PreloaderMock.getPreloaded = jest.fn().mockReturnValue(iconURL)

    const AppIcon = require('../').default

    const wrapper = shallow(
      <AppIcon app={app} domain={domain} secure={secure} />
    )
    const component = wrapper.getElement()
    expect(component).toMatchSnapshot()
    expect(PreloaderMock.getPreloaded).toHaveBeenCalledWith(app, domain, secure)
  })

  it(`does not keep previous icon in state`, async done => {
    // Assert that the AppIcon behaves correctly inside lists and update
    // its icon (previous implementation was storing icon in state)
    PreloaderMock.preload = jest.fn().mockResolvedValueOnce(iconURL)

    const AppIcon = require('../').default

    const anotherApp = { slug: 'another' }
    const wrapper = shallow(
      <AppIcon
        app={app}
        onReady={() => {
          PreloaderMock.preload.mockResolvedValueOnce(
            'http://cozy.tools/apps/test/other'
          )
          wrapper.setProps({
            app: anotherApp,
            domain: domain,
            secure: secure
          })
        }}
        onUpdate={() => {
          wrapper.update()

          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          expect(PreloaderMock.getPreloaded).toHaveBeenCalledWith(
            anotherApp,
            domain,
            secure
          )
          done()
        }}
        secure={secure}
      />
    )
  })
})
