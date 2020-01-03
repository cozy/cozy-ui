import useEventListener from './useEventListener'
import { renderHook, cleanup } from '@testing-library/react-hooks'

const triggerEvent = (element, eventType) => {
  const event = new Event(eventType)
  element.dispatchEvent(event)
}

it('should subscribe to the given event on the given element', async () => {
  const cb = jest.fn()
  renderHook(() => useEventListener(document, 'click', cb))
  triggerEvent(document, 'click')

  expect(cb).toHaveBeenCalledTimes(1)

  await cleanup()

  triggerEvent(document, 'click')
  expect(cb).toHaveBeenCalledTimes(1)
})
