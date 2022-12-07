import React from 'react'
import PropTypes from 'prop-types'

import { models } from 'cozy-client'

import Typography from '../../Typography'
import { useI18n } from '../../I18n'
import { formatLocallyDistanceToNow } from '../../I18n/format'

const { computeExpirationDate, isExpired } = models.paper

const ExpirationAnnotation = ({ file }) => {
  const { t } = useI18n()

  if (isExpired(file)) {
    return (
      <Typography component="span" variant="inherit" color="error">
        {t('Viewer.panel.qualification.expired')}
      </Typography>
    )
  }

  const expirationDate = computeExpirationDate(file)

  return (
    <Typography component="span" variant="inherit" className="u-warning">
      {t('Viewer.panel.qualification.expiresIn', {
        duration: formatLocallyDistanceToNow(expirationDate)
      })}
    </Typography>
  )
}

ExpirationAnnotation.propTypes = {
  file: PropTypes.object.isRequired
}

export default ExpirationAnnotation
