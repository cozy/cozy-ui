import usePeriodicRender from './usePeriodicRender'
import { renderHook } from '@testing-library/react-hooks'

async function wait(duration) {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve()
    }, duration)
  })
}

describe('usePeriodicRender', () => {
  describe('with an interval as argument', () => {
    it('should trigger a rerender after some time', async () => {
      const before = Date.now()
      const { waitForNextUpdate } = renderHook(() => usePeriodicRender(100))
      await waitForNextUpdate()
      const after = Date.now()
      expect(after - before).toBeGreaterThan(95)
      expect(after - before).toBeLessThan(250)
    })

    it('should trigger a rerender again after waiting even more', async () => {
      const { waitForNextUpdate } = renderHook(() => usePeriodicRender(100))
      await waitForNextUpdate()
      const before = Date.now()
      await waitForNextUpdate()
      const after = Date.now()
      expect(after - before).toBeGreaterThan(95)
      expect(after - before).toBeLessThan(250)
    })

    it('should return a last execution date after triggering a rerender', async () => {
      const before = Date.now()
      const { result, waitForNextUpdate } = renderHook(() =>
        usePeriodicRender(100)
      )
      await waitForNextUpdate()
      expect(result.current).toBeInstanceOf(Date)
      const after = result.current.getTime()
      expect(after - before).toBeGreaterThan(95)
      expect(after - before).toBeLessThan(250)
    })

    describe('when changing the duration', () => {
      it('should change the interval of rerender', async () => {
        const { waitForNextUpdate, rerender } = renderHook(
          duration => usePeriodicRender(duration),
          { initialProps: 20 }
        )
        await waitForNextUpdate()
        const before = Date.now()
        await rerender(250)
        await waitForNextUpdate()
        const after = Date.now()
        expect(after - before).toBeGreaterThan(245)
      })
    })
  })

  describe('with a falsy value as argument', () => {
    it('should not trigger a rerender', async () => {
      const { result } = renderHook(() => usePeriodicRender(false))
      const prev = result.current
      wait(500)
      expect(result.current).toEqual(prev)
    })
  })
})
