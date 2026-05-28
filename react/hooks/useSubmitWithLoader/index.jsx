import { useState } from 'react'
import { useI18n } from 'twake-i18n'

import { useAlert } from '../../providers/Alert'

export const useSubmitWithLoader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { showAlert } = useAlert()
  const { t } = useI18n()

  const onSubmit = async ({ submit, success, error }) => {
    setIsLoading(true)

    try {
      await submit()

      showAlert({
        severity: 'success',
        message: success?.message || t('useSubmitWithLoader.success')
      })

      success?.action()
    } catch (e) {
      showAlert({
        severity: 'error',
        message: error?.message(e) || t('useSubmitWithLoader.error', { error })
      })

      error?.action()
    } finally {
      setIsLoading(false)
    }
  }

  return { onSubmit, isLoading }
}
