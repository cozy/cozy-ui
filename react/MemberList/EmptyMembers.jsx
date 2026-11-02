import { Icon, Team } from '@linagora/twake-icons'
import cx from 'classnames'
import React from 'react'
import { useI18n, useExtendI18n } from 'twake-i18n'

import { locales } from './locales'
import Typography from '../Typography'
import useBreakpoints from '../providers/Breakpoints'
import { alpha, makeStyles } from '../styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: alpha(
      theme.palette.secondary.main,
      theme.palette.action.hoverOpacity
    )
  }
}))

const EmptyMembers = () => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const { isMobile } = useBreakpoints()
  const classes = useStyles()

  return (
    <div
      className={cx(
        'u-flex u-flex-column u-flex-items-center u-pv-2 u-ph-1 u-bdrs-6',
        isMobile ? 'u-mh-1' : 'u-mh-2',
        classes.root
      )}
    >
      <Icon icon={Team} size={48} color="var(--primaryColorLight)" />
      <Typography variant="body2" className="u-mt-half">
        {t('MemberList.empty.title')}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {t('MemberList.empty.subtitle')}
      </Typography>
    </div>
  )
}

export default EmptyMembers
