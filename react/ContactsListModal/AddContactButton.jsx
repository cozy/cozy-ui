import React, { useEffect } from 'react'
import { withClient, models, queryConnect } from 'cozy-client'
import AppLinker from '../AppLinker'
import { ButtonLink } from '../Button'
import compose from 'lodash/flowRight'

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

  useEffect(() => {
    const refreshApps = () => {
      apps.fetch()
    }

    const subscribeRealtime = async () => {
      try {
        await client.plugins.realtime.subscribe(
          'created',
          'io.cozy.apps',
          refreshApps
        )
      } catch (err) {
        console.error(err)
        console.warning(
          'Impossible to subscribe to io.cozy.apps creation in realtime. Your app should have io.cozy.apps permission and your client should have realtime initialized.'
        )
      }
    }

    subscribeRealtime()

    return async () => {
      try {
        await client.plugins.realtime.unsubscribe(
          'created',
          'io.cozy.apps',
          refreshApps
        )
      } catch (err) {
        console.error(err)
        console.warning(
          'Impossible to unsubscribe from io.cozy.apps creation in realtime. Your app should have io.cozy.apps permission and your client should have realtime initialized.'
        )
      }
    }
  }, [])

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
