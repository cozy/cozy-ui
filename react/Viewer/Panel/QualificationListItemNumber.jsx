import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ListItem from '../../MuiCozyTheme/ListItem'
import ListItemSecondaryAction from '../../MuiCozyTheme/ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Dots from '../../Icons/Dots'
import QualificationListItemText from './QualificationListItemText'
import { useI18n } from '../../I18n'

const QualificationListItemNumber = forwardRef(
  ({ metadataComputed, toggleActionsMenu }, ref) => {
    const { t } = useI18n()
    const { name, value } = metadataComputed

    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <QualificationListItemText
          primary={t(`Viewer.panel.qualification.number.title.${name}`)}
          secondary={value}
        />
        <ListItemSecondaryAction>
          <IconButton ref={ref} onClick={() => toggleActionsMenu(value)}>
            <Icon icon={Dots} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
)
QualificationListItemNumber.displayName = 'QualificationListItemNumber'

QualificationListItemNumber.propTypes = {
  metadataComputed: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemNumber
