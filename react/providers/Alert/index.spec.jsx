import { act, renderHook } from '@testing-library/react-hooks'

import AlertProvider, { useAlert } from '.'
import Snackbar from '../../Snackbar'

jest.mock('../../Snackbar', () => ({
  __esModule: true,
  default: jest.fn(() => null)
}))

const setup = () => {
  const { result } = renderHook(() => useAlert(), { wrapper: AlertProvider })
  return {
    showAlert: args => act(() => result.current.showAlert(args)),
    lastSnackbarProps: () => {
      const calls = Snackbar.mock.calls
      return calls[calls.length - 1][0]
    }
  }
}

describe('AlertProvider > showAlert', () => {
  beforeEach(() => {
    Snackbar.mockClear()
  })

  it('keeps the default duration (null) when caller does not provide one', () => {
    const { showAlert, lastSnackbarProps } = setup()

    showAlert({ message: 'An error' })

    expect(lastSnackbarProps().open).toBe(true)
    expect(lastSnackbarProps().autoHideDuration).toBe(null)
  })

  it('forwards the caller-provided duration to Snackbar', () => {
    const { showAlert, lastSnackbarProps } = setup()

    showAlert({ message: 'hi', duration: 3000 })

    expect(lastSnackbarProps().autoHideDuration).toBe(3000)
  })

  it('re-applies the default duration when a later call omits it', () => {
    const { showAlert, lastSnackbarProps } = setup()

    showAlert({ message: 'first', duration: 1000 })
    showAlert({ message: 'second' })

    expect(lastSnackbarProps().autoHideDuration).toBe(null)
  })
})
