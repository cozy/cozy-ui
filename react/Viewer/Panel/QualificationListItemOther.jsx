import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { models } from 'cozy-client'

import ListItem from '../../MuiCozyTheme/ListItem'
import ListItemSecondaryAction from '../../MuiCozyTheme/ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Dots from '../../Icons/Dots'
import QualificationListItemText from './QualificationListItemText'
import { useI18n } from '../../I18n'
import MidEllipsis from '../../MidEllipsis'

const {
  document: {
    locales: { getBoundT }
  }
} = models

const QualificationListItemOther = forwardRef(
  ({ formatedMetadataQualification, toggleActionsMenu }, ref) => {
    const { t, lang } = useI18n()
    const scannerT = getBoundT(lang)
    const { name, value } = formatedMetadataQualification

    if (!value) return null

    const currentValueTranslated =
      name === 'qualification'
        ? scannerT(`Scan.items.${value}`)
        : t(`Viewer.panel.qualification.${value}`)

    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <QualificationListItemText
          primary={t(`Viewer.panel.qualification.${name}`)}
          secondary={<MidEllipsis text={currentValueTranslated} />}
        />
        <ListItemSecondaryAction>
          <IconButton
            ref={ref}
            onClick={() => toggleActionsMenu(currentValueTranslated)}
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
  formatedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemOther
