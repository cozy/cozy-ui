import React from 'react'
import { withClient } from 'cozy-client'
import AppLinker, { generateWebLink } from '../AppLinker'
import { ButtonLink } from '../Button'

const DumbAddContactButton = props => {
  const { client, ...rest } = props

  const cozyURL = new URL(client.getStackClient().uri)
  const { cozySubDomainType } = client.getInstanceOptions()
  const contactsAppSlug = 'contacts'
  const contactsAppHref = generateWebLink({
    cozyUrl: cozyURL.origin,
    slug: contactsAppSlug,
    subDomainType: cozySubDomainType
  })

  return (
    <AppLinker slug={contactsAppSlug} href={contactsAppHref}>
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

const AddContactButton = withClient(DumbAddContactButton)

export default AddContactButton
