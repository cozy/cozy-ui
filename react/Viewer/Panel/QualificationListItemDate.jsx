import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import {
  isExpired,
  isExpiringSoon,
  getTranslatedNameForDateMetadata,
  formatDateMetadataValue
} from 'cozy-client/dist/models/paper'

import ListItem from '../../ListItem'
import ListItemSecondaryAction from '../../ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Dots from '../../Icons/Dots'
import Typography from '../../Typography'
import ExpirationAnnotation from '../components/ExpirationAnnotation'
import QualificationListItemText from './QualificationListItemText'
import { useI18n } from '../../providers/I18n'

const QualificationListItemDate = forwardRef(
  ({ file, formattedMetadataQualification, toggleActionsMenu }, ref) => {
    const { f, lang } = useI18n()
    const { name, value } = formattedMetadataQualification
    const formattedTitle = getTranslatedNameForDateMetadata(name, { lang })
    const formattedDate = formatDateMetadataValue(value, {
      f,
      lang
    })
    const isExpirationDate = name === 'expirationDate'

    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <QualificationListItemText
          primary={formattedTitle}
          secondary={
            <>
              <Typography component="span" variant="inherit">
                {formattedDate}
              </Typography>
              {isExpirationDate && (isExpired(file) || isExpiringSoon(file)) && (
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
  formattedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
}

export default QualificationListItemDate
