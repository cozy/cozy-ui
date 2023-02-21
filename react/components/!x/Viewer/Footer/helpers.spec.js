import { isMobileApp } from 'cozy-device-helper'

import { shouldBeForwardButton } from './helpers'

jest.mock('cozy-device-helper')

describe('shouldBeForwardButton', () => {
  const setup = ({ isMobileApplication = false, appSlug = '' }) => {
    const mockClient = { appMetadata: { slug: appSlug } }
    isMobileApp.mockReturnValue(isMobileApplication)

    return mockClient
  }

  describe('Mobile native', () => {
    it('should be true if the mobile native application is "Drive"', () => {
      global.navigator.share = null
      const mockClient = setup({
        appSlug: 'drive',
        isMobileApplication: true
      })

      expect(shouldBeForwardButton(mockClient)).toBe(true)
    })
    it('should be true if the mobile native application is not "Drive"', () => {
      global.navigator.share = null
      const mockClient = setup({
        appSlug: 'other',
        isMobileApplication: true
      })

      expect(shouldBeForwardButton(mockClient)).toBe(true)
    })
  })

  describe('Mobile web', () => {
    it('should be false if the mobile web application is "Drive"', () => {
      global.navigator.share = () => {}
      const mockClient = setup({
        appSlug: 'drive',
        isMobileApplication: false
      })

      expect(shouldBeForwardButton(mockClient)).toBe(false)
    })
    it('should be true if the mobile web application is not "Drive"', () => {
      global.navigator.share = () => {}
      const mockClient = setup({
        appSlug: 'other',
        isMobileApplication: false
      })

      expect(shouldBeForwardButton(mockClient)).toBe(true)
    })
  })

  describe('Desktop', () => {
    it('should be false if the desktop application is "Drive"', () => {
      global.navigator.share = null
      const mockClient = setup({
        appSlug: 'drive',
        isMobileApplication: false
      })

      expect(shouldBeForwardButton(mockClient)).toBe(false)
    })
    it('should be false if the desktop application is not "Drive"', () => {
      global.navigator.share = null
      const mockClient = setup({
        appSlug: 'other',
        isMobileApplication: false
      })

      expect(shouldBeForwardButton(mockClient)).toBe(false)
    })
  })
})
