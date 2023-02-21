import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useClient, models } from 'cozy-client'

import Alert from '../../Alert'
import Button from '../../Buttons'
import Link from '../../../!mui/Link'
import Typography from '../../Typography'
import { withViewerLocales } from '../hoc/withViewerLocales'
import { useI18n } from '../../I18n'
import { formatLocallyDistanceToNowStrict } from '../../I18n/format'

const FILES_DOCTYPE = 'io.cozy.files'

const { computeExpirationDate, computeExpirationNoticeLink } = models.paper

const ExpirationAlert = ({ file }) => {
  const { t } = useI18n()
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
  const expirationNoticeLink = computeExpirationNoticeLink(file)

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
          {t('Viewer.panel.expiration.description', {
            duration: formatLocallyDistanceToNowStrict(expirationDate)
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
