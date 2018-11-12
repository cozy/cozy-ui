/* eslint-env jest */
import { preload, getPreloaded } from '../Preloader'

describe('Preloader', () => {
  const app = {
    name: 'TestApp',
    links: {
      icon: '/apps/test/icon'
    }
  }

  const domain = 'cozy.tools'

  const registryApp = {
    slug: 'test',
    latest_version: {
      version: '1.2.3'
    }
  }

  let successImgMock
  let erroredImgMock

  beforeEach(() => {
    jest.resetModules()

    successImgMock = {}
    Object.defineProperty(successImgMock, 'onload', {
      set: function(fn) {
        fn()
      }
    })

    erroredImgMock = {}
    Object.defineProperty(erroredImgMock, 'onerror', {
      set: function(fn) {
        fn()
      }
    })

    document.createElement = jest.fn().mockReturnValue(successImgMock)
    console.error = jest.fn()
  })

  describe('preload', () => {
    it('returns the expected url', async () => {
      await expect(preload(app, domain)).resolves.toEqual(
        'https://cozy.tools/apps/test/icon'
      )
    })

    it('returns the expected unesecure url', async () => {
      await expect(preload(app, domain, false)).resolves.toEqual(
        'http://cozy.tools/apps/test/icon'
      )
    })

    it('fetch installed app icon', async () => {
      await expect(preload(app, domain)).resolves.toEqual(
        'https://cozy.tools/apps/test/icon'
      )
    })

    it('fetch registry app icon', async () => {
      await expect(preload(registryApp, domain)).resolves.toEqual(
        'https://cozy.tools/registry/test/1.2.3/icon'
      )
    })

    it('throw error on loading fail', async () => {
      document.createElement = jest.fn().mockReturnValue(erroredImgMock)
      await expect(preload(app, domain)).rejects.toEqual(
        new Error('Error while preloading https://cozy.tools/apps/test/icon')
      )
      expect(console.error).toHaveBeenCalledTimes(1)
      expect(console.error).toHaveBeenCalledWith(
        'Error while preloading https://cozy.tools/apps/test/icon'
      )
    })

    it('throw error on missing domain', async () => {
      await expect(preload(app, null)).rejects.toEqual(
        new Error('Cannot fetch icon: missing domain')
      )
    })

    it('returns already loaded icon URL', async () => {
      await preload(app, domain)
      expect(getPreloaded(app, domain)).toBe(
        'https://cozy.tools/apps/test/icon'
      )
    })

    it('returns null for not already loaded icon URL', () => {
      const getPreloaded = require('../Preloader').getPreloaded
      expect(getPreloaded(app, domain)).toBeNull()
    })
  })
})
