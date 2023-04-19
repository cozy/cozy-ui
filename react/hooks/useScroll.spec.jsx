import { renderHook, act } from '@testing-library/react-hooks'
import useScroll from './useScroll'

jest.mock('lodash/debounce', () => fn => fn)

describe('useScroll', () => {
  describe('horizontal scrolling', () => {
    it('should detect from an element', () => {
      const mockElement = document.createElement('div')

      const { result } = renderHook(() => useScroll(mockElement))

      act(() => {
        mockElement.scrollTop = 50
        mockElement.dispatchEvent(new CustomEvent('scroll'))
      })

      expect(result.current.scrollTop).toBe(50)
    })
    it('should detect from a window', () => {
      const { result } = renderHook(() => useScroll(window))

      act(() => {
        window.scrollY = 50
        window.dispatchEvent(new CustomEvent('scroll'))
      })

      expect(result.current.scrollTop).toBe(50)
    })
  })

  describe('vertical scrolling', () => {
    it('should detect from an element', () => {
      const mockElement = document.createElement('div')

      const { result } = renderHook(() => useScroll(mockElement))

      act(() => {
        mockElement.scrollLeft = 50
        mockElement.dispatchEvent(new CustomEvent('scroll'))
      })

      expect(result.current.scrollLeft).toBe(50)
    })
    it('should detect from a window', () => {
      const { result } = renderHook(() => useScroll(window))

      act(() => {
        window.scrollX = 50
        window.dispatchEvent(new CustomEvent('scroll'))
      })

      expect(result.current.scrollLeft).toBe(50)
    })
  })
})
