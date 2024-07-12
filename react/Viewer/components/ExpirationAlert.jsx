import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import {
  isForeignPaper,
  computeExpirationDate,
  computeExpirationNoticeLink,
  makeExpirationDescription
} from 'cozy-client/dist/models/paper'

import Alert from '../../Alert'
import Button from '../../Buttons'
import Link from '../../Link'
import Typography from '../../Typography'
import { withViewerLocales } from '../hoc/withViewerLocales'
import { useI18n } from '../../providers/I18n'

const FILES_DOCTYPE = 'io.cozy.files'

const ExpirationAlert = ({ file }) => {
  const { t, lang } = useI18n()
  const client = useClient()
  const [isBusy, setIsBusy] = useState(false)

  const handleClose = async () => {
    setIsBusy(true)
    await client.collection(FILES_DOCTYPE).updateMetadataAttribute(file.id, {
      ...file.metadata,
      hideExpirationAlert: true
    })
    setIsBusy(false)
  }

  const expirationDate = computeExpirationDate(file)
  const expirationNoticeLink = !isForeignPaper(file)
    ? computeExpirationNoticeLink(file)
    : null

  return (
    <Alert
      severity="warning"
      block
      action={
        <Button
          color="warning"
          variant="text"
          size="small"
          busy={isBusy}
          label={t('Viewer.panel.expiration.dismiss')}
          onClick={handleClose}
        />
      }
      className="u-mt-1 u-mh-1"
    >
      <Typography component="span" variant="inherit">
        <Typography component="span" variant="inherit">
          {makeExpirationDescription(expirationDate, {
            lang
          })}
        </Typography>
        {expirationNoticeLink && (
          <>
            <Typography component="span" variant="inherit">
              {' : '}
            </Typography>
            <Link
              href={expirationNoticeLink}
              rel="noreferrer"
              target="_blank"
              className="u-warning"
            >
              {new URL(expirationNoticeLink).hostname}
            </Link>
          </>
        )}
      </Typography>
    </Alert>
  )
}

ExpirationAlert.propTypes = {
  file: PropTypes.object.isRequired
}

export default withViewerLocales(ExpirationAlert)
