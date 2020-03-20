import useBrowserOffline from './useBrowserOffline'
import { renderHook, act } from '@testing-library/react-hooks'

const triggerEvent = (element, eventType) => {
  const event = new Event(eventType)
  element.dispatchEvent(event)
}

const previousNavigator = window.navigator
function resetStatus() {
  delete window.navigator
  window.navigator = previousNavigator
}

function setOffline() {
  delete window.navigator
  window.navigator = { onLine: false }
}
function setOnline() {
  delete window.navigator
  window.navigator = { onLine: true }
}
function setNoIndicator() {
  delete window.navigator
  window.navigator = { onLine: undefined }
}

function triggerOffline() {
  setOffline()
  act(() => triggerEvent(window, 'offline'))
}
function triggerOnline() {
  setOnline()
  act(() => triggerEvent(window, 'online'))
}

describe('useBrowserOffline', () => {
  afterEach(() => {
    resetStatus()
  })

  describe('when the browser is offline', () => {
    beforeEach(() => setOffline())

    it('returns true', () => {
      const { result } = renderHook(() => useBrowserOffline())
      expect(result.current).toBeTruthy()
    })

    describe('when the browser goes online', () => {
      it('returns false', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useBrowserOffline()
        )
        const update = waitForNextUpdate()
        triggerOnline()
        await update
        expect(result.current).toBeFalsy()
      })
    })
  })

  describe('when the browser is online', () => {
    beforeEach(() => setOnline())

    it('returns false', () => {
      const { result } = renderHook(() => useBrowserOffline())
      expect(result.current).toBeFalsy()
    })

    describe('when the browser goes offline', () => {
      it('returns true', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useBrowserOffline()
        )
        const update = waitForNextUpdate()
        triggerOffline()
        await update
        expect(result.current).toBeTruthy()
      })
    })
  })

  describe('when there is no browser online/offline indicator', () => {
    beforeEach(() => setNoIndicator())

    it('returns false', () => {
      const { result } = renderHook(() => useBrowserOffline())
      expect(result.current).toBeFalsy()
    })
  })
})
