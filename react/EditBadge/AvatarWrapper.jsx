import React from 'react'

import Avatar from '../Avatar'
import Spinner from '../Spinner'

const AvatarWrapper = ({
  avatarStatus,
  setAvatarStatus,
  avatarTimestamp,
  src
}) => {
  if (avatarStatus === 'LOADING') {
    return (
      <>
        <Avatar className="u-o-50" size={94} />
        <Spinner className="u-m-0" middle size="large" />
      </>
    )
  }

  if (avatarStatus === 'PRESENT') {
    return (
      <Avatar
        key={avatarTimestamp}
        size={94}
        src={src}
        alt="Avatar"
        onError={() => {
          setAvatarStatus('ABSENT')
        }}
      />
    )
  }

  return <Avatar key={avatarTimestamp} size={94} alt="Avatar" />
}

export default AvatarWrapper
