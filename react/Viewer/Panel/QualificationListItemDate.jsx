import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { models } from 'cozy-client'

import ListItem from '../../MuiCozyTheme/ListItem'
import ListItemSecondaryAction from '../../MuiCozyTheme/ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Dots from '../../Icons/Dots'
import Typography from '../../Typography'
import ExpirationAnnotation from '../components/ExpirationAnnotation'
import QualificationListItemText from './QualificationListItemText'
import { useI18n } from '../../I18n'
import { formatDate } from '../helpers'

const { isExpired, isExpiringSoon } = models.paper

const QualificationListItemDate = forwardRef(
  ({ file, formatedMetadataQualification, toggleActionsMenu }, ref) => {
    const { t, f, lang } = useI18n()
    const { name, value } = formatedMetadataQualification
    const formattedDate = value
      ? formatDate({ f, lang, date: value })
      : t('Viewer.panel.qualification.noInfo')

    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <QualificationListItemText
          primary={t(`Viewer.panel.qualification.date.title.${name}`)}
          secondary={
            <>
              <Typography component="span" variant="inherit">
                {formattedDate}
              </Typography>
              {(isExpired(file) || isExpiringSoon(file)) && (
                <>
                  <Typography component="span" variant="inherit">
                    {' · '}
                  </Typography>
                  <ExpirationAnnotation file={file} />
                </>
              )}
            </>
          }
          disabled={!value}
        />
        <ListItemSecondaryAction>
          <IconButton
            ref={ref}
            onClick={() => toggleActionsMenu(formattedDate)}
            size="large"
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
  file: PropTypes.object.isRequired,
  formatedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemDate
