import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { useI18n, useExtendI18n } from 'twake-i18n'

import MemberAvatar from './MemberAvatar'
import MemberGroupAvatar from './MemberGroupAvatar'
import MemberRowActions from './MemberRowActions'
import { locales } from './locales'
import { memberPropType, rolesPropType } from './propTypes'
import Button from '../Buttons'
import Fade from '../Fade'
import ListItem from '../ListItem'
import ListItemIcon from '../ListItemIcon'
import ListItemSecondaryAction from '../ListItemSecondaryAction'
import ListItemText from '../ListItemText'
import Typography from '../Typography'
import useBreakpoints from '../providers/Breakpoints'

export const FADE_IN_DURATION = 600

/**
 * Displays a member of a sharing: avatar, name, subtitle, role and remove button
 *
 * @param {object} props
 * @param {object} props.member - Member to display, see `memberPropType`
 * @param {object[]} props.roles - Roles a member can get, as `{ value, label }`
 * @param {boolean} [props.isNew] - Whether the row fades in
 * @param {Function} props.onRoleChange - Called with the member and its new role
 * @param {Function} props.onRemove - Called with the member to remove
 */
const MemberRow = ({ member, roles, isNew, onRoleChange, onRemove }) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const { isMobile } = useBreakpoints()
  const {
    name,
    subtitle,
    avatarUrl,
    initials,
    color,
    isGroup,
    isOwner,
    isCurrentUser,
    action,
    onClick
  } = member

  const ActionsWrapper = onClick ? ListItemSecondaryAction : Fragment
  const actionsWrapperProps = onClick
    ? { className: isMobile ? 'u-mr-1' : 'u-mr-2' }
    : undefined

  return (
    <Fade in timeout={isNew ? FADE_IN_DURATION : 0}>
      <ListItem
        button={Boolean(onClick)}
        onClick={onClick}
        gutters={isMobile ? 'default' : 'double'}
        size="small"
      >
        <ListItemIcon>
          {isGroup ? (
            <MemberGroupAvatar size="m" color={color} />
          ) : (
            <MemberAvatar size="m" initials={initials} avatarUrl={avatarUrl} />
          )}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1">
              {isCurrentUser
                ? t('MemberRow.you')
                : name || t('MemberRow.defaultName')}
            </Typography>
          }
          secondary={subtitle}
        />
        <ActionsWrapper {...actionsWrapperProps}>
          {isOwner && (
            <Typography variant="body2">{t('MemberRow.owner')}</Typography>
          )}
          {action && (
            <Button
              style={{ position: 'initial' }} // fix z-index bug on iOS when under a BottomDrawer due to relative position
              variant="text"
              onClick={action.onClick}
              label={action.label}
            />
          )}
          {!isOwner && !action && (
            <MemberRowActions
              member={member}
              roles={roles}
              onRoleChange={onRoleChange}
              onRemove={onRemove}
            />
          )}
        </ActionsWrapper>
      </ListItem>
    </Fade>
  )
}

MemberRow.propTypes = {
  member: memberPropType.isRequired,
  roles: rolesPropType.isRequired,
  isNew: PropTypes.bool,
  onRoleChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default MemberRow
