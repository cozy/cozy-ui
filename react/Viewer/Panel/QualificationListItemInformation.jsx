import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import {
  getTranslatedNameForInformationMetadata,
  formatInformationMetadataValue
} from 'cozy-client/dist/models/paper'

import ListItem from '../../ListItem'
import ListItemSecondaryAction from '../../ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Dots from '../../Icons/Dots'
import QualificationListItemText from './QualificationListItemText'
import { useI18n } from '../../providers/I18n'
import MidEllipsis from '../../MidEllipsis'

const QualificationListItemInformation = forwardRef(
  ({ formattedMetadataQualification, file, toggleActionsMenu }, ref) => {
    const { lang } = useI18n()
    const { name, value } = formattedMetadataQualification
    const qualificationLabel = file.metadata.qualification.label

    const formattedTitle = getTranslatedNameForInformationMetadata(name, {
      lang,
      qualificationLabel
    })
    const formattedValue = formatInformationMetadataValue(value, {
      lang,
      name,
      qualificationLabel
    })

    const titleComponent =
      formattedTitle === name ? <MidEllipsis text={name} /> : formattedTitle

    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <QualificationListItemText
          primary={titleComponent}
          secondary={formattedValue}
          disabled={!value}
        />
        <ListItemSecondaryAction>
          <IconButton
            ref={ref}
            onClick={() => toggleActionsMenu(value)}
            data-testid="toggleActionsMenuBtn"
          >
            <Icon icon={Dots} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
)

QualificationListItemInformation.displayName = 'QualificationListItemNumber'

QualificationListItemInformation.propTypes = {
  formattedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemInformation
