import React from 'react'
import Icon from '../Icon'

const DialogBackButton = ({ onClick }) => {
  return (
    <Icon
      onClick={onClick}
      icon="left"
      className="u-c-pointer u-coolGrey u-mr-1"
    />
  )
}

export default DialogBackButton
