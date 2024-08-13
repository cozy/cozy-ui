import React from 'react'
import PropTypes from 'prop-types'

import { isExpired, isExpiringSoon } from 'cozy-client/dist/models/paper'

import { useI18n } from '../../providers/I18n'

import ExpirationAnnotation from './ExpirationAnnotation'

const SecondaryText = ({ secondary, file }) => {
  const { f } = useI18n()

  if (secondary) return secondary

  const date = file?.metadata?.datetime
    ? f(file?.metadata?.datetime, 'DD/MM/YYYY')
    : null

  return (
    <>
      {date ? date : ''}
      {(isExpired(file) || isExpiringSoon(file)) && (
        <>
          {date ? ' · ' : ''}
          <ExpirationAnnotation file={file} />
        </>
      )}
    </>
  )
}

SecondaryText.propTypes = {
  secondary: PropTypes.node,
  file: PropTypes.object
}

export default SecondaryText
