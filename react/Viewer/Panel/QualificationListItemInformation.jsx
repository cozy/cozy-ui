import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ListItem from '../../MuiCozyTheme/ListItem'
import ListItemSecondaryAction from '../../MuiCozyTheme/ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Dots from '../../Icons/Dots'
import QualificationListItemText from './QualificationListItemText'
import { useI18n } from '../../I18n'
import MidEllipsis from '../../MidEllipsis'

const QualificationListItemInformation = forwardRef(
  ({ formatedMetadataQualification, toggleActionsMenu }, ref) => {
    const { t } = useI18n()
    const { name, value } = formatedMetadataQualification

    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <QualificationListItemText
          primary={t(`Viewer.panel.qualification.information.title.${name}`)}
          secondary={
            <MidEllipsis text={value} /> ||
            t('Viewer.panel.qualification.noInfo')
          }
          disabled={!value}
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

QualificationListItemInformation.displayName = 'QualificationListItemNumber'

QualificationListItemInformation.propTypes = {
  formatedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemInformation
