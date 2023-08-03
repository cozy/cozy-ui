import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { CozyProvider, createMockClient } from 'cozy-client'
import { isFlagshipApp } from 'cozy-device-helper'
import flag from 'cozy-flags'

import { I18n } from '../I18n'
import Paywall from './Paywall'
import { BreakpointsProvider } from '../hooks/useBreakpoints'
import useInstance from '../helpers/useInstance'

jest.mock('../helpers/useInstance')
jest.mock('cozy-device-helper', () => ({
  ...jest.requireActual('cozy-device-helper'),
  isFlagshipApp: jest.fn()
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
    isIapEnabled = null
  } = {}) => {
    useInstance.mockReturnValue({
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
      state: 'loaded'
    })

    isFlagshipApp.mockReturnValue(isFlagshipAppReturnValue)
    flag.mockReturnValue(isIapEnabled)

    const mockClient = createMockClient({})
    return render(
      <CozyProvider client={mockClient}>
        <BreakpointsProvider>
          <I18n lang="en" dictRequire={() => {}}>
            <Paywall
              variant="onlyOffice"
              onClose={onCloseSpy}
              isPublic={isPublic}
            />
          </I18n>
        </BreakpointsProvider>
      </CozyProvider>
    )
  }

  it('should display the default case when nothing is defined', () => {
    setup()

    expect(screen.getByText('Information')).toBeInTheDocument()

    const actionButton = screen.getByRole('button', {
      name: 'I understand'
    })
    fireEvent.click(actionButton)
    expect(onCloseSpy).toBeCalledTimes(1)
  })

  it('should display the default case when there is a premium link but it is not enabled', () => {
    setup({
      hasUuid: true
    })

    expect(screen.getByText('Information')).toBeInTheDocument()

    const actionButton = screen.getByRole('button', {
      name: 'I understand'
    })
    fireEvent.click(actionButton)
    expect(onCloseSpy).toBeCalledTimes(1)
  })

  it('should display the premium case when the premium link is enabled and available', () => {
    setup({
      hasUuid: true,
      enablePremiumLinks: true
    })

    expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

    const actionButton = screen.getByRole('button', {
      name: 'Check our plans'
    })
    fireEvent.click(actionButton)
    expect(openSpy).toBeCalledWith(
      'http://mycozy.cloud/cozy/instances/123/premium',
      '_self'
    )
  })

  it('should display the public case when the premium link is available in public context (eg. sharing view)', () => {
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

    const actionButton = screen.getByRole('button', {
      name: 'I understand'
    })
    fireEvent.click(actionButton)
    expect(onCloseSpy).toBeCalledTimes(1)
  })

  it('should display the default case when the premium link is not available in public context', () => {
    setup({
      hasUuid: true,
      enablePremiumLinks: false,
      isPublic: true
    })

    expect(screen.getByText('Information')).toBeInTheDocument()

    const actionButton = screen.getByRole('button', {
      name: 'I understand'
    })
    fireEvent.click(actionButton)
    expect(onCloseSpy).toBeCalledTimes(1)
  })

  describe('on flagship', () => {
    it('should display the premium case without an action button to access the premium link', () => {
      setup({
        hasUuid: true,
        enablePremiumLinks: true,
        isFlagshipApp: true
      })

      expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

      const actionButton = screen.getByRole('button', {
        name: 'I understand'
      })
      fireEvent.click(actionButton)
      expect(onCloseSpy).toBeCalledTimes(1)
    })

    it('should display the premium case without an action button to access the premium link when flag flagship.iap.enabled is false', () => {
      setup({
        hasUuid: true,
        enablePremiumLinks: true,
        isFlagshipApp: true,
        isIapEnabled: false
      })

      expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

      const actionButton = screen.getByRole('button', {
        name: 'I understand'
      })
      fireEvent.click(actionButton)
      expect(onCloseSpy).toBeCalledTimes(1)
    })

    it('should display the premium case with an action button to access the premium link when flag flagship.iap.enabled is true', () => {
      setup({
        hasUuid: true,
        enablePremiumLinks: true,
        isFlagshipApp: true,
        isIapEnabled: true
      })

      expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

      const actionButton = screen.getByRole('button', {
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
