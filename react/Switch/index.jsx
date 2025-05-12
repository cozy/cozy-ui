import MuiSwitch from '@material-ui/core/Switch'
import React from 'react'

import Icon from '../Icon'

/**
 * @type JSX.Element<HTMLDivElement, import('@material-ui/core/Switch').SwitchProps>
 */
const Switch = ({ icon, ...props }) => {
  const _icon = (
    <span className="cozySwitchThumb">
      {!!icon && <Icon icon={icon} size={14} />}
    </span>
  )

  return <MuiSwitch {...props} icon={_icon} checkedIcon={_icon} />
}

export default Switch
