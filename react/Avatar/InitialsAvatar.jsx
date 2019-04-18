import React from 'react'
import PropTypes from 'prop-types'

import Avatar, { avatarPropTypes } from '.'

const getInitials = name => {
  if (!name) return ''
  if (typeof name === 'string') {
    return name[0].toUpperCase()
  }

  return ['givenName', 'familyName']
    .map(part => name[part] || '')
    .map(name => name[0])
    .join('')
}

const InitialsAvatar = ({ name, ...rest }) => (
  <Avatar text={getInitials(name)} {...rest} />
)

InitialsAvatar.propTypes = {
  ...avatarPropTypes,
  name: PropTypes.oneOfType([
    PropTypes.shape({
      givenName: PropTypes.string,
      familyName: PropTypes.string
    }),
    PropTypes.string
  ]).isRequired
}

export default InitialsAvatar
