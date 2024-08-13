import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { createMockClient, useInstanceInfo } from 'cozy-client'
import { isFlagshipApp } from 'cozy-device-helper'
import flag from 'cozy-flags'
import { useWebviewIntent } from 'cozy-intent'

import DemoProvider from '../providers/DemoProvider'
import Paywall from './Paywall'

jest.mock('cozy-device-helper', () => ({
  ...jest.requireActual('cozy-device-helper'),
  isFlagshipApp: jest.fn()
}))
jest.mock('cozy-client', () => ({
  ...jest.requireActual('cozy-client'),
  useInstanceInfo: jest.fn()
}))
jest.mock('cozy-intent', () => ({
  ...jest.requireActual('cozy-intent'),
  useWebviewIntent: jest.fn()
}))
jest.mock('cozy-flags')

describe('Paywall', () => {
  const onCloseSpy = jest.fn()
  const openSpy = jest.spyOn(window, 'open').mockImplementation()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const setup = ({
    isPublic,
    enablePremiumLinks = false,
    hasUuid = false,
    isFlagshipApp: isFlagshipAppReturnValue = false,
    isIapEnabled = null,
    isIapAvailable = false
  } = {}) => {
    useInstanceInfo.mockReturnValue({
      context: {
        data: {
          attributes: {
            enable_premium_links: enablePremiumLinks,
            manager_url: 'http://mycozy.cloud'
          }
        }
      },
      instance: {
        data: {
          attributes: { uuid: hasUuid ? '123' : null }
        }
      },
      isLoaded: true
    })

    isFlagshipApp.mockReturnValue(isFlagshipAppReturnValue)
    flag.mockReturnValue(isIapEnabled)
    const mockCall = jest.fn().mockResolvedValue(isIapAvailable)
    useWebviewIntent.mockReturnValue({
      call: mockCall
    })

    const mockClient = createMockClient({})
    return render(
      <DemoProvider client={mockClient}>
        <Paywall
          variant="onlyOffice"
          onClose={onCloseSpy}
          isPublic={isPublic}
        />
      </DemoProvider>
    )
  }

  it('should display the default case when nothing is defined', async () => {
    setup()

    expect(screen.getByText('Information')).toBeInTheDocument()

    const actionButton = await screen.findByRole('button', {
      name: 'I understand'
    })
    fireEvent.click(actionButton)
    expect(onCloseSpy).toBeCalledTimes(1)
  })

  it('should display the default case when there is a premium link but it is not enabled', async () => {
    setup({
      hasUuid: true
    })

    expect(screen.getByText('Information')).toBeInTheDocument()

    const actionButton = await screen.findByRole('button', {
      name: 'I understand'
    })
    fireEvent.click(actionButton)
    expect(onCloseSpy).toBeCalledTimes(1)
  })

  it('should display the premium case when the premium link is enabled and available', async () => {
    setup({
      hasUuid: true,
      enablePremiumLinks: true
    })

    expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

    const actionButton = await screen.findByRole('button', {
      name: 'Check our plans'
    })
    fireEvent.click(actionButton)
    expect(openSpy).toBeCalledWith(
      'http://mycozy.cloud/cozy/instances/123/premium',
      '_self'
    )
  })

  it('should display the public case when the premium link is available in public context (eg. sharing view)', async () => {
    setup({
      hasUuid: true,
      enablePremiumLinks: true,
      isPublic: true
    })

    expect(
      screen.getByText(
        'You cannot edit this file online. Please ask the document owner to update their Cozy subscription.'
      )
    ).toBeInTheDocument()

    const actionButton = await screen.findByRole('button', {
      name: 'I understand'
    })
    fireEvent.click(actionButton)
    expect(onCloseSpy).toBeCalledTimes(1)
  })

  it('should display the default case when the premium link is not available in public context', async () => {
    setup({
      hasUuid: true,
      enablePremiumLinks: false,
      isPublic: true
    })

    expect(screen.getByText('Information')).toBeInTheDocument()

    const actionButton = await screen.findByRole('button', {
      name: 'I understand'
    })
    fireEvent.click(actionButton)
    expect(onCloseSpy).toBeCalledTimes(1)
  })

  describe('on flagship', () => {
    it('should display the premium case without an action button to access the premium link', async () => {
      setup({
        hasUuid: true,
        enablePremiumLinks: true,
        isFlagshipApp: true
      })

      expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

      const actionButton = await screen.findByRole('button', {
        name: 'I understand'
      })
      fireEvent.click(actionButton)
      expect(onCloseSpy).toBeCalledTimes(1)
    })

    it('should display the premium case without an action button to access the premium link when flag flagship.iap.enabled is false', async () => {
      setup({
        hasUuid: true,
        enablePremiumLinks: true,
        isFlagshipApp: true,
        isIapEnabled: false
      })

      expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

      const actionButton = await screen.findByRole('button', {
        name: 'I understand'
      })
      fireEvent.click(actionButton)
      expect(onCloseSpy).toBeCalledTimes(1)
    })

    it('should display the premium case without an action button to access the premium link when flag flagship.iap.enabled is false and iap is unavailable', async () => {
      setup({
        hasUuid: true,
        enablePremiumLinks: true,
        isFlagshipApp: true,
        isIapEnabled: false,
        isIapAvailable: false
      })

      expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

      const actionButton = await screen.findByRole('button', {
        name: 'I understand'
      })

      fireEvent.click(actionButton)
      expect(onCloseSpy).toBeCalledTimes(1)
    })

    it('should display the premium case with an action button to access the premium link when flag flagship.iap.enabled is true and iap is available', async () => {
      setup({
        hasUuid: true,
        enablePremiumLinks: true,
        isFlagshipApp: true,
        isIapEnabled: true,
        isIapAvailable: true
      })

      expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

      const actionButton = await screen.findByRole('button', {
        name: 'Check our plans'
      })
      fireEvent.click(actionButton)
      expect(openSpy).toBeCalledWith(
        'http://mycozy.cloud/cozy/instances/123/premium',
        '_self'
      )
    })
  })
})
