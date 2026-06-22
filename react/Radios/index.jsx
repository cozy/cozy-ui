import { Icon, RadioChecked, RadioUnchecked } from '@linagora/twake-icons'
import MuiRadio from '@material-ui/core/Radio'
import React from 'react'

const Radios = props => {
  return (
    <MuiRadio
      {...props}
      icon={<Icon icon={RadioUnchecked} />}
      checkedIcon={<Icon icon={RadioChecked} />}
    />
  )
}

Radios.defaultProps = {
  color: 'primary'
}

export default Radios
