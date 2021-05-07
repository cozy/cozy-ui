'use strict'
/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import { AppIcon } from '../'

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
