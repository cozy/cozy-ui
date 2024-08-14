import React from 'react'

import { generateWebLink, useClient } from 'cozy-client'

import withActionsLocales from './locales/withActionsLocales'
import OpenappIcon from '../../../Icons/Openapp'
import Link from '../../../Link'
import { useI18n } from '../../../providers/I18n'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const viewInContacts = () => {
  return {
    name: 'viewInContacts',
    Component: withActionsLocales(({ className, docs, onClick }) => {
      const { t } = useI18n()
      const client = useClient()

      const contactId = docs[0]._id

      const webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: `/${contactId}`
      })

      return (
        <ActionMenuItemWrapper
          className={className}
          icon={OpenappIcon}
          onClick={onClick}
        >
          <Link className="u-p-0" href={webLink} target="_blank">
            {t('viewInContacts')}
          </Link>
        </ActionMenuItemWrapper>
      )
    })
  }
}
