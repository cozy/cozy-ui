import React from 'react'

import { uploadStatus } from './index'
import Icon from '../Icon'
import CheckIcon from '../Icons/Check'
import CrossIcon from '../Icons/Cross'
import WarningIcon from '../Icons/Warning'
import Spinner from '../Spinner'

export const useStatusIcon = (statusToUse, progress) => {
  const { CANCEL, LOADING, DONE_STATUSES, ERROR_STATUSES, PENDING } =
    uploadStatus

  let statusIcon

  if (statusToUse === LOADING) {
    statusIcon = !progress ? <Spinner color="var(--primaryColor)" /> : null
  } else if (statusToUse === CANCEL) {
    statusIcon = <Icon icon={CrossIcon} color="var(--errorColor)" />
  } else if (ERROR_STATUSES.includes(statusToUse)) {
    statusIcon = <Icon icon={WarningIcon} color="var(--errorColor)" />
  } else if (DONE_STATUSES.includes(statusToUse)) {
    statusIcon = <Icon icon={CheckIcon} color="var(--successColor)" />
  } else if (statusToUse === PENDING) {
    statusIcon = null
  }

  return statusIcon
}
