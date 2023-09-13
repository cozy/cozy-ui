import React from 'react'
import PropTypes from 'prop-types'

import { models } from 'cozy-client'

import Typography from '../../Typography'
import { useI18n } from '../../providers/I18n'
import { formatLocallyDistanceToNowStrict } from '../../providers/I18n/format'

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
        duration: formatLocallyDistanceToNowStrict(expirationDate)
      })}
    </Typography>
  )
}

ExpirationAnnotation.propTypes = {
  file: PropTypes.object.isRequired
}

export default ExpirationAnnotation
