import React from 'react'
import PropTypes from 'prop-types'

import { components } from 'react-select'

const ControlDefault = ({
  selectProps: { onControlClicked },
  innerProps,
  ...props
}) => {
  // onTouchStart is necessary on mobile
  // see https://github.com/JedWatson/react-select/issues/3806#issuecomment-541325710

  const enhancedInnerProps = {
    ...innerProps,
    onClick: onControlClicked,
    onTouchStart: onControlClicked
  }
  return <components.Control {...props} innerProps={enhancedInnerProps} />
}

ControlDefault.propTypes = {
  selectProps: PropTypes.object.isRequired
}

export default ControlDefault
