import React from 'react'
import Icon from '../Icon'

const DialogBackButton = ({ onClick }) => {
  return (
    <Icon
      onClick={onClick}
      icon="previous"
      className="u-c-pointer u-coolGrey u-mr-1"
    />
  )
}

export default DialogBackButton
