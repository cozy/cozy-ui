import React from 'react'
import PropTypes from 'prop-types'

import {
  computeExpirationDate,
  isExpired,
  makeExpiredMessage,
  makeExpiresInMessage
} from 'cozy-client/dist/models/paper'

import Typography from '../../Typography'
import { useI18n } from '../../providers/I18n'

import withListItemLocales from '../hoc/withListItemLocales'

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

export default withListItemLocales(ExpirationAnnotation)
