import memoize from 'lodash/memoize'
import {
  readCozyDataFromDOM,
  readApplicationDataset,
  readCozyData
} from './appDataset'

describe('appdataset', () => {
  beforeEach(() => {
    readCozyDataFromDOM.cache = new memoize.Cache()
    readApplicationDataset.cache = new memoize.Cache()
    readCozyData.cache = new memoize.Cache()
  })

  describe('data-cozy', () => {
    it('should work for true value', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy=\'{"isLoggedIn": true}\'></div>'
      expect(readCozyDataFromDOM('isLoggedIn')).toBe(true)
    })

    it('should work for false value', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy=\'{"isLoggedIn": false}\'></div>'
      expect(readCozyDataFromDOM('isLoggedIn')).toBe(false)
    })

    it('should work for true value inside a string', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy=\'{"tracking": "true"}\'></div>'
      expect(readCozyDataFromDOM('tracking')).toBe(true)
    })

    it('should work for false value inside a string', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy=\'{"tracking": "false"}\'></div>'
      expect(readCozyDataFromDOM('tracking')).toBe(false)
    })

    it('should work for string values', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy=\'{"token": "abcd456"}\'></div>'
      expect(readCozyDataFromDOM('token')).toBe('abcd456')
    })

    it('should work for object values', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy=\'{"app": {"editor":"Cozy"}}\'></div>'
      expect(readCozyDataFromDOM('app')).toMatchObject({ editor: 'Cozy' })
    })
  })

  describe('data-<attr>', () => {
    it('should work for empty boolean attributes', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy-tracking></div>'
      expect(readCozyDataFromDOM('tracking')).toBe(true)
    })

    it('should work for filled boolean attributes', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy-tracking="true"></div>'
      expect(readCozyDataFromDOM('tracking')).toBe(true)
    })

    it('should work for filled boolean attributes', () => {
      document.body.innerHTML =
        '<div role="application" data-cozy-tracking="false"></div>'
      expect(readCozyDataFromDOM('tracking')).toBe(false)
    })
  })
})
