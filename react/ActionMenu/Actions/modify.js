import React from 'react'

import { generateWebLink, useClient } from 'cozy-client'

import Link from '../../Link'
import { useI18n } from '../../I18n'
import PenIcon from '../../Icons/Pen'
import withListItemLocales from '../../MuiCozyTheme/ListItem/hoc/withListItemLocales'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const modify = () => {
  return {
    name: 'modify',
    Component: withListItemLocales(({ className, docs, onClick }) => {
      const { t } = useI18n()
      const client = useClient()

      const contactId = docs[0]._id

      const webLink = generateWebLink({
        slug: 'contacts',
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        pathname: '/',
        hash: `/${contactId}/edit`
      })

      return (
        <ActionMenuItemWrapper
          className={className}
          icon={PenIcon}
          onClick={onClick}
        >
          <Link className="u-p-0" href={webLink} target="_blank">
            {t('ListItem.actions.modify')}
          </Link>
        </ActionMenuItemWrapper>
      )
    })
  }
}
