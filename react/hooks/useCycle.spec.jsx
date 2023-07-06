import { renderHook, act } from '@testing-library/react-hooks'
import useCycle from './useCycle'

describe('useCycle', () => {
  it('should cycle through the number min and max', () => {
    const { result } = renderHook(() => useCycle(2, 0, 5))
    const prev = () => {
      act(() => {
        result.current[1]()
      })
    }
    const next = () => {
      act(() => {
        result.current[2]()
      })
    }
    expect(result.current[0]).toEqual(2)
    act(() => {
      next()
    })
    expect(result.current[0]).toEqual(3)
    act(() => {
      next()
    })
    expect(result.current[0]).toEqual(4)
    act(() => {
      next()
    })
    expect(result.current[0]).toEqual(5)
    act(() => {
      next()
    })
    expect(result.current[0]).toEqual(0)
    act(() => {
      prev()
    })
    expect(result.current[0]).toEqual(5)
    act(() => {
      prev()
    })
    expect(result.current[0]).toEqual(4)
  })

  it('should support undefined as initialState', () => {
    const { result, rerender } = renderHook(
      ({ initialValue }) => useCycle(initialValue, 0, 5),
      {
        initialProps: { initialValue: undefined }
      }
    )
    expect(result.current[0]).toEqual(undefined)
    rerender({ initialValue: 1 })
    expect(result.current[0]).toEqual(1)
    rerender({ initialValue: 2 })
    expect(result.current[0]).toEqual(1)
  })
})
