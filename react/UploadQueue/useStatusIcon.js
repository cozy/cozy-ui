import React from 'react'

import { uploadStatus } from './index'
import Icon from '../Icon'
import CheckIcon from '../Icons/Check'
import CheckCircleIcon from '../Icons/CheckCircle'
import CrossIcon from '../Icons/Cross'
import CrossCircleIcon from '../Icons/CrossCircle'
import WarningIcon from '../Icons/Warning'
import Spinner from '../Spinner'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

export const useStatusIcon = (statusToUse, progress) => {
  const { CANCEL, LOADING, DONE_STATUSES, ERROR_STATUSES, PENDING } =
    uploadStatus
  const SuccessIcon = isTwakeTheme() ? CheckCircleIcon : CheckIcon
  const ErrorIcon = isTwakeTheme() ? CrossCircleIcon : CrossIcon

  let statusIcon

  if (statusToUse === LOADING) {
    statusIcon = !progress ? <Spinner color="var(--primaryColor)" /> : null
  } else if (statusToUse === CANCEL) {
    statusIcon = <Icon icon={ErrorIcon} color="var(--errorColor)" />
  } else if (ERROR_STATUSES.includes(statusToUse)) {
    statusIcon = <Icon icon={WarningIcon} color="var(--errorColor)" />
  } else if (DONE_STATUSES.includes(statusToUse)) {
    statusIcon = <Icon icon={SuccessIcon} color="var(--successColor)" />
  } else if (statusToUse === PENDING) {
    statusIcon = null
  }

  return statusIcon
}
