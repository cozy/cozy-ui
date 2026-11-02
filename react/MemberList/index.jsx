import PropTypes from 'prop-types'
import React from 'react'
import { useGetIsMounted } from 'rooks'

import EmptyMembers from './EmptyMembers'
import List from '../List'
import MemberRow from '../MemberRow'
import { memberPropType, rolesPropType } from '../MemberRow/propTypes'

/**
 * Lists the members of a sharing, the owner first
 *
 * @param {object} props
 * @param {object[]} props.members - Members to display, see `MemberRow`
 * @param {object[]} props.roles - Roles a member can get, as `{ value, label }`
 * @param {Function} props.onRoleChange - Called with the member and its new role
 * @param {Function} props.onRemove - Called with the member to remove
 * @param {boolean} [props.showEmptyState] - Whether to show a placeholder
 * when there is no member but the owner
 * @param {string} [props.className] - Class name of the list
 */
const MemberList = ({
  members,
  roles,
  onRoleChange,
  onRemove,
  showEmptyState = true,
  className
}) => {
  const getIsMounted = useGetIsMounted()
  const owner = members.find(member => member.isOwner)
  const otherMembers = members.filter(member => !member.isOwner)

  return (
    <>
      <List className={className}>
        {owner && (
          <MemberRow
            member={owner}
            roles={roles}
            onRoleChange={onRoleChange}
            onRemove={onRemove}
          />
        )}
        {otherMembers.map(member => (
          <MemberRow
            key={member.id}
            member={member}
            roles={roles}
            isNew={getIsMounted()}
            onRoleChange={onRoleChange}
            onRemove={onRemove}
          />
        ))}
      </List>
      {showEmptyState && otherMembers.length === 0 && <EmptyMembers />}
    </>
  )
}

MemberList.propTypes = {
  members: PropTypes.arrayOf(memberPropType).isRequired,
  roles: rolesPropType.isRequired,
  onRoleChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  showEmptyState: PropTypes.bool,
  className: PropTypes.string
}

export default MemberList
