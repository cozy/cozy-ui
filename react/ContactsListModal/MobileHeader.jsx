import Input from '@material-ui/core/Input'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../Icon'
import IconButton from '../IconButton'
import PreviousIcon from '../Icons/Previous'
import Paper from '../Paper'
import CozyTheme from '../providers/CozyTheme'

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
        <IconButton className="u-mr-half" onClick={onDismiss} size="medium">
          <Icon icon={PreviousIcon} />
        </IconButton>
        <Input
          type="text"
          placeholder={placeholder}
          id={placeholder}
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

MobileHeader.propTypes = {
  filter: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onDismiss: PropTypes.func
}

export default MobileHeader
