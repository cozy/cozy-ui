import React from 'react'
import PropTypes from 'prop-types'

import { computeExpirationDate, isExpired } from 'cozy-client/dist/models/paper'

import Typography from '../../Typography'
import { useI18n } from '../../providers/I18n'
import { formatLocallyDistanceToNowStrict } from '../../providers/I18n/format'

import withListItemLocales from '../hoc/withListItemLocales'

const ExpirationAnnotation = ({ file }) => {
  const { t } = useI18n()

  if (isExpired(file)) {
    return (
      <Typography component="span" variant="inherit" color="error">
        {t('ListItem.file.expired')}
      </Typography>
    )
  }

  const expirationDate = computeExpirationDate(file)

  return (
    <Typography component="span" variant="inherit" className="u-warning">
      {t('ListItem.file.expiresIn', {
        duration: formatLocallyDistanceToNowStrict(expirationDate)
      })}
    </Typography>
  )
}

ExpirationAnnotation.propTypes = {
  file: PropTypes.object.isRequired
}

export default withListItemLocales(ExpirationAnnotation)
