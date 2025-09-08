import React from 'react'

import { useInstanceInfo } from 'cozy-client'
import { makeDiskInfos } from 'cozy-client/dist/models/instance'

import { locales } from './locales'
import Icon from '../Icon'
import CloudIcon from '../Icons/Cloud'
import { LinearProgress } from '../Progress'
import Typography from '../Typography'
import { useI18n, useExtendI18n } from '../providers/I18n'

/**
 * Show remaining disk space with a progress bar
 */
const StorageProgress = () => {
  useExtendI18n(locales)
  const { t } = useI18n()

  const { diskUsage } = useInstanceInfo()

  const { humanDiskQuota, humanDiskUsage, percentUsage } = makeDiskInfos(
    diskUsage.data?.used,
    diskUsage.data?.quota
  )

  return (
    <>
      <div className="u-flex u-flex-items-center">
        <Icon
          className="u-mr-half"
          icon={CloudIcon}
          size={24}
          color="var(--iconTextColor)"
        />
        <Typography variant="caption">{t('Storage.title')}</Typography>
      </div>
      <LinearProgress
        className="u-mv-half"
        variant="determinate"
        value={parseInt(percentUsage)}
      />
      <Typography variant="caption">
        {t('Storage.availability', {
          smart_count: (humanDiskQuota - humanDiskUsage).toFixed(2)
        })}
      </Typography>
    </>
  )
}

export default StorageProgress
