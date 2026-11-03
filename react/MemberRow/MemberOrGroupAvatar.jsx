import PropTypes from 'prop-types'
import React from 'react'

import MemberAvatar from './MemberAvatar'
import MemberGroupAvatar from './MemberGroupAvatar'
import { memberPropType } from './propTypes'

const MemberOrGroupAvatar = ({ member, size }) => {
  const { avatarUrl, initials, color, isGroup } = member

  if (isGroup) return <MemberGroupAvatar size={size} color={color} />

  return <MemberAvatar size={size} initials={initials} avatarUrl={avatarUrl} />
}

MemberOrGroupAvatar.propTypes = {
  member: memberPropType.isRequired,
  size: PropTypes.string.isRequired
}

export default MemberOrGroupAvatar
