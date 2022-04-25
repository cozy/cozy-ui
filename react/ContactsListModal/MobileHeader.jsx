import React from 'react'

import CozyTheme from '../CozyTheme'
import Icon from '../Icon'
import PreviousIcon from '../Icons/Previous'
import Paper from '../Paper'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'

const barStyle = {
  height: 48
}

const MobileHeader = ({ filter, placeholder, onChange, onDismiss }) => {
  return (
    <CozyTheme variant="inverted">
      <Paper
        square
        elevation={0}
        className="u-flex u-flex-items-center u-pr-3 u-pl-half"
        style={barStyle}
      >
        <IconButton className="u-mr-half" onClick={onDismiss}>
          <Icon icon={PreviousIcon} />
        </IconButton>
        <Input
          type="text"
          placeholder={placeholder}
          value={filter}
          onChange={onChange}
          autoFocus
          fullWidth
          disableUnderline
        />
      </Paper>
    </CozyTheme>
  )
}

export default MobileHeader
