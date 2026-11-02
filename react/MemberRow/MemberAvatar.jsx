import React, { useState } from 'react'

import Avatar from '../Avatar'

const MemberAvatar = ({ initials, avatarUrl, ...rest }) => {
  // Remember which image url failed to load so we can fall back to the
  // initials. Storing the url (instead of a boolean) means a new url is
  // retried automatically, without an effect to reset the error state.
  const [erroredSrc, setErroredSrc] = useState(null)

  // The avatar can become unreachable (eg. the related sharing is revoked
  // while its members are still rendered), in which case the image request
  // fails. Without a fallback the browser shows a broken-image icon, so we
  // render the initials instead.
  return (
    <Avatar {...rest}>
      {avatarUrl && erroredSrc !== avatarUrl ? (
        <img
          width="100%"
          height="100%"
          src={avatarUrl}
          onError={() => setErroredSrc(avatarUrl)}
        />
      ) : (
        initials
      )}
    </Avatar>
  )
}

export default MemberAvatar
