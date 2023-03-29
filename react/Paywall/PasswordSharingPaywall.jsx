import React from 'react'

import Paywall from './Paywall'

const PasswordSharingPaywall = ({ onClose }) => {
  return (
    <Paywall variant="passwordSharing" onClose={onClose} isPublic={false} />
  )
}

export default PasswordSharingPaywall
