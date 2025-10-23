import PropTypes from 'prop-types'
import React from 'react'

import { copyToClipboard } from './helpers'
import Icon from '../../Icon'
import CopyIcon from '../../Icons/Copy'
import ListItem from '../../ListItem'
import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import Typography from '../../Typography'
import { useI18n } from '../../providers/I18n'

const ExpandedAttribute = ({ label, value, setAlertProps }) => {
  const { t } = useI18n()

  return (
    <ListItem
      className="u-pl-2"
      button
      onClick={copyToClipboard({ value, setAlertProps, t })}
    >
      <ListItemIcon>
        <Icon icon={CopyIcon} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography variant="caption">{label}</Typography>}
        secondary={<Typography variant="body2">{value}</Typography>}
      />
    </ListItem>
  )
}

ExpandedAttribute.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setAlertProps: PropTypes.func
}

export default ExpandedAttribute
