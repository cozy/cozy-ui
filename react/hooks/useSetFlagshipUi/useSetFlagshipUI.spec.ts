/* eslint-disable @typescript-eslint/no-unsafe-call */
import { renderHook } from '@testing-library/react-hooks'
import { useSetFlagshipUI } from './useSetFlagshipUI'
import { useWebviewIntent } from 'cozy-intent'

jest.mock('cozy-intent')

const mockCall = jest.fn()
const mockCSSValue = '#fff'

beforeEach(() => {
  useWebviewIntent.mockImplementation(() => ({ call: mockCall }))
})

afterEach(() => {
  mockCall.mockClear()
})

it('should call webviewIntent with the correct params, once at mount and once at unmount', () => {
  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      {
        bottomBackground: mockCSSValue,
        bottomOverlay: 'transparent',
        bottomTheme: 'dark',
        topBackground: mockCSSValue,
        topOverlay: 'transparent',
        topTheme: 'dark'
      },
      {
        bottomBackground: mockCSSValue,
        bottomOverlay: 'transparent',
        bottomTheme: 'light',
        topBackground: mockCSSValue,
        topOverlay: 'transparent',
        topTheme: 'light'
      }
    )
  )

  expect(mockCall).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    {
      bottomBackground: mockCSSValue,
      bottomOverlay: 'transparent',
      bottomTheme: 'dark',
      topBackground: mockCSSValue,
      topOverlay: 'transparent',
      topTheme: 'dark'
    },
    'unknown (onMount)'
  )

  unmount()

  expect(mockCall).toHaveBeenNthCalledWith(
    2,
    'setFlagshipUI',
    {
      bottomBackground: mockCSSValue,
      bottomOverlay: 'transparent',
      bottomTheme: 'light',
      topBackground: mockCSSValue,
      topOverlay: 'transparent',
      topTheme: 'light'
    },
    'unknown (onUnmount)'
  )
})

it('should call webviewIntent with the correct params and forward the caller argument', () => {
  const caller = 'cozy-ui/someComponent'

  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      {
        bottomBackground: mockCSSValue,
        bottomOverlay: 'transparent',
        bottomTheme: 'dark',
        topBackground: mockCSSValue,
        topOverlay: 'transparent',
        topTheme: 'dark'
      },
      {
        bottomBackground: mockCSSValue,
        bottomOverlay: 'transparent',
        bottomTheme: 'light',
        topBackground: mockCSSValue,
        topOverlay: 'transparent',
        topTheme: 'light'
      },
      caller
    )
  )

  expect(mockCall).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    {
      bottomBackground: mockCSSValue,
      bottomOverlay: 'transparent',
      bottomTheme: 'dark',
      topBackground: mockCSSValue,
      topOverlay: 'transparent',
      topTheme: 'dark'
    },
    caller + ' (onMount)'
  )

  unmount()

  expect(mockCall).toHaveBeenNthCalledWith(
    2,
    'setFlagshipUI',
    {
      bottomBackground: mockCSSValue,
      bottomOverlay: 'transparent',
      bottomTheme: 'light',
      topBackground: mockCSSValue,
      topOverlay: 'transparent',
      topTheme: 'light'
    },
    caller + ' (onUnmount)'
  )
})

it('should call webviewIntent with the correct params with few args, once at mount and once at unmount', () => {
  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      { bottomBackground: mockCSSValue },
      { bottomBackground: mockCSSValue }
    )
  )

  expect(mockCall).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    {
      bottomBackground: mockCSSValue
    },
    'unknown (onMount)'
  )

  unmount()

  expect(mockCall).toHaveBeenNthCalledWith(
    2,
    'setFlagshipUI',
    {
      bottomBackground: mockCSSValue
    },
    'unknown (onUnmount)'
  )
})

it('should call nothing with no webviewIntent and not throw', () => {
  useWebviewIntent.mockImplementation(() => undefined)

  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      { bottomBackground: mockCSSValue },
      { bottomBackground: mockCSSValue }
    )
  )

  expect(mockCall).not.toHaveBeenCalled()

  unmount()

  expect(mockCall).not.toHaveBeenCalled()
})

it('should refuse to call bad args', () => {
  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      {
        bottomBackground: false,
        bottomOverlay: 0,
        bottomTheme: '',
        topBackground: null,
        topOverlay: undefined,
        topTheme: NaN
      },
      {
        bottomBackground: false,
        bottomOverlay: 0,
        bottomTheme: '',
        topBackground: null,
        topOverlay: undefined,
        topTheme: NaN
      }
    )
  )

  expect(mockCall).not.toHaveBeenCalled()

  unmount()

  expect(mockCall).not.toHaveBeenCalled()
})

it('should refuse to call when no arg in second arg', () => {
  const { unmount } = renderHook(() =>
    useSetFlagshipUI({ bottomBackground: mockCSSValue })
  )

  expect(mockCall).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    {
      bottomBackground: mockCSSValue
    },
    'unknown (onMount)'
  )

  unmount()

  expect(mockCall).toHaveBeenCalledTimes(1)
})

it('should refuse to call when no arg at all', () => {
  const { unmount } = renderHook(() => useSetFlagshipUI())

  expect(mockCall).not.toHaveBeenCalled()

  unmount()

  expect(mockCall).not.toHaveBeenCalled()
})

it('should refuse to call when empty arg', () => {
  const { unmount } = renderHook(() => useSetFlagshipUI({}, {}))

  expect(mockCall).not.toHaveBeenCalled()

  unmount()

  expect(mockCall).not.toHaveBeenCalled()
})

it('should refuse to call when invalid arg type', () => {
  const { unmount } = renderHook(() => useSetFlagshipUI('foo', 10))

  expect(mockCall).not.toHaveBeenCalled()

  unmount()

  expect(mockCall).not.toHaveBeenCalled()
})

it('should sanitize bad objects', () => {
  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      {
        bottomBackground: false,
        bottomOverlay: 0,
        bottomTheme: '',
        topBackground: 'red',
        topOverlay: undefined,
        topTheme: NaN
      },
      {
        bottomBackground: false,
        bottomOverlay: 0,
        bottomTheme: '',
        topBackground: 'blue',
        topOverlay: undefined,
        topTheme: NaN
      }
    )
  )

  expect(mockCall).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    {
      topBackground: 'red'
    },
    'unknown (onMount)'
  )

  unmount()

  expect(mockCall).toHaveBeenNthCalledWith(
    2,
    'setFlagshipUI',
    {
      topBackground: 'blue'
    },
    'unknown (onUnmount)'
  )
})
