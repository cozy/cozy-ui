import { act, renderHook } from '@testing-library/react-hooks'

import AlertProvider, { useAlert } from '.'
import Alert from '../../Alert'
import Snackbar from '../../Snackbar'

jest.mock('../../Snackbar', () => ({
  __esModule: true,
  default: jest.fn(({ children }) => children)
}))
jest.mock('../../Alert', () => ({
  __esModule: true,
  default: jest.fn(() => null)
}))

const setup = () => {
  const { result } = renderHook(() => useAlert(), { wrapper: AlertProvider })
  const lastProps = mock => mock.mock.calls[mock.mock.calls.length - 1][0]
  return {
    showAlert: args => act(() => result.current.showAlert(args)),
    lastSnackbarProps: () => lastProps(Snackbar),
    lastAlertProps: () => lastProps(Alert)
  }
}

describe('AlertProvider > showAlert', () => {
  beforeEach(() => {
    Snackbar.mockClear()
    Alert.mockClear()
  })

  it('should leave autoHideDuration undefined when caller omits duration', () => {
    const { showAlert, lastSnackbarProps } = setup()

    showAlert({ message: 'An error' })

    expect(lastSnackbarProps().open).toBe(true)
    expect(lastSnackbarProps().autoHideDuration).toBeUndefined()
  })

  it('should forward a numeric duration to Snackbar', () => {
    const { showAlert, lastSnackbarProps } = setup()

    showAlert({ message: 'hi', duration: 3000 })

    expect(lastSnackbarProps().autoHideDuration).toBe(3000)
  })

  it('should forward an explicit null duration to disable auto-hide', () => {
    const { showAlert, lastSnackbarProps } = setup()

    showAlert({ message: 'sticky', duration: null })

    expect(lastSnackbarProps().autoHideDuration).toBeNull()
  })

  it('should not carry caller-provided fields over to a later call that omits them', () => {
    const { showAlert, lastAlertProps } = setup()

    showAlert({ message: 'first', severity: 'error' })
    showAlert({ message: 'second' })

    expect(lastAlertProps().severity).toBeUndefined()
  })
})
