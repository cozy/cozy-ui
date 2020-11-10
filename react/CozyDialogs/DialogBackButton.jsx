import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'cozy-ui/transpiled/react/Icon'

import PreviousIcon from 'cozy-ui/transpiled/react/Icons/Previous'

const DialogBackButton = ({ onClick }) => {
  return (
    <Icon
      onClick={onClick}
      icon={PreviousIcon}
      className="u-c-pointer u-coolGrey u-mr-1"
    />
  )
}

DialogBackButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DialogBackButton
