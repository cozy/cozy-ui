import React from 'react'
import { withClient, models, queryConnect, Q } from 'cozy-client'

import AppLinker from '../AppLinker'
import { ButtonLink } from '../Button'
import compose from 'lodash/flowRight'
import useRealtime from '../hooks/useRealtime'
import useEventListener from '../hooks/useEventListener.js'
import PlusIcon from '../Icons/Plus'

const DumbAddContactButton = props => {
  const { client, apps, ...rest } = props

  const wantedApp = { slug: 'contacts' }
  const installedApp = models.applications.isInstalled(apps.data, wantedApp)

  let href

  if (installedApp) {
    href = models.applications.getUrl(installedApp)
  } else {
    href = models.applications.getStoreURL(apps.data, wantedApp)
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

  if (apps.fetchStatus === 'loading') {
    return null
  }

  return (
    <AppLinker
      app={{
        slug: installedApp ? installedApp.attributes.slug : 'store'
      }}
      href={href}
    >
      {({ onClick, href }) => (
        <ButtonLink
          href={href}
          onClick={onClick}
          icon={PlusIcon}
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
      query: () => Q('io.cozy.apps'),
      as: 'apps'
    }
  })
)(DumbAddContactButton)

export default AddContactButton
