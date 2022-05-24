import React from 'react'
import PropTypes from 'prop-types'

import ListItemText from '../../ListItemText'
import Typography from '../../Typography'

const QualificationListItemText = ({ primary, secondary }) => {
  return (
    <ListItemText
      disableTypography
      primary={<Typography variant={'caption'}>{primary}</Typography>}
      secondary={<Typography variant={'body1'}>{secondary}</Typography>}
    />
  )
}

QualificationListItemText.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired
}

export default QualificationListItemText
