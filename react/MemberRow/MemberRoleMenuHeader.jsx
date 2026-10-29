import React from 'react'
import { useI18n } from 'twake-i18n'

import MemberAvatar from './MemberAvatar'
import MemberGroupAvatar from './MemberGroupAvatar'
import { memberPropType } from './propTypes'
import ActionsMenuMobileHeader from '../ActionsMenu/ActionsMenuMobileHeader'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'

const MemberRoleMenuHeader = ({ member }) => {
  const { t } = useI18n()
  const { name, avatarUrl, initials, color, isGroup, isCurrentUser } = member

  return (
    <ActionsMenuMobileHeader>
      <ListItemIcon>
        {isGroup ? (
          <MemberGroupAvatar size="m" color={color} />
        ) : (
          <MemberAvatar size="m" initials={initials} avatarUrl={avatarUrl} />
        )}
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
