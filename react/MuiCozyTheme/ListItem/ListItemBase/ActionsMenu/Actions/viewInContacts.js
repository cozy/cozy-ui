import React from 'react'

import { generateWebLink, useClient } from 'cozy-client'

import Link from '../../../../../Link'
import { useI18n } from '../../../../../I18n'
import OpenappIcon from '../../../../../Icons/Openapp'
import withListItemLocales from '../../../hoc/withListItemLocales'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const viewInContacts = () => {
  return {
    name: 'viewInContacts',
    Component: withListItemLocales(({ className, docs, onClick }) => {
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
            {t('ListItem.actions.viewInContacts')}
          </Link>
        </ActionMenuItemWrapper>
      )
    })
  }
}
