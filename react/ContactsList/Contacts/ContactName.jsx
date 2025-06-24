import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { getDisplayName } from 'cozy-client/dist/models/contact'

import Typography from '../../Typography'

const ContactName = ({ contact }) => {
  const familyName = contact.name?.familyName
  const displayName = getDisplayName(contact)
  const namesToDisplay = displayName?.split(' ')

  return (
    <Typography
      data-testid="ContactName" // used by a test in cozy-contacts
      className="u-ml-1"
      noWrap
      display="inline"
    >
      {namesToDisplay?.map((name, key) => (
        <span
          key={`display-${key}`}
          className={cx({ 'u-fw-bold': name === familyName })}
        >
          {name}
          &nbsp;
        </span>
      ))}
    </Typography>
  )
}

ContactName.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactName
