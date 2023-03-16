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

export const makeInformationValue = ({ name, value, t, scannerT }) => {
  if (!value) {
    return t('Viewer.panel.qualification.noInfo')
  }

  if (name === 'noticePeriod') {
    return `${value} ${t('Viewer.panel.qualification.information.day', {
      smart_count: value
    })}`
  }

  if (name === 'contractType') {
    return scannerT(`Scan.attributes.contractType.${value}`)
  }

  return <MidEllipsis text={value} />
}

const QualificationListItemInformation = forwardRef(
  ({ formatedMetadataQualification, file, toggleActionsMenu }, ref) => {
    const { t, lang } = useI18n()
    const scannerT = getBoundT(lang)
    const { name, value } = formatedMetadataQualification
    const qualificationLabel = file.metadata.qualification.label

    const currentValue = makeInformationValue({ name, value, t, scannerT })
    const title =
      name === 'number'
        ? t(
            `Viewer.panel.qualification.information.title.${qualificationLabel}.${name}`
          )
        : t(`Viewer.panel.qualification.information.title.${name}`)

    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <QualificationListItemText
          primary={title}
          secondary={currentValue}
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
  formatedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemInformation
