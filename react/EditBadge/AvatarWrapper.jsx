import React from 'react'

import Avatar from '../Avatar'
import Spinner from '../Spinner'

const AvatarWrapper = ({ status, setStatus, timestamp, src }) => {
  if (status === 'LOADING') {
    return (
      <>
        <Avatar className="u-o-50" size={94} />
        <Spinner className="u-m-0" middle size="large" />
      </>
    )
  }

  if (status === 'PRESENT') {
    return (
      <Avatar
        key={timestamp}
        size={94}
        src={src}
        alt="Avatar"
        onError={() => {
          setStatus('ABSENT')
        }}
      />
    )
  }

  return <Avatar key={timestamp} size={94} alt="Avatar" />
}

export default AvatarWrapper
