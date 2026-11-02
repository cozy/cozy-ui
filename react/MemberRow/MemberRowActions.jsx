import { Icon, CrossCircleOutline } from '@linagora/twake-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { useI18n } from 'twake-i18n'

import MemberRoleMenu from './MemberRoleMenu'
import { memberPropType, rolesPropType } from './propTypes'
import IconButton from '../IconButton'
import Spinner from '../Spinner'
import Typography from '../Typography'

const MemberRowActions = ({ member, roles, onRoleChange, onRemove }) => {
  const { t } = useI18n()
  const { role, canChangeRole, canRemove, removeIcon, removeLabel, isPending } =
    member
  const memberRoles = member.roles ?? roles

  const isRoleMenuShown = canChangeRole && !isPending

  return (
    <div className="u-flex u-flex-items-center u-g-1">
      {isPending && <Spinner />}
      {isRoleMenuShown ? (
        <MemberRoleMenu
          member={member}
          value={role}
          roles={memberRoles}
          onChange={newRole => onRoleChange(member, newRole)}
        />
      ) : (
        <Typography variant="body2">
          {memberRoles.find(memberRole => memberRole.value === role)?.label}
        </Typography>
      )}
      {canRemove && !isPending && (
        <IconButton
          onClick={() => onRemove(member)}
          size="small"
          className="u-ml-half"
          aria-label={removeLabel ?? t('MemberRow.remove')}
        >
          <Icon icon={removeIcon ?? CrossCircleOutline} />
        </IconButton>
      )}
    </div>
  )
}

MemberRowActions.propTypes = {
  member: memberPropType.isRequired,
  roles: rolesPropType.isRequired,
  onRoleChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default MemberRowActions
