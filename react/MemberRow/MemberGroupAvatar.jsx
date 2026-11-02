import { Icon, Peoples } from '@linagora/twake-icons'
import React from 'react'

import Avatar, { colorToGradient } from '../Avatar'
import { COLORS } from '../ColorList/helpers'

const DEFAULT_COLOR = COLORS[4]

const MemberGroupAvatar = ({ size, color = DEFAULT_COLOR, className }) => {
  return (
    <Avatar size={size} color={colorToGradient(color)} className={className}>
      <Icon icon={Peoples} />
    </Avatar>
  )
}

export default MemberGroupAvatar
