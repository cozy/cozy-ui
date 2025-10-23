import cx from 'classnames'
import React from 'react'

import { numberOfReferencesForPluralForm } from './helpers'
import { formatRemainingTime } from './index'
import styles from './styles.styl'
import Typography from '../Typography'
import { useI18n } from '../providers/I18n'

const RemainingTime = ({ durationInSec }) => {
  const { t } = useI18n()

  return (
    <Typography
      variant="caption"
      className={cx(styles['upload-queue__progress-caption'], 'u-ellipsis')}
    >
      {t('item.remainingTime', {
        time: formatRemainingTime(durationInSec),
        smart_count: numberOfReferencesForPluralForm(durationInSec)
      })}
    </Typography>
  )
}

export default RemainingTime
