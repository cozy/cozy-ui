'use strict'
/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import { AppIcon } from '..'

describe('AppIcon component', () => {
  const app = {}
  const domain = 'cozy.tools'
  const secure = true

  const mockClient = {
    getStackClient: () => ({ uri: `https://${domain}` })
  }

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
      <AppIcon app={app} fetchIcon={successFetchIcon} client={mockClient} />
    )

    const component = wrapper.getElement()
    expect(component).toMatchSnapshot()
    expect(successFetchIcon).toHaveBeenCalledWith(app, domain, secure)
    expect(console.error).not.toHaveBeenCalled()
  })

  it(`should provide appData to getIconUrl in order to get icon simply, when oauth not needed`, async done => {
    const app = {
      name: 'app name',
      slug: 'slug',
      links: {
        icon: 'icon url'
      },
      latest_version: {
        version: 'version'
      }
    }
    const getIconURLMock = jest
      .fn()
      .mockImplementation(() => `https://${domain}`)
    const mockClient = {
      getStackClient: () => ({
        uri: `https://${domain}`,
        getIconURL: getIconURLMock
      })
    }
    const wrapper = shallow(
      <AppIcon
        app={app}
        client={mockClient}
        onReady={() => {
          wrapper.update()
          expect(getIconURLMock).toHaveBeenNthCalledWith(1, {
            appData: app,
            priority: 'stack',
            slug: 'slug',
            type: 'app'
          })
          done()
        }}
      />
    )
  })

  it(`renders correctly`, async done => {
    const wrapper = shallow(
      <AppIcon
        app={app}
        fetchIcon={successFetchIcon}
        client={mockClient}
        onReady={() => {
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          expect(successFetchIcon).toHaveBeenCalledWith(app, domain, secure)
          expect(console.error).not.toHaveBeenCalled()
          done()
        }}
      />
    )
  })

  it(`renders default when fetch error occurs`, async done => {
    const wrapper = shallow(
      <AppIcon
        app={app}
        fetchIcon={failureFetchIcon}
        client={mockClient}
        onReady={() => {
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          expect(failureFetchIcon).toHaveBeenCalledWith(app, domain, secure)
          expect(console.error).not.toHaveBeenCalled()
          done()
        }}
      />
    )
  })

  it(`renders provided fallbackIcon when fetch error occurs`, async done => {
    const wrapper = shallow(
      <AppIcon
        app={app}
        fetchIcon={failureFetchIcon}
        client={mockClient}
        onReady={() => {
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          expect(failureFetchIcon).toHaveBeenCalledWith(app, domain, secure)
          expect(console.error).not.toHaveBeenCalled()
          done()
        }}
        fallbackIcon="warning"
      />
    )
  })

  it(`renders provided fallbackIcon on img error`, async done => {
    const wrapper = shallow(
      <AppIcon
        fetchIcon={() => 'notagoodurl'}
        onReady={() => {
          wrapper.simulate('error')
          wrapper.update()
          const component = wrapper.getElement()
          expect(component).toMatchSnapshot()
          done()
        }}
        fallbackIcon="warning"
      />
    )
  })
})
