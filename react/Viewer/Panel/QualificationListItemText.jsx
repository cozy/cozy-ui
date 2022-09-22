import React from 'react'
import PropTypes from 'prop-types'

import ListItemText from '../../ListItemText'
import Typography from '../../Typography'

const QualificationListItemText = ({ primary, secondary }) => {
  return (
    <ListItemText
      disableTypography
      primary={<Typography variant="caption">{primary}</Typography>}
      secondary={
        <Typography component="div" variant="body1">
          {secondary}
        </Typography>
      }
    />
  )
}

QualificationListItemText.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default QualificationListItemText
