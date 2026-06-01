import { renderHook, act } from '@testing-library/react-hooks'
import React from 'react'
import I18n from 'twake-i18n'

import { useSubmitWithLoader } from './index'
import AlertProvider from '../../providers/Alert'

jest.mock('../../Snackbar', () => ({
  __esModule: true,
  default: ({ children }) => children
}))

const renderUseSubmitWithLoader = () =>
  renderHook(() => useSubmitWithLoader(), {
    wrapper: ({ children }) => (
      <I18n lang="en" dictRequire={() => ({})}>
        <AlertProvider>{children}</AlertProvider>
      </I18n>
    )
  })

describe('useSubmitWithLoader', () => {
  it('should not execute submit when isLoading is true', async () => {
    const { result } = renderUseSubmitWithLoader()
    const submit = jest.fn()

    act(() => {
      result.current.onSubmit({ submit, success: { message: 'ok' }, error: {} })
    })
    expect(result.current.isLoading).toBe(true)

    await act(async () => {
      await result.current.onSubmit({
        submit,
        success: { message: 'ok' },
        error: {}
      })
    })

    expect(submit).toHaveBeenCalledTimes(1)
  })

  it('should call success.action when submit succeeds', async () => {
    const { result } = renderUseSubmitWithLoader()
    const successAction = jest.fn()
    const submit = jest.fn().mockResolvedValue(undefined)

    await act(async () => {
      await result.current.onSubmit({
        submit,
        success: { message: 'Success', action: successAction },
        error: {}
      })
    })

    expect(successAction).toHaveBeenCalled()
  })

  it('should call error.action when submit throws', async () => {
    const { result } = renderUseSubmitWithLoader()
    const errorAction = jest.fn()
    const submit = jest.fn().mockRejectedValue(new Error('fail'))

    await act(async () => {
      await result.current.onSubmit({
        submit,
        success: {},
        error: { message: () => 'Error', action: errorAction }
      })
    })

    expect(errorAction).toHaveBeenCalled()
  })
})
