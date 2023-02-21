import React from 'react'

import MuiRadio from '@material-ui/core/Radio'

import Icon from '../Icon'
import RadioCheckedIcon from '../Icons/RadioChecked'
import RadioUncheckedIcon from '../Icons/RadioUnchecked'

const Radios = props => {
  return (
    <MuiRadio
      {...props}
      icon={<Icon icon={RadioUncheckedIcon} />}
      checkedIcon={<Icon icon={RadioCheckedIcon} />}
    />
  )
}

Radios.defaultProps = {
  color: 'primary'
}

export default Radios
