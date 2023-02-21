import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Typography from '../../Typography'

const ContactName = ({ displayName, familyName }) => {
  const namesToDisplay = (displayName && displayName.split(' ')) || []

  return (
    <Typography
      data-testid="ContactName" // used by a test in cozy-contacts
      className="u-ml-1"
      variant="body1"
      noWrap
      gutterBottom
      display="inline"
    >
      {namesToDisplay.map((name, key) => (
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
  displayName: PropTypes.string,
  familyName: PropTypes.string
}
ContactName.defaultProps = {
  displayName: ''
}

export default ContactName
