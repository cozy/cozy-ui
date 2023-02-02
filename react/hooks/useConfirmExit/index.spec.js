import useConfirmExit from '.'
import { renderHook, act } from '@testing-library/react-hooks'
import { isElement } from 'react-dom/test-utils'

function triggerBeforeUnload() {
  const event = new Event('beforeunload')
  return window.dispatchEvent(event)
}

expect.extend({
  toBeReactElement(received) {
    if (received && isElement(received)) {
      return {
        pass: true,
        message: `expected ${typeof received} should not be a React Element`
      }
    } else {
      return {
        pass: false,
        message: `expected ${typeof received} should be a React Element`
      }
    }
  },
  toBeFunctionWithAtLeastArgs(received, number) {
    if (
      received &&
      typeof received === 'function' &&
      typeof received.length === 'number' &&
      received.length >= number
    ) {
      return {
        pass: true,
        message: `expected ${typeof received} should be a function where arguments ${received &&
          received.length} should be at least ${number}`
      }
    } else {
      return {
        pass: true,
        message: `expected ${typeof received} should not be a function or where arguments ${received &&
          received.length} should be less than ${number}`
      }
    }
  }
})

const message = 'message'
const onLeave = jest.fn()
const where = jest.fn()

describe('useConfirmExit', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('return values', () => {
    describe('requestToLeave', () => {
      it('should exist in returned values', async () => {
        const { result } = renderHook(() =>
          useConfirmExit({ message, onLeave })
        )
        expect(result.current).toHaveProperty('requestToLeave')
      })

      it('should be a function', async () => {
        const { result } = renderHook(() =>
          useConfirmExit({ message, onLeave })
        )
        expect(result.current.requestToLeave).toBeInstanceOf(Function)
      })

      it('should be accept an argument', async () => {
        const { result } = renderHook(() =>
          useConfirmExit({ message, onLeave })
        )
        expect(result.current.requestToLeave).toBeFunctionWithAtLeastArgs(1)
      })

      it('should trigger a react component in the modal', async () => {
        const { rerender, result } = renderHook(() =>
          useConfirmExit({ message, onLeave, activate: true })
        )
        expect(result.current.exitConfirmationModal).toBeFalsy()
        const requestToLeave = result.current.requestToLeave
        act(() => requestToLeave(where))
        rerender()
        expect(result.current.exitConfirmationModal).toBeReactElement()
      })

      it('should not call the destination', async () => {
        const { rerender, result } = renderHook(() =>
          useConfirmExit({ message, onLeave, activate: true })
        )
        expect(result.current.exitConfirmationModal).toBeFalsy()
        const requestToLeave = result.current.requestToLeave
        act(() => requestToLeave(where))
        rerender()
        expect(where).not.toHaveBeenCalled()
      })

      it('should not trigger a react component in the modal for activate=false', async () => {
        const { rerender, result } = renderHook(() =>
          useConfirmExit({ message, onLeave, activate: false })
        )
        expect(result.current.exitConfirmationModal).toBeFalsy()
        const requestToLeave = result.current.requestToLeave
        act(() => requestToLeave(where))
        rerender()
        expect(result.current.exitConfirmationModal).toBeFalsy()
      })

      it('should go to the destination for activate=false', async () => {
        const { rerender, result } = renderHook(() =>
          useConfirmExit({ message, onLeave, activate: false })
        )
        expect(result.current.exitConfirmationModal).toBeFalsy()
        const requestToLeave = result.current.requestToLeave
        act(() => requestToLeave(where))
        rerender()
        expect(where).toHaveBeenCalledTimes(1)
      })
    })

    describe('exitConfirmationModal', () => {
      it('should exist in returned values', () => {
        const { result } = renderHook(() =>
          useConfirmExit({ message, onLeave })
        )
        expect(result.current).toHaveProperty('exitConfirmationModal')
      })

      it('should not be displayed be default', async () => {
        const { result } = renderHook(() =>
          useConfirmExit({ message, onLeave })
        )
        expect(result.current.exitConfirmationModal).toBeFalsy()
      })
    })
  })

  describe('onbeforeunload', () => {
    it('should subscribe to window.onbeforeunload at mount', async () => {
      renderHook(() => useConfirmExit({ message, onLeave }))

      triggerBeforeUnload()
      expect(onLeave).toHaveBeenCalledTimes(1)
    })

    it('should unsubscribe to window.onbeforeunload at dismount', async () => {
      const { unmount } = renderHook(() => useConfirmExit({ message, onLeave }))
      unmount()

      triggerBeforeUnload()
      expect(onLeave).toHaveBeenCalledTimes(0)
    })

    it('should allow a null message', async () => {
      renderHook(() => useConfirmExit({ message, onLeave }))

      triggerBeforeUnload()
      expect(onLeave).toHaveBeenCalledTimes(1)
    })

    it('should allow a null callback', async () => {
      renderHook(() => useConfirmExit({ message }))

      triggerBeforeUnload()
    })

    it('should do nothing for activate=false', async () => {
      renderHook(() => useConfirmExit({ message, onLeave, activate: false }))

      triggerBeforeUnload()
      expect(onLeave).not.toHaveBeenCalled()
    })

    it('should works for activate=true', async () => {
      renderHook(() => useConfirmExit({ message, onLeave, activate: true }))

      triggerBeforeUnload()
      expect(onLeave).toHaveBeenCalledTimes(1)
    })
  })
})
