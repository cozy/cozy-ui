import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ListItem from '../../MuiCozyTheme/ListItem'
import ListItemSecondaryAction from '../../MuiCozyTheme/ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Dots from '../../Icons/Dots'
import QualificationListItemText from './QualificationListItemText'
import { useI18n } from '../../I18n'
import { formatDate } from '../helpers'

const QualificationListItemDate = forwardRef(
  ({ metadataComputed, toggleActionsMenu }, ref) => {
    const { t, f, lang } = useI18n()
    const { name, value } = metadataComputed
    const formattedDate = formatDate({ f, lang, date: value })

    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <QualificationListItemText
          primary={t(`Viewer.panel.qualification.date.title.${name}`)}
          secondary={formattedDate}
        />
        <ListItemSecondaryAction>
          <IconButton
            ref={ref}
            onClick={() => toggleActionsMenu(formattedDate)}
          >
            <Icon icon={Dots} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
)
QualificationListItemDate.displayName = 'QualificationListItemDate'

QualificationListItemDate.propTypes = {
  metadataComputed: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemDate
