import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import {
  getTranslatedNameForOtherMetadata,
  formatOtherMetadataValue
} from 'cozy-client/dist/models/paper'

import QualificationListItemText from './QualificationListItemText'
import Icon from '../../Icon'
import IconButton from '../../IconButton'
import Dots from '../../Icons/Dots'
import ListItem from '../../ListItem'
import ListItemSecondaryAction from '../../ListItemSecondaryAction'
import MidEllipsis from '../../MidEllipsis'
import { useI18n } from '../../providers/I18n'

const QualificationListItemOther = forwardRef(
  ({ formattedMetadataQualification, toggleActionsMenu }, ref) => {
    const { lang } = useI18n()
    const { name, value } = formattedMetadataQualification

    if (!value) return null

    const formattedTitle = getTranslatedNameForOtherMetadata(name, {
      lang
    })
    const formattedValue = formatOtherMetadataValue(value, {
      lang,
      name
    })

    return (
      <ListItem className="u-pl-2 u-pr-3">
        <QualificationListItemText
          primary={formattedTitle}
          secondary={<MidEllipsis text={formattedValue} />}
        />
        <ListItemSecondaryAction>
          <IconButton
            ref={ref}
            onClick={() => toggleActionsMenu(formattedValue)}
          >
            <Icon icon={Dots} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
)
QualificationListItemOther.displayName = 'QualificationListItemOther'

QualificationListItemOther.propTypes = {
  formattedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemOther
