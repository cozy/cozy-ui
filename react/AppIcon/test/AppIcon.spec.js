'use strict'
/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import AppIcon from '../'

describe('AppIcon component', () => {
  const app = {}
  const domain = 'cozy.tools'
  const secure = true

  let successFetchIcon
  let failureFetchIcon

  beforeEach(() => {
    jest.resetModules()

    successFetchIcon = jest
      .fn()
      .mockResolvedValue('http://cozy.tools/apps/test/icon')

    failureFetchIcon = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('Mocked error')))

    console.error = jest.fn()
  })

  it(`renders as loading`, () => {
    const wrapper = shallow(
      <AppIcon
        app={app}
        domain={domain}
        fetchIcon={successFetchIcon}
        secure={secure}
      />
    )

    const component = wrapper.getElement()
    expect(component).toMatchSnapshot()
    expect(successFetchIcon).toHaveBeenCalledWith(app, domain, secure)
    expect(console.error).toHaveBeenCalledTimes(0)
  })

  it(`renders correctly`, async done => {
    const wrapper = shallow(
      <AppIcon
        app={app}
        domain={domain}
        fetchIcon={successFetchIcon}
        onReady={() => {
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          expect(successFetchIcon).toHaveBeenCalledWith(app, domain, secure)
          expect(console.error).toHaveBeenCalledTimes(0)
          done()
        }}
        secure={secure}
      />
    )
  })

  it(`renders default when fetch error occurs`, async done => {
    const wrapper = shallow(
      <AppIcon
        app={app}
        domain={domain}
        fetchIcon={failureFetchIcon}
        onReady={() => {
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          expect(failureFetchIcon).toHaveBeenCalledWith(app, domain, secure)
          expect(console.error).toHaveBeenCalledTimes(0)
          done()
        }}
        secure={secure}
      />
    )
  })

  it(`uses Preloader.preload when no fetchIcon method is provided`, async done => {
    jest.mock('../Preloader')
    const AppIcon = require('../').default
    const Preloader = require('../Preloader')
    const wrapper = shallow(
      <AppIcon
        app={app}
        domain={domain}
        onReady={() => {
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          expect(Preloader.preload).toHaveBeenCalledWith(app, domain, secure)
          expect(console.error).toHaveBeenCalledTimes(0)
          done()
        }}
        secure={secure}
      />
    )
  })
})
