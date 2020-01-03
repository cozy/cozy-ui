import React from 'react'
import { withClient, models, queryConnect } from 'cozy-client'
import AppLinker from '../AppLinker'
import { ButtonLink } from '../Button'
import compose from 'lodash/flowRight'
import useRealtime from '../hooks/useRealtime'
import useEventListener from '../hooks/useEventListener.js'

const DumbAddContactButton = props => {
  const { client, apps, ...rest } = props

  const wantedApp = { slug: 'contacts' }
  const installedApp = models.applications.isInstalled(apps.data, wantedApp)

  let href

  if (installedApp) {
    href = models.applications.getUrl(installedApp)
  } else {
    href = models.applications.getStoreInstallationURL(apps.data, wantedApp)
  }

  useRealtime(
    client,
    {
      'io.cozy.apps': {
        created: apps.fetch
      }
    },
    []
  )

  useEventListener(document, 'resume', apps.fetch)

  return (
    <AppLinker
      slug={installedApp ? installedApp.attributes.slug : 'store'}
      href={href}
    >
      {({ onClick, href }) => (
        <ButtonLink
          href={href}
          onClick={onClick}
          icon="plus"
          theme="secondary"
          target="_blank"
          {...rest}
        />
      )}
    </AppLinker>
  )
}

const AddContactButton = compose(
  withClient,
  queryConnect({
    apps: {
      query: client => client.all('io.cozy.apps'),
      as: 'apps'
    }
  })
)(DumbAddContactButton)

export default AddContactButton
