import useConfirmExit from './useConfirmExit'
import { renderHook } from '@testing-library/react-hooks'

const triggerBeforeUnload = () => {
  const event = new Event('beforeunload')
  return window.dispatchEvent(event)
}

describe('useConfirmExit', () => {
  it('should subscribe to window.onbeforeunload at mount', async () => {
    const cb = jest.fn()
    renderHook(() => useConfirmExit('message', cb))

    triggerBeforeUnload()
    expect(cb).toHaveBeenCalledTimes(1)
  })

  it('should unsubscribe to window.onbeforeunload at dismount', async () => {
    const cb = jest.fn()
    const { unmount } = renderHook(() => useConfirmExit('message', cb))
    unmount()

    triggerBeforeUnload()
    expect(cb).toHaveBeenCalledTimes(0)
  })

  it('should allow a null message', async () => {
    const cb = jest.fn()
    renderHook(() => useConfirmExit(null, cb))

    triggerBeforeUnload()
    expect(cb).toHaveBeenCalledTimes(1)
  })

  it('should allow a null callback', async () => {
    renderHook(() => useConfirmExit('message'))

    triggerBeforeUnload()
  })
})
