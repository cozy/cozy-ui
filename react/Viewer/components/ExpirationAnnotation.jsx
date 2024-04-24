import React from 'react'
import PropTypes from 'prop-types'

import { models } from 'cozy-client'

import Typography from '../../Typography'
import { useI18n } from '../../providers/I18n'

const {
  computeExpirationDate,
  isExpired,
  makeExpiredMessage,
  makeExpiresInMessage
} = models.paper

const ExpirationAnnotation = ({ file }) => {
  const { lang } = useI18n()

  if (isExpired(file)) {
    return (
      <Typography component="span" variant="inherit" color="error">
        {makeExpiredMessage({ lang })}
      </Typography>
    )
  }

  const expirationDate = computeExpirationDate(file)

  return (
    <Typography component="span" variant="inherit" className="u-warning">
      {makeExpiresInMessage(expirationDate, { lang })}
    </Typography>
  )
}

ExpirationAnnotation.propTypes = {
  file: PropTypes.object.isRequired
}

export default ExpirationAnnotation
