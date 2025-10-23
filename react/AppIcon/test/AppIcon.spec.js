'use strict'
/* eslint-env jest */

import { render, screen } from '@testing-library/react'
import React from 'react'

import { AppIcon } from '..'
import Icon from '../../Icon'

jest.mock('../../Icon', () => ({
  ...jest.requireActual('../../Icon'),
  __esModule: true,
  default: jest.fn(() => <div data-testid="icon-component"></div>)
}))

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
    jest.clearAllMocks()

    successFetchIcon = jest
      .fn()
      .mockResolvedValue('http://cozy.tools/apps/test/icon')

    failureFetchIcon = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('Mocked error')))

    console.error = jest.fn()
  })

  it(`renders as loading`, () => {
    render(
      <AppIcon app={app} fetchIcon={successFetchIcon} client={mockClient} />
    )

    const loadingElement = screen.getByRole('progressbar')

    expect(loadingElement).toBeInTheDocument()
    expect(successFetchIcon).toHaveBeenCalledWith(app, domain, secure)
    expect(console.error).not.toHaveBeenCalled()
  })

  it(`should provide appData to getIconUrl in order to get icon simply, when oauth not needed`, async () => {
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

    render(<AppIcon app={app} client={mockClient} />)

    expect(getIconURLMock).toHaveBeenNthCalledWith(1, {
      appData: app,
      priority: 'stack',
      slug: 'slug',
      type: 'app'
    })
  })

  it(`renders correctly`, async () => {
    render(
      <AppIcon app={app} fetchIcon={successFetchIcon} client={mockClient} />
    )

    const iconElement = await screen.findByRole('img')
    expect(iconElement).toBeInTheDocument()

    expect(successFetchIcon).toHaveBeenCalledWith(app, domain, secure)
    expect(console.error).not.toHaveBeenCalled()
  })

  it(`renders default when fetch error occurs`, async () => {
    render(
      <AppIcon app={app} fetchIcon={failureFetchIcon} client={mockClient} />
    )

    const iconFallbackElement = await screen.findByTestId('icon-component')
    expect(iconFallbackElement).toBeInTheDocument()

    expect(failureFetchIcon).toHaveBeenCalledWith(app, domain, secure)
    expect(console.error).not.toHaveBeenCalled()

    // Check that the Icon component has been called with a function (CubeIcon function is the default icon)
    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        icon: expect.any(Function)
      }),
      {}
    )
  })

  it(`renders provided fallbackIcon when fetch error occurs`, async () => {
    render(
      <AppIcon
        app={app}
        fetchIcon={failureFetchIcon}
        client={mockClient}
        fallbackIcon="warning"
      />
    )

    const iconFallbackElement = await screen.findByTestId('icon-component')
    expect(iconFallbackElement).toBeInTheDocument()

    expect(failureFetchIcon).toHaveBeenCalledWith(app, domain, secure)
    expect(console.error).not.toHaveBeenCalled()

    // Check that the Icon component has been called with "warning"
    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        icon: 'warning'
      }),
      {}
    )
  })
})
