import React from 'react'
import { useI18n, useExtendI18n } from 'twake-i18n'

import MemberOrGroupAvatar from './MemberOrGroupAvatar'
import { locales } from './locales'
import { memberPropType } from './propTypes'
import ActionsMenuMobileHeader from '../ActionsMenu/ActionsMenuMobileHeader'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'

const MemberRoleMenuHeader = ({ member }) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const { name, isCurrentUser } = member

  return (
    <ActionsMenuMobileHeader>
      <ListItemIcon>
        <MemberOrGroupAvatar member={member} size="m" />
      </ListItemIcon>
      <ListItemText
        primary={
          isCurrentUser
            ? t('MemberRow.you')
            : name || t('MemberRow.defaultName')
        }
        primaryTypographyProps={{ variant: 'h6' }}
      />
    </ActionsMenuMobileHeader>
  )
}

MemberRoleMenuHeader.propTypes = {
  member: memberPropType.isRequired
}

export default MemberRoleMenuHeader
