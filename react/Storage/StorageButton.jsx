import cx from 'classnames'
import React from 'react'

import { useInstanceInfo } from 'cozy-client'
import { buildPremiumLink } from 'cozy-client/dist/models/instance'

import { locales } from './locales'
import Button from '../Buttons'
import Icon from '../Icon'
import TwakeWorkplaceIcon from '../Icons/TwakeWorkplace'
import { useI18n, useExtendI18n } from '../providers/I18n'

const StorageButton = ({ className }) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const instanceInfo = useInstanceInfo()

  return (
    <Button
      className={cx('u-bdrs-4', className)}
      variant="secondary"
      label={t('Storage.increase')}
      startIcon={<Icon icon={TwakeWorkplaceIcon} size={22} />}
      size="small"
      height="auto"
      fullWidth
      component="a"
      target="_blank"
      href={buildPremiumLink(instanceInfo)}
    />
  )
}

export default StorageButton
