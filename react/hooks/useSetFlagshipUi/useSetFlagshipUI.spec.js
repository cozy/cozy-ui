import { renderHook } from '@testing-library/react-hooks'
import { useSetFlagshipUI } from './useSetFlagshipUI'
import { useTheme } from '@material-ui/core'
import { useWebviewIntent } from 'cozy-intent'

jest.mock('@material-ui/core')
jest.mock('cozy-intent')

const mockCall = jest.fn()
const mockCSSValue = '#fff'

beforeEach(() => {
  useWebviewIntent.mockImplementation(() => ({ call: mockCall }))
  useTheme.mockImplementation(() => ({
    palette: { foo: { bar: mockCSSValue } }
  }))
})

afterEach(() => {
  mockCall.mockClear()
})

it('should call webviewIntent with the correct params, once at mount and once at unmount', () => {
  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      {
        bottomBackground: 'foo.bar',
        bottomOverlay: 'transparent',
        bottomTheme: 'dark',
        topBackground: 'foo.bar',
        topOverlay: 'transparent',
        topTheme: 'dark'
      },
      {
        bottomBackground: 'foo.bar',
        bottomOverlay: 'transparent',
        bottomTheme: 'light',
        topBackground: 'foo.bar',
        topOverlay: 'transparent',
        topTheme: 'light'
      }
    )
  )

  expect(mockCall).toHaveBeenNthCalledWith(1, 'setFlagshipUI', {
    bottomBackground: mockCSSValue,
    bottomOverlay: 'transparent',
    bottomTheme: 'dark',
    topBackground: mockCSSValue,
    topOverlay: 'transparent',
    topTheme: 'dark'
  })

  unmount()

  expect(mockCall).toHaveBeenNthCalledWith(2, 'setFlagshipUI', {
    bottomBackground: mockCSSValue,
    bottomOverlay: 'transparent',
    bottomTheme: 'light',
    topBackground: mockCSSValue,
    topOverlay: 'transparent',
    topTheme: 'light'
  })
})

it('should call webviewIntent with the correct params with few args, once at mount and once at unmount', () => {
  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      { bottomBackground: 'foo.bar' },
      { bottomBackground: 'foo.bar' }
    )
  )

  expect(mockCall).toHaveBeenNthCalledWith(1, 'setFlagshipUI', {
    bottomBackground: mockCSSValue
  })

  unmount()

  expect(mockCall).toHaveBeenNthCalledWith(2, 'setFlagshipUI', {
    bottomBackground: mockCSSValue
  })
})

it('should call nothing with no webviewIntent and not throw', () => {
  useWebviewIntent.mockImplementation(() => undefined)

  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      { bottomBackground: 'foo.bar' },
      { bottomBackground: 'foo.bar' }
    )
  )

  expect(mockCall).not.toHaveBeenCalled()

  unmount()

  expect(mockCall).not.toHaveBeenCalled()
})

it('should call nothing with no theme present and not throw', () => {
  useTheme.mockImplementation(() => undefined)

  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      { bottomBackground: 'foo.bar' },
      { bottomBackground: 'foo.bar' }
    )
  )

  expect(mockCall).not.toHaveBeenCalled()

  unmount()

  expect(mockCall).not.toHaveBeenCalled()
})

it('should call nothing with no theme and no webviewintent and not throw', () => {
  useTheme.mockImplementation(() => undefined)
  useWebviewIntent.mockImplementation(() => undefined)

  const { unmount } = renderHook(() =>
    useSetFlagshipUI(
      { bottomBackground: 'foo.bar' },
      { bottomBackground: 'foo.bar' }
    )
  )

  expect(mockCall).not.toHaveBeenCalled()

  unmount()

  expect(mockCall).not.toHaveBeenCalled()
})
